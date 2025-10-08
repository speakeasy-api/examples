from fastapi import FastAPI, HTTPException, Depends
from fastapi.openapi.utils import get_openapi
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
import os
from pathlib import Path

from google.auth.transport.requests import Request
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

app = FastAPI(
    title="Google Sheets MCP API",
    description="A FastAPI server for accessing Google Sheets data via MCP integration",
    version="1.0.0",
    openapi_tags=[
        {
            "name": "spreadsheets",
            "description": "Operations for accessing Google Sheets data",
        },
        {
            "name": "system",
            "description": "System health and status operations",
        },
    ],
)

# Google Sheets API configuration
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 
          'https://www.googleapis.com/auth/drive.readonly']
SERVICE_ACCOUNT_FILE = 'PATH_TO_SERVICE_ACCOUNT_FILE'

def get_google_service():
    """Get authenticated Google Sheets service"""
    try:
        credentials = service_account.Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE, scopes=SCOPES)
        
        # Build both Sheets and Drive services
        sheets_service = build('sheets', 'v4', credentials=credentials)
        drive_service = build('drive', 'v3', credentials=credentials)
        
        return sheets_service, drive_service
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to authenticate with Google API: {str(e)}")

# Pydantic models
class SpreadsheetInfo(BaseModel):
    """Model representing basic spreadsheet information"""
    id: str = Field(..., description="Google Sheets spreadsheet ID", json_schema_extra={"example": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"})
    name: str = Field(..., description="Name of the spreadsheet", json_schema_extra={"example": "Marketing Keywords Q4 2024"})
    created_time: Optional[str] = Field(None, description="When the spreadsheet was created", json_schema_extra={"example": "2024-01-15T10:30:00Z"})
    modified_time: Optional[str] = Field(None, description="When the spreadsheet was last modified", json_schema_extra={"example": "2024-03-20T14:45:00Z"})
    web_view_link: Optional[str] = Field(None, description="Link to view the spreadsheet in browser")

class SheetInfo(BaseModel):
    """Model representing a sheet within a spreadsheet"""
    sheet_id: int = Field(..., description="Internal sheet ID", json_schema_extra={"example": 0})
    title: str = Field(..., description="Sheet name/title", json_schema_extra={"example": "Keywords"})
    index: int = Field(..., description="Sheet position index", json_schema_extra={"example": 0})
    sheet_type: str = Field(..., description="Type of sheet", json_schema_extra={"example": "GRID"})
    grid_properties: Optional[Dict[str, Any]] = Field(None, description="Grid properties like row/column count")

class SpreadsheetDetail(BaseModel):
    """Model representing detailed spreadsheet information"""
    id: str = Field(..., description="Google Sheets spreadsheet ID")
    name: str = Field(..., description="Name of the spreadsheet")
    sheets: List[SheetInfo] = Field(..., description="List of sheets in the spreadsheet")
    created_time: Optional[str] = Field(None, description="When the spreadsheet was created")
    modified_time: Optional[str] = Field(None, description="When the spreadsheet was last modified")
    web_view_link: Optional[str] = Field(None, description="Link to view the spreadsheet in browser")

class SheetData(BaseModel):
    """Model representing data from a specific sheet"""
    spreadsheet_id: str = Field(..., description="Google Sheets spreadsheet ID")
    sheet_name: str = Field(..., description="Name of the sheet")
    range: str = Field(..., description="Range of data retrieved", json_schema_extra={"example": "A1:Z100"})
    values: List[List[str]] = Field(..., description="2D array of cell values")
    headers: Optional[List[str]] = Field(None, description="First row as headers if available")
    row_count: int = Field(..., description="Number of rows with data")
    column_count: int = Field(..., description="Number of columns with data")

class ErrorResponse(BaseModel):
    """Error response model"""
    error: str = Field(..., description="Error message", json_schema_extra={"example": "Spreadsheet not found or access denied"})

class HealthResponse(BaseModel):
    """Health check response model"""
    status: str = Field(..., description="Health status", json_schema_extra={"example": "healthy"})
    timestamp: datetime = Field(..., description="Current timestamp", json_schema_extra={"example": "2024-03-20T10:00:00Z"})
    google_api_accessible: bool = Field(..., description="Whether Google API is accessible", json_schema_extra={"example": True})

# API Endpoints
@app.get(
    "/spreadsheets",
    response_model=List[SpreadsheetInfo],
    tags=["spreadsheets"],
    summary="List Google Sheets spreadsheets",
    operation_id="list_spreadsheets",
    description="""
    Retrieve a list of Google Sheets spreadsheets accessible by the service account.
    Returns basic information about each spreadsheet including ID, name, and modification times.
    """,
    responses={
        200: {"description": "Successful response with list of spreadsheets"},
        500: {"description": "Internal server error or Google API authentication failure"},
    },
)
async def list_spreadsheets():
    """List all accessible spreadsheets"""
    try:
        sheets_service, drive_service = get_google_service()
        
        # Query for spreadsheet files
        results = drive_service.files().list(
            q="mimeType='application/vnd.google-apps.spreadsheet'",
            fields="files(id, name, createdTime, modifiedTime, webViewLink)",
            orderBy="modifiedTime desc"
        ).execute()
        
        files = results.get('files', [])
        
        spreadsheets = []
        for file in files:
            spreadsheets.append(SpreadsheetInfo(
                id=file['id'],
                name=file['name'],
                created_time=file.get('createdTime'),
                modified_time=file.get('modifiedTime'),
                web_view_link=file.get('webViewLink')
            ))
        
        return spreadsheets
        
    except HttpError as e:
        raise HTTPException(status_code=500, detail=f"Google API error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to list spreadsheets: {str(e)}")

@app.get(
    "/spreadsheets/{spreadsheet_id}",
    response_model=SpreadsheetDetail,
    tags=["spreadsheets"],
    summary="Get spreadsheet details",
    operation_id="get_spreadsheet_detail",
    description="""
    Get detailed information about a specific spreadsheet including all its sheets.
    Useful for understanding the structure before reading specific sheet data.
    """,
    responses={
        200: {"description": "Successful response with spreadsheet details"},
        404: {"description": "Spreadsheet not found or access denied"},
        500: {"description": "Internal server error"},
    },
)
async def get_spreadsheet_detail(spreadsheet_id: str):
    """Get detailed information about a specific spreadsheet"""
    try:
        sheets_service, drive_service = get_google_service()
        
        # Get spreadsheet metadata
        spreadsheet = sheets_service.spreadsheets().get(
            spreadsheetId=spreadsheet_id
        ).execute()
        
        # Get file metadata from Drive API
        try:
            file_metadata = drive_service.files().get(
                fileId=spreadsheet_id,
                fields="createdTime, modifiedTime, webViewLink"
            ).execute()
        except:
            file_metadata = {}
        
        # Extract sheet information
        sheets = []
        for sheet in spreadsheet.get('sheets', []):
            properties = sheet.get('properties', {})
            sheets.append(SheetInfo(
                sheet_id=properties.get('sheetId', 0),
                title=properties.get('title', 'Untitled'),
                index=properties.get('index', 0),
                sheet_type=properties.get('sheetType', 'GRID'),
                grid_properties=properties.get('gridProperties')
            ))
        
        return SpreadsheetDetail(
            id=spreadsheet_id,
            name=spreadsheet.get('properties', {}).get('title', 'Untitled'),
            sheets=sheets,
            created_time=file_metadata.get('createdTime'),
            modified_time=file_metadata.get('modifiedTime'),
            web_view_link=file_metadata.get('webViewLink')
        )
        
    except HttpError as e:
        if e.resp.status == 404:
            raise HTTPException(status_code=404, detail="Spreadsheet not found or access denied")
        raise HTTPException(status_code=500, detail=f"Google API error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get spreadsheet details: {str(e)}")

@app.get(
    "/spreadsheets/{spreadsheet_id}/sheets/{sheet_name}",
    response_model=SheetData,
    tags=["spreadsheets"],
    summary="Read sheet data",
    operation_id="read_sheet_data",
    description="""
    Read data from a specific sheet within a spreadsheet.
    Returns all data from the sheet with optional header row identification.
    The range parameter allows you to specify a custom range (e.g., 'A1:D10').
    """,
    responses={
        200: {"description": "Successful response with sheet data"},
        404: {"description": "Spreadsheet or sheet not found"},
        500: {"description": "Internal server error"},
    },
)
async def read_sheet_data(
    spreadsheet_id: str, 
    sheet_name: str,
    range_spec: Optional[str] = None,
    include_headers: bool = True
):
    """Read data from a specific sheet"""
    try:
        sheets_service, _ = get_google_service()
        
        # Construct the range
        if range_spec:
            full_range = f"{sheet_name}!{range_spec}"
        else:
            full_range = sheet_name
        
        # Get the data
        result = sheets_service.spreadsheets().values().get(
            spreadsheetId=spreadsheet_id,
            range=full_range,
            valueRenderOption='UNFORMATTED_VALUE',
            dateTimeRenderOption='FORMATTED_STRING'
        ).execute()
        
        values = result.get('values', [])
        
        if not values:
            return SheetData(
                spreadsheet_id=spreadsheet_id,
                sheet_name=sheet_name,
                range=full_range,
                values=[],
                headers=None,
                row_count=0,
                column_count=0
            )
        
        # Process headers if requested
        headers = None
        data_values = values
        
        if include_headers and values:
            headers = [str(cell) for cell in values[0]]
            data_values = values[1:] if len(values) > 1 else []
        
        # Ensure all rows have the same number of columns
        max_cols = max(len(row) for row in values) if values else 0
        normalized_values = []
        for row in values:
            normalized_row = [str(cell) if cell is not None else "" for cell in row]
            # Pad row to max_cols length
            while len(normalized_row) < max_cols:
                normalized_row.append("")
            normalized_values.append(normalized_row)
        
        return SheetData(
            spreadsheet_id=spreadsheet_id,
            sheet_name=sheet_name,
            range=result.get('range', full_range),
            values=normalized_values,
            headers=headers,
            row_count=len(values),
            column_count=max_cols
        )
        
    except HttpError as e:
        if e.resp.status == 404:
            raise HTTPException(status_code=404, detail="Spreadsheet or sheet not found")
        raise HTTPException(status_code=500, detail=f"Google API error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to read sheet data: {str(e)}")

@app.get(
    "/health",
    response_model=HealthResponse,
    tags=["system"],
    summary="Health check",
    operation_id="health_check",
    description="""
    Check if the API is running and can access Google APIs.
    Returns current status, timestamp, and Google API accessibility.
    """,
    responses={
        200: {"description": "API is healthy"},
    },
)
async def health_check():
    """Health check endpoint"""
    google_api_accessible = True
    
    try:
        # Test Google API access
        get_google_service()
    except Exception:
        google_api_accessible = False
    
    return HealthResponse(
        status="healthy" if google_api_accessible else "degraded",
        timestamp=datetime.now(),
        google_api_accessible=google_api_accessible
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
        "list_spreadsheets": {
            "x-gram": {
                "name": "list_google_spreadsheets",
                "summary": "List all accessible Google Sheets spreadsheets",
                "description": """This tool retrieves all Google Sheets spreadsheets accessible by the service account, including their names, IDs, and modification times. Perfect for discovering available spreadsheets before reading their data.""",
                "responseFilterType": "jq",
            }
        },
        "get_spreadsheet_detail": {
            "x-gram": {
                "name": "get_spreadsheet_details",
                "summary": "Get detailed information about a specific Google Sheets spreadsheet",
                "description": """This tool provides comprehensive information about a specific spreadsheet including all its sheets, creation/modification times, and structure. Use this to understand the spreadsheet layout before reading specific sheet data.""",
                "responseFilterType": "jq",
            }
        },
        "read_sheet_data": {
            "x-gram": {
                "name": "read_google_sheet_data",
                "summary": "Read data from a specific sheet in a Google Sheets spreadsheet",
                "description": """This tool reads all data from a specific sheet within a Google Sheets spreadsheet. It can automatically identify headers and normalize the data format. Perfect for accessing marketing keywords, campaign data, or any structured information stored in Google Sheets.""",
                "responseFilterType": "jq",
            }
        },
        "health_check": {
            "x-gram": {
                "name": "check_sheets_api_health",
                "summary": "Check Google Sheets API health status",
                "description": """This endpoint provides a health check to verify that the Google Sheets API is accessible and the service is running properly. Returns current status and Google API connectivity information.""",
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
    uvicorn.run(app, host="0.0.0.0", port=8000)
