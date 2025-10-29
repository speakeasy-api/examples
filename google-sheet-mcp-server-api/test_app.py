"""Basic tests for the Google Sheets MCP API"""

import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock
from app import app

client = TestClient(app)

def test_health_check():
    """Test the health check endpoint"""
    with patch('app.get_google_service') as mock_service:
        # Mock successful Google service creation
        mock_service.return_value = (MagicMock(), MagicMock())
        
        response = client.get("/health")
        assert response.status_code == 200
        
        data = response.json()
        assert data["status"] == "healthy"
        assert data["google_api_accessible"] == True
        assert "timestamp" in data

def test_health_check_degraded():
    """Test health check when Google API is not accessible"""
    with patch('app.get_google_service') as mock_service:
        # Mock Google service failure
        mock_service.side_effect = Exception("API not accessible")
        
        response = client.get("/health")
        assert response.status_code == 200
        
        data = response.json()
        assert data["status"] == "degraded"
        assert data["google_api_accessible"] == False

def test_list_spreadsheets_success():
    """Test successful spreadsheet listing"""
    with patch('app.get_google_service') as mock_service:
        # Mock Google services
        mock_sheets = MagicMock()
        mock_drive = MagicMock()
        mock_service.return_value = (mock_sheets, mock_drive)
        
        # Mock Drive API response
        mock_drive.files().list().execute.return_value = {
            'files': [
                {
                    'id': 'test_id_1',
                    'name': 'Test Spreadsheet 1',
                    'createdTime': '2024-01-01T10:00:00Z',
                    'modifiedTime': '2024-01-02T10:00:00Z',
                    'webViewLink': 'https://docs.google.com/spreadsheets/d/test_id_1'
                }
            ]
        }
        
        response = client.get("/spreadsheets")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data) == 1
        assert data[0]["id"] == "test_id_1"
        assert data[0]["name"] == "Test Spreadsheet 1"

def test_get_spreadsheet_detail_success():
    """Test successful spreadsheet detail retrieval"""
    with patch('app.get_google_service') as mock_service:
        # Mock Google services
        mock_sheets = MagicMock()
        mock_drive = MagicMock()
        mock_service.return_value = (mock_sheets, mock_drive)
        
        # Mock Sheets API response
        mock_sheets.spreadsheets().get().execute.return_value = {
            'properties': {'title': 'Test Spreadsheet'},
            'sheets': [
                {
                    'properties': {
                        'sheetId': 0,
                        'title': 'Sheet1',
                        'index': 0,
                        'sheetType': 'GRID',
                        'gridProperties': {'rowCount': 100, 'columnCount': 26}
                    }
                }
            ]
        }
        
        # Mock Drive API response
        mock_drive.files().get().execute.return_value = {
            'createdTime': '2024-01-01T10:00:00Z',
            'modifiedTime': '2024-01-02T10:00:00Z',
            'webViewLink': 'https://docs.google.com/spreadsheets/d/test_id'
        }
        
        response = client.get("/spreadsheets/test_id")
        assert response.status_code == 200
        
        data = response.json()
        assert data["id"] == "test_id"
        assert data["name"] == "Test Spreadsheet"
        assert len(data["sheets"]) == 1
        assert data["sheets"][0]["title"] == "Sheet1"

def test_read_sheet_data_success():
    """Test successful sheet data reading"""
    with patch('app.get_google_service') as mock_service:
        # Mock Google services
        mock_sheets = MagicMock()
        mock_drive = MagicMock()
        mock_service.return_value = (mock_sheets, mock_drive)
        
        # Mock Sheets API response
        mock_sheets.spreadsheets().values().get().execute.return_value = {
            'range': 'Sheet1!A1:C3',
            'values': [
                ['Header1', 'Header2', 'Header3'],
                ['Value1', 'Value2', 'Value3'],
                ['Value4', 'Value5', 'Value6']
            ]
        }
        
        response = client.get("/spreadsheets/test_id/sheets/Sheet1")
        assert response.status_code == 200
        
        data = response.json()
        assert data["spreadsheet_id"] == "test_id"
        assert data["sheet_name"] == "Sheet1"
        assert data["row_count"] == 3
        assert data["column_count"] == 3
        assert data["headers"] == ['Header1', 'Header2', 'Header3']
        assert len(data["values"]) == 3

if __name__ == "__main__":
    pytest.main([__file__])
