import pytest
import json
import os
import tempfile
import sqlite3
from fastapi.testclient import TestClient
from app import app, get_db

@pytest.fixture
def client():
    """Create a test client with a temporary database"""
    # Create a temporary database file
    db_fd, temp_db_path = tempfile.mkstemp(suffix='.db')
    
    # Override the database URL for testing
    def get_test_db():
        conn = sqlite3.connect(temp_db_path, check_same_thread=False)
        conn.row_factory = sqlite3.Row
        return conn
    
    # Initialize test database
    conn = get_test_db()
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
    
    # Override the database connection function
    app.dependency_overrides[get_db] = lambda: get_test_db()
    
    with TestClient(app) as client:
        yield client
    
    # Clean up
    app.dependency_overrides.clear()
    os.close(db_fd)
    os.unlink(temp_db_path)

def test_health_check(client):
    """Test the health check endpoint"""
    response = client.get('/health')
    assert response.status_code == 200
    data = response.json()
    assert data['status'] == 'healthy'
    assert 'timestamp' in data

def test_list_licenses_empty(client):
    """Test listing licenses when none exist"""
    response = client.get('/licenses')
    assert response.status_code == 200
    data = response.json()
    assert data == []

def test_create_license_success(client):
    """Test creating a TaskMaster license successfully"""
    license_data = {
        'name': 'TaskMaster Test License',
        'description': 'A test TaskMaster license',
        'license_key': 'TASKMASTER-TEST-12345-ABCDE',
        'is_active': True
    }
    
    response = client.post('/licenses', json=license_data)
    
    assert response.status_code == 201
    data = response.json()
    assert data['name'] == 'TaskMaster Test License'
    assert data['description'] == 'A test TaskMaster license'
    assert data['license_key'] == 'TASKMASTER-TEST-12345-ABCDE'
    assert data['is_active'] == True
    assert 'id' in data
    assert 'created_at' in data

def test_create_license_missing_fields(client):
    """Test creating a TaskMaster license with missing required fields"""
    license_data = {
        'name': 'TaskMaster Test License'
        # Missing license_key
    }
    
    response = client.post('/licenses', json=license_data)
    
    assert response.status_code == 422  # FastAPI returns 422 for validation errors
    data = response.json()
    assert 'detail' in data

def test_create_license_duplicate_key(client):
    """Test creating a TaskMaster license with duplicate license key"""
    license_data = {
        'name': 'TaskMaster Test License',
        'license_key': 'TASKMASTER-TEST-12345-ABCDE'
    }
    
    # Create first license
    response1 = client.post('/licenses', json=license_data)
    assert response1.status_code == 201
    
    # Try to create second license with same key
    response2 = client.post('/licenses', json=license_data)
    assert response2.status_code == 409
    data = response2.json()
    assert 'already exists' in data['detail']

def test_list_licenses_with_data(client):
    """Test listing TaskMaster licenses when data exists"""
    # Create a test license
    license_data = {
        'name': 'TaskMaster Test License 1',
        'description': 'First test TaskMaster license',
        'license_key': 'TASKMASTER-TEST-11111-AAAAA'
    }
    
    client.post('/licenses', json=license_data)
    
    # Create another test license
    license_data2 = {
        'name': 'TaskMaster Test License 2',
        'description': 'Second test TaskMaster license',
        'license_key': 'TASKMASTER-TEST-22222-BBBBB'
    }
    
    client.post('/licenses', json=license_data2)
    
    # List all licenses
    response = client.get('/licenses')
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 2
    
    # Check that both licenses are in the response
    license_names = [license['name'] for license in data]
    assert 'TaskMaster Test License 1' in license_names
    assert 'TaskMaster Test License 2' in license_names

def test_create_license_minimal_data(client):
    """Test creating a TaskMaster license with only required fields"""
    license_data = {
        'name': 'TaskMaster Minimal License',
        'license_key': 'TASKMASTER-MINIMAL-12345'
    }
    
    response = client.post('/licenses', json=license_data)
    
    assert response.status_code == 201
    data = response.json()
    assert data['name'] == 'TaskMaster Minimal License'
    assert data['license_key'] == 'TASKMASTER-MINIMAL-12345'
    assert data['description'] == ''  # Should default to empty string
    assert data['is_active'] == True  # Should default to True

if __name__ == '__main__':
    pytest.main([__file__])
