import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health_check():
    """Test health check endpoint"""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "timestamp" in data


def test_list_licenses():
    """Test listing licenses"""
    response = client.get("/licenses")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)


def test_create_license():
    """Test creating a license"""
    license_data = {
        "name": "Test License",
        "description": "Test license description",
        "license_key": "TEST-LICENSE-12345",
        "license_type": "basic",
        "is_active": True
    }
    response = client.post("/licenses", json=license_data)
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == license_data["name"]
    assert data["license_key"] == license_data["license_key"]


def test_validate_license():
    """Test license validation"""
    # First create a license
    license_data = {
        "name": "Test License for Validation",
        "description": "Test license for validation",
        "license_key": "VALIDATE-TEST-12345",
        "license_type": "basic",
        "is_active": True
    }
    create_response = client.post("/licenses", json=license_data)
    assert create_response.status_code == 201
    
    # Then validate it
    validation_data = {"license_key": "VALIDATE-TEST-12345"}
    response = client.post("/licenses/validate", json=validation_data)
    assert response.status_code == 200
    data = response.json()
    assert data["is_valid"] is True


def test_register_user():
    """Test user registration"""
    user_data = {
        "email": "test@example.com",
        "username": "testuser",
        "password": "testpassword123",
        "full_name": "Test User",
        "role": "user"
    }
    response = client.post("/users/register", json=user_data)
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == user_data["email"]
    assert data["username"] == user_data["username"]
    assert data["role"] == user_data["role"]


def test_login_user():
    """Test user login"""
    # First register a user
    user_data = {
        "email": "logintest@example.com",
        "username": "logintest",
        "password": "logintest123",
        "full_name": "Login Test User",
        "role": "user"
    }
    register_response = client.post("/users/register", json=user_data)
    assert register_response.status_code == 201
    
    # Then login
    login_data = {
        "username": "logintest",
        "password": "logintest123"
    }
    response = client.post("/users/login", json=login_data)
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"
