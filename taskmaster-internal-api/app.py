from fastapi import FastAPI, HTTPException, Depends
from fastapi.openapi.utils import get_openapi
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import sqlite3
import os

app = FastAPI(
    title="TaskMaster License Management API",
    description="A simple API for managing TaskMaster software licenses with SQLite database",
    version="1.0.0",
    openapi_tags=[
        {
            "name": "licenses",
            "description": "Operations for managing TaskMaster software licenses",
        },
        {
            "name": "system",
            "description": "System health and status operations",
        },
    ],
)

# Database setup
DATABASE_URL = "licenses.db"

def get_db_connection():
    """Get database connection"""
    conn = sqlite3.connect(DATABASE_URL, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

# Dependency for database connection
def get_db():
    """Dependency to get database connection"""
    conn = get_db_connection()
    try:
        yield conn
    finally:
        conn.close()

def init_database():
    """Initialize the database with required tables"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS licenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            license_key TEXT UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT 1
        )
    ''')
    
    conn.commit()
    conn.close()

# Initialize database on startup
init_database()

# Pydantic models
class LicenseBase(BaseModel):
    """Base TaskMaster license model for common fields"""
    name: str = Field(..., description="Name of the TaskMaster license", json_schema_extra={"example": "TaskMaster Premium License"})
    description: Optional[str] = Field(None, description="Description of the TaskMaster license", json_schema_extra={"example": "Full access to all TaskMaster features"})
    license_key: str = Field(..., description="Unique TaskMaster license key", json_schema_extra={"example": "TASKMASTER-PREMIUM-12345-ABCDE"})
    is_active: bool = Field(True, description="Whether the TaskMaster license is active", json_schema_extra={"example": True})

class LicenseCreate(LicenseBase):
    """Model for creating a new TaskMaster license"""
    pass

class License(LicenseBase):
    """Model representing a TaskMaster license with all fields"""
    id: int = Field(..., description="Unique identifier for the TaskMaster license", json_schema_extra={"example": 1})
    created_at: datetime = Field(..., description="When the TaskMaster license was created", json_schema_extra={"example": "2023-12-01T10:00:00Z"})

    model_config = {"from_attributes": True}

class LicenseList(BaseModel):
    """Response model for listing TaskMaster licenses"""
    licenses: List[License] = Field(..., description="List of TaskMaster licenses")
    total: int = Field(..., description="Total number of TaskMaster licenses", json_schema_extra={"example": 5})

class ErrorResponse(BaseModel):
    """Error response model"""
    error: str = Field(..., description="Error message", json_schema_extra={"example": "TaskMaster license key already exists"})

class HealthResponse(BaseModel):
    """Health check response model"""
    status: str = Field(..., description="Health status", json_schema_extra={"example": "healthy"})
    timestamp: datetime = Field(..., description="Current timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})

# Helper functions
def license_from_row(row) -> License:
    """Convert database row to License model"""
    return License(
        id=row['id'],
        name=row['name'],
        description=row['description'] or "",
        license_key=row['license_key'],
        created_at=datetime.fromisoformat(row['created_at']),
        is_active=bool(row['is_active'])
    )

# API Endpoints
@app.get(
    "/licenses",
    response_model=List[License],
    tags=["licenses"],
    summary="List all TaskMaster licenses",
    operation_id="list_licenses",
    description="""
    Retrieve a list of all TaskMaster licenses in the system.
    Returns all TaskMaster licenses with their details including creation timestamp and status.
    """,
    responses={
        200: {"description": "Successful response with list of licenses"},
    },
)
async def list_licenses(db: sqlite3.Connection = Depends(get_db)):
    """List all licenses in the system"""
    cursor = db.cursor()
    cursor.execute("SELECT * FROM licenses ORDER BY created_at DESC")
    rows = cursor.fetchall()
    
    return [license_from_row(row) for row in rows]

@app.post(
    "/licenses",
    response_model=License,
    status_code=201,
    tags=["licenses"],
    summary="Create a new TaskMaster license",
    operation_id="create_license",
    description="""
    Create a new TaskMaster license in the system.
    Requires a unique TaskMaster license key and a name. Description and active status are optional.
    """,
    responses={
        201: {"description": "License created successfully"},
        400: {"description": "Bad request - missing required fields"},
        409: {"description": "Conflict - license key already exists"},
        500: {"description": "Internal server error"},
    },
)
async def create_license(license_data: LicenseCreate, db: sqlite3.Connection = Depends(get_db)):
    """Create a new license"""
    cursor = db.cursor()
    
    try:
        # Check if license_key already exists
        cursor.execute("SELECT id FROM licenses WHERE license_key = ?", (license_data.license_key,))
        if cursor.fetchone():
            raise HTTPException(status_code=409, detail="TaskMaster license key already exists")
        
        # Insert new license
        cursor.execute("""
            INSERT INTO licenses (name, description, license_key, is_active)
            VALUES (?, ?, ?, ?)
        """, (
            license_data.name,
            license_data.description or "",
            license_data.license_key,
            license_data.is_active
        ))
        
        # Get the created license
        license_id = cursor.lastrowid
        cursor.execute("SELECT * FROM licenses WHERE id = ?", (license_id,))
        row = cursor.fetchone()
        
        db.commit()
        
        return license_from_row(row)
        
    except HTTPException:
        db.rollback()
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to create TaskMaster license")

@app.get(
    "/health",
    response_model=HealthResponse,
    tags=["system"],
    summary="Health check",
    operation_id="health_check",
    description="""
    Check if the API is running and healthy.
    Returns current status and timestamp.
    """,
    responses={
        200: {"description": "API is healthy"},
    },
)
async def health_check():
    """Health check endpoint"""
    return HealthResponse(
        status="healthy",
        timestamp=datetime.now()
    )

def custom_openapi():
    """Customize OpenAPI Output with x-gram extensions for getgram MCP servers"""
    
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title=app.title,
        version=app.version,
        description=app.description,
        routes=app.routes,
        tags=app.openapi_tags,
    )

    # Add x-gram extensions to specific operations
    x_gram_extensions = {
        "list_licenses": {
            "x-gram": {
                "name": "list_taskmaster_licenses",
                "summary": "List all TaskMaster software licenses",
                "description": """<context>
                This tool retrieves all TaskMaster software licenses in the system, including their details
                such as name, description, license key, creation date, and active status.
                Perfect for getting an overview of all available TaskMaster licenses.
                </context>

                <prerequisites>
                - No authentication required
                - Returns all TaskMaster licenses regardless of status
                - Results are ordered by creation date (newest first)
                </prerequisites>""",
                "responseFilterType": "jq",
            }
        },
        "create_license": {
            "x-gram": {
                "name": "create_taskmaster_license",
                "summary": "Create a new TaskMaster software license",
                "description": """<context>
                This tool creates a new TaskMaster software license in the system. Requires a unique
                TaskMaster license key and name. Useful for adding new TaskMaster licenses to the system.
                </context>

                <prerequisites>
                - TaskMaster license key must be unique across all licenses
                - Name is required and should be descriptive
                - Description is optional but recommended
                - TaskMaster license will be active by default unless specified otherwise
                </prerequisites>""",
                "responseFilterType": "jq",
            }
        },
        "health_check": {
            "x-gram": {
                "name": "health_check",
                "summary": "Check TaskMaster License API health status",
                "description": """<context>
                This endpoint provides a simple health check to verify that the TaskMaster License
                Management API is running and responsive. Returns current timestamp and status.
                </context>

                <prerequisites>
                - No authentication required
                - Always available for monitoring purposes
                - Returns current system timestamp
                </prerequisites>""",
                "responseFilterType": "jq",
            }
        },
    }

    # Apply x-gram extensions to paths
    if "paths" in openapi_schema:
        for path, path_item in openapi_schema["paths"].items():
            for method, operation in path_item.items():
                if method.lower() in ["get", "post", "put", "delete", "patch"]:
                    operation_id = operation.get("operationId")
                    if operation_id in x_gram_extensions:
                        operation.update(x_gram_extensions[operation_id])

    app.openapi_schema = openapi_schema
    return app.openapi_schema

# Override the default OpenAPI function
app.openapi = custom_openapi

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)