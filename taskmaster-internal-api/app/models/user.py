from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from enum import Enum


class UserRole(str, Enum):
    ADMIN = "admin"
    MARKETING = "marketing"
    CUSTOMER_SERVICE = "customer_service"
    USER = "user"


class UserBase(BaseModel):
    email: EmailStr = Field(..., description="User email address", json_schema_extra={"example": "user@example.com"})
    username: str = Field(..., description="Username", json_schema_extra={"example": "johndoe"})
    full_name: Optional[str] = Field(None, description="Full name", json_schema_extra={"example": "John Doe"})
    role: UserRole = Field(UserRole.USER, description="User role", json_schema_extra={"example": "user"})


class UserCreate(UserBase):
    password: str = Field(..., description="Password", json_schema_extra={"example": "securepassword123"})


class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    username: Optional[str] = None
    full_name: Optional[str] = None
    role: Optional[UserRole] = None
    is_active: Optional[bool] = None


class User(UserBase):
    id: int = Field(..., description="User ID", json_schema_extra={"example": 1})
    is_active: bool = Field(..., description="Whether user is active", json_schema_extra={"example": True})
    created_at: datetime = Field(..., description="Creation timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})
    updated_at: datetime = Field(..., description="Last update timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})

    model_config = {"from_attributes": True}


class UserLogin(BaseModel):
    username: str = Field(..., description="Username", json_schema_extra={"example": "johndoe"})
    password: str = Field(..., description="Password", json_schema_extra={"example": "securepassword123"})


class Token(BaseModel):
    access_token: str = Field(..., description="JWT access token", json_schema_extra={"example": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."})
    token_type: str = Field(..., description="Token type", json_schema_extra={"example": "bearer"})


class TokenData(BaseModel):
    username: Optional[str] = None