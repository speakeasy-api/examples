from fastapi import FastAPI, HTTPException, Depends
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import sqlite3
import os
from app.core.database import get_db, init_database
from app.core.config import settings
from app.models.license import License, LicenseCreate, LicenseList, LicenseValidation, LicenseValidationResponse, ErrorResponse
from app.models.user import User, UserCreate, UserLogin, Token, UserUpdate
from app.models.campaign import Campaign, CampaignCreate, CampaignUpdate
from app.models.support_ticket import SupportTicket, SupportTicketCreate, SupportTicketUpdate
from app.core.security import get_password_hash, verify_password, create_access_token
from app.api.dependencies import get_current_active_user, require_role
from app.models.user import UserRole
from datetime import timedelta

app = FastAPI(
    title="License Distribution API",
    version="1.0.0",
    openapi_tags=[
        {"name": "licenses"},
        {"name": "users"},
        {"name": "marketing"},
        {"name": "customer-service"},
        {"name": "system"},
    ],
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database on startup
init_database()

# Helper functions
def license_from_row(row) -> License:
    """Convert database row to License model"""
    return License(
        id=row['id'],
        name=row['name'],
        description=row['description'] or "",
        license_key=row['license_key'],
        user_id=row['user_id'] if 'user_id' in row.keys() else None,
        license_type=row['license_type'] if 'license_type' in row.keys() else 'basic',
        status=row['status'] if 'status' in row.keys() else 'active',
        expires_at=row['expires_at'] if 'expires_at' in row.keys() else None,
        created_at=datetime.fromisoformat(row['created_at']),
        updated_at=datetime.fromisoformat(row['updated_at'] if 'updated_at' in row.keys() else row['created_at']),
        is_active=bool(row['is_active'])
    )

def user_from_row(row) -> User:
    """Convert database row to User model"""
    return User(
        id=row['id'],
        email=row['email'],
        username=row['username'],
        full_name=row['full_name'],
        role=row['role'],
        is_active=bool(row['is_active']),
        created_at=datetime.fromisoformat(row['created_at']),
        updated_at=datetime.fromisoformat(row['updated_at'])
    )

def campaign_from_row(row) -> Campaign:
    """Convert database row to Campaign model"""
    return Campaign(
        id=row['id'],
        name=row['name'],
        description=row['description'],
        status=row['status'],
        target_audience=row['target_audience'],
        start_date=row['start_date'],
        end_date=row['end_date'],
        created_by=row['created_by'],
        created_at=datetime.fromisoformat(row['created_at']),
        updated_at=datetime.fromisoformat(row['updated_at']),
        is_active=bool(row['is_active'])
    )

def ticket_from_row(row) -> SupportTicket:
    """Convert database row to SupportTicket model"""
    return SupportTicket(
        id=row['id'],
        title=row['title'],
        description=row['description'],
        status=row['status'],
        priority=row['priority'],
        user_id=row['user_id'],
        assigned_to=row['assigned_to'],
        created_at=datetime.fromisoformat(row['created_at']),
        updated_at=datetime.fromisoformat(row['updated_at']),
        resolved_at=row['resolved_at'],
        is_active=bool(row['is_active'])
    )

# Health check endpoint
class HealthResponse(BaseModel):
    status: str
    timestamp: datetime

@app.get("/health", response_model=HealthResponse, tags=["system"])
async def health_check():
    return HealthResponse(
        status="healthy",
        timestamp=datetime.now()
    )

# User Management Endpoints
@app.post("/users/register", response_model=User, status_code=201, tags=["users"])
async def register_user(user: UserCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    
    try:
        # Check if user already exists
        cursor.execute("SELECT id FROM users WHERE email = ? OR username = ?", (user.email, user.username))
        if cursor.fetchone():
            raise HTTPException(status_code=400, detail="Email or username already registered")
        
        # Create new user
        hashed_password = get_password_hash(user.password)
        cursor.execute("""
            INSERT INTO users (email, username, hashed_password, full_name, role, is_active)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            user.email,
            user.username,
            hashed_password,
            user.full_name,
            user.role.value,
            True
        ))
        
        # Get the created user
        user_id = cursor.lastrowid
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        row = cursor.fetchone()
        
        db.commit()
        return user_from_row(row)
        
    except HTTPException:
        db.rollback()
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to create user")

@app.post("/users/login", response_model=Token, tags=["users"])
async def login_user(user_credentials: UserLogin, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE username = ?", (user_credentials.username,))
    row = cursor.fetchone()
    
    if not row or not row['is_active']:
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password"
        )
    
    # Verify password
    if not verify_password(user_credentials.password, row['hashed_password']):
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password"
        )
    
    # Create access token
    access_token_expires = timedelta(minutes=settings.access_token_expire_minutes)
    access_token = create_access_token(
        data={"sub": row['username']}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users", response_model=List[User], tags=["users"])
async def list_users(name: Optional[str] = None, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    if name:
        cursor.execute("SELECT * FROM users WHERE full_name LIKE ? OR username LIKE ?", (f"%{name}%", f"%{name}%"))
    else:
        cursor.execute("SELECT * FROM users ORDER BY created_at DESC")
    rows = cursor.fetchall()
    return [user_from_row(row) for row in rows]

@app.get("/users/{user_id}", response_model=User, tags=["users"])
async def get_user(user_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    row = cursor.fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="User not found")
    return user_from_row(row)

# License Management Endpoints (existing functionality enhanced)
@app.get("/licenses", response_model=List[License], tags=["licenses"])
async def list_licenses(db: sqlite3.Connection = Depends(get_db)):
    """List all licenses in the system"""
    cursor = db.cursor()
    cursor.execute("SELECT * FROM licenses ORDER BY created_at DESC")
    rows = cursor.fetchall()
    
    return [license_from_row(row) for row in rows]

@app.post("/licenses/users", response_model=User, status_code=201, tags=["licenses"])
async def create_license_user(user: UserCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    try:
        cursor.execute("SELECT id FROM users WHERE email = ? OR username = ?", (user.email, user.username))
        if cursor.fetchone():
            raise HTTPException(status_code=400, detail="Email or username already registered")
        
        hashed_password = get_password_hash(user.password)
        cursor.execute("""
            INSERT INTO users (email, username, hashed_password, full_name, role, is_active)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (user.email, user.username, hashed_password, user.full_name, user.role.value, True))
        
        user_id = cursor.lastrowid
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        row = cursor.fetchone()
        
        db.commit()
        return user_from_row(row)
    except HTTPException:
        db.rollback()
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to create user")

@app.post("/licenses", response_model=License, status_code=201, tags=["licenses"])
async def create_license(license_data: LicenseCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    
    try:
        # Check if license_key already exists
        cursor.execute("SELECT id FROM licenses WHERE license_key = ?", (license_data.license_key,))
        if cursor.fetchone():
            raise HTTPException(status_code=409, detail="License key already exists")
        
        # Insert new license
        license_type_value = license_data.license_type.value if hasattr(license_data.license_type, 'value') else str(license_data.license_type)
        cursor.execute("""
            INSERT INTO licenses (name, description, license_key, user_id, license_type, status, expires_at, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            license_data.name,
            license_data.description or "",
            license_data.license_key,
            license_data.user_id,
            license_type_value,
            'active',
            license_data.expires_at,
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
        raise HTTPException(status_code=500, detail="Failed to create license")

@app.post("/licenses/validate", response_model=LicenseValidationResponse, tags=["licenses"])
async def validate_license(license_validation: LicenseValidation, db: sqlite3.Connection = Depends(get_db)):
    """Validate a license key"""
    cursor = db.cursor()
    cursor.execute("SELECT * FROM licenses WHERE license_key = ?", (license_validation.license_key,))
    row = cursor.fetchone()
    
    if not row:
        return LicenseValidationResponse(
            is_valid=False,
            license_type=None,
            status=None,
            expires_at=None,
            user_id=None
        )
    
    # Check if license is active and not expired
    is_valid = (
        bool(row['is_active']) and 
        row['status'] == 'active' and
        (row['expires_at'] is None or datetime.fromisoformat(row['expires_at']).replace(tzinfo=None) > datetime.now())
    )
    
    return LicenseValidationResponse(
        is_valid=is_valid,
        license_type=row['license_type'],
        status=row['status'],
        expires_at=row['expires_at'],
        user_id=row['user_id']
    )

# Marketing Campaign Endpoints
@app.post("/marketing/campaigns", response_model=Campaign, status_code=201, tags=["marketing"])
async def create_campaign(
    campaign_data: CampaignCreate,
    db: sqlite3.Connection = Depends(get_db)
):
    """Create a new marketing campaign"""
    cursor = db.cursor()
    
    try:
        cursor.execute("""
            INSERT INTO campaigns (name, description, target_audience, start_date, end_date, created_by, status, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            campaign_data.name,
            campaign_data.description,
            campaign_data.target_audience,
            campaign_data.start_date,
            campaign_data.end_date,
            1,  # Demo user ID
            'draft',
            True
        ))
        
        campaign_id = cursor.lastrowid
        cursor.execute("SELECT * FROM campaigns WHERE id = ?", (campaign_id,))
        row = cursor.fetchone()
        
        db.commit()
        return campaign_from_row(row)
        
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to create campaign")

@app.get("/marketing/campaigns", response_model=List[Campaign], tags=["marketing"])
async def list_campaigns(
    db: sqlite3.Connection = Depends(get_db)
):
    """List all marketing campaigns"""
    cursor = db.cursor()
    cursor.execute("SELECT * FROM campaigns ORDER BY created_at DESC")
    rows = cursor.fetchall()
    
    return [campaign_from_row(row) for row in rows]

@app.post("/marketing/users", response_model=User, status_code=201, tags=["marketing"])
async def create_marketing_user(user: UserCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    try:
        cursor.execute("SELECT id FROM users WHERE email = ? OR username = ?", (user.email, user.username))
        if cursor.fetchone():
            raise HTTPException(status_code=400, detail="Email or username already registered")
        
        hashed_password = get_password_hash(user.password)
        cursor.execute("""
            INSERT INTO users (email, username, hashed_password, full_name, role, is_active)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (user.email, user.username, hashed_password, user.full_name, user.role.value, True))
        
        user_id = cursor.lastrowid
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        row = cursor.fetchone()
        
        db.commit()
        return user_from_row(row)
    except HTTPException:
        db.rollback()
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to create user")

# Customer Service Endpoints
@app.post("/customer-service/tickets", response_model=SupportTicket, status_code=201, tags=["customer-service"])
async def create_support_ticket(
    ticket_data: SupportTicketCreate,
    db: sqlite3.Connection = Depends(get_db)
):
    """Create a new support ticket"""
    cursor = db.cursor()
    
    try:
        cursor.execute("""
            INSERT INTO support_tickets (title, description, priority, user_id, status, is_active)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            ticket_data.title,
            ticket_data.description,
            ticket_data.priority.value,
            1,  # Demo user ID
            'open',
            True
        ))
        
        ticket_id = cursor.lastrowid
        cursor.execute("SELECT * FROM support_tickets WHERE id = ?", (ticket_id,))
        row = cursor.fetchone()
        
        db.commit()
        return ticket_from_row(row)
        
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to create support ticket")

@app.get("/customer-service/tickets", response_model=List[SupportTicket], tags=["customer-service"])
async def list_support_tickets(
    db: sqlite3.Connection = Depends(get_db)
):
    """List all support tickets"""
    cursor = db.cursor()
    cursor.execute("SELECT * FROM support_tickets ORDER BY created_at DESC")
    rows = cursor.fetchall()
    
    return [ticket_from_row(row) for row in rows]

@app.get("/customer-service/my-tickets", response_model=List[SupportTicket], tags=["customer-service"])
async def get_my_tickets(
    db: sqlite3.Connection = Depends(get_db)
):
    """Get current user's support tickets"""
    cursor = db.cursor()
    cursor.execute("SELECT * FROM support_tickets WHERE user_id = ? ORDER BY created_at DESC", (1,))  # Demo user ID
    rows = cursor.fetchall()
    
    return [ticket_from_row(row) for row in rows]

@app.post("/customer-service/users", response_model=User, status_code=201, tags=["customer-service"])
async def create_customer_service_user(user: UserCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    try:
        cursor.execute("SELECT id FROM users WHERE email = ? OR username = ?", (user.email, user.username))
        if cursor.fetchone():
            raise HTTPException(status_code=400, detail="Email or username already registered")
        
        hashed_password = get_password_hash(user.password)
        cursor.execute("""
            INSERT INTO users (email, username, hashed_password, full_name, role, is_active)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (user.email, user.username, hashed_password, user.full_name, user.role.value, True))
        
        user_id = cursor.lastrowid
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        row = cursor.fetchone()
        
        db.commit()
        return user_from_row(row)
    except HTTPException:
        db.rollback()
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to create user")

# Custom OpenAPI with x-gram extensions
def custom_openapi():
    """Generate clean OpenAPI schema without any descriptions or summaries"""
    
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title=app.title,
        version=app.version,
        routes=app.routes,
        tags=app.openapi_tags,
    )

    app.openapi_schema = openapi_schema
    return app.openapi_schema

# Override the default OpenAPI function
app.openapi = custom_openapi

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)