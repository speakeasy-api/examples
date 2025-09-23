from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum


class LicenseStatus(str, Enum):
    ACTIVE = "active"
    EXPIRED = "expired"
    REVOKED = "revoked"
    PENDING = "pending"


class LicenseType(str, Enum):
    TRIAL = "trial"
    BASIC = "basic"
    PREMIUM = "premium"
    ENTERPRISE = "enterprise"


class LicenseBase(BaseModel):
    name: str = Field(..., description="Name of the license", json_schema_extra={"example": "TaskMaster Premium License"})
    description: Optional[str] = Field(None, description="Description of the license", json_schema_extra={"example": "Full access to all TaskMaster features"})
    license_key: str = Field(..., description="Unique license key", json_schema_extra={"example": "TASKMASTER-PREMIUM-12345-ABCDE"})
    license_type: LicenseType = Field(LicenseType.BASIC, description="Type of license", json_schema_extra={"example": "premium"})
    expires_at: Optional[datetime] = Field(None, description="License expiration date", json_schema_extra={"example": "2024-12-01T10:00:00Z"})
    is_active: bool = Field(True, description="Whether the license is active", json_schema_extra={"example": True})


class LicenseCreate(LicenseBase):
    user_id: Optional[int] = Field(None, description="User ID to assign license to", json_schema_extra={"example": 1})


class LicenseUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    license_type: Optional[LicenseType] = None
    status: Optional[LicenseStatus] = None
    expires_at: Optional[datetime] = None
    is_active: Optional[bool] = None


class License(LicenseBase):
    id: int = Field(..., description="License ID", json_schema_extra={"example": 1})
    user_id: Optional[int] = Field(None, description="User ID", json_schema_extra={"example": 1})
    status: LicenseStatus = Field(..., description="License status", json_schema_extra={"example": "active"})
    created_at: datetime = Field(..., description="Creation timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})
    updated_at: datetime = Field(..., description="Last update timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})

    model_config = {"from_attributes": True}


class LicenseList(BaseModel):
    licenses: List[License] = Field(..., description="List of licenses")
    total: int = Field(..., description="Total number of licenses", json_schema_extra={"example": 5})


class LicenseValidation(BaseModel):
    license_key: str = Field(..., description="License key to validate", json_schema_extra={"example": "TASKMASTER-PREMIUM-12345-ABCDE"})


class LicenseValidationResponse(BaseModel):
    is_valid: bool = Field(..., description="Whether license is valid", json_schema_extra={"example": True})
    license_type: Optional[LicenseType] = Field(None, description="License type if valid")
    status: Optional[LicenseStatus] = Field(None, description="License status if valid")
    expires_at: Optional[datetime] = Field(None, description="Expiration date if valid")
    user_id: Optional[int] = Field(None, description="User ID if valid")


class ErrorResponse(BaseModel):
    error: str = Field(..., description="Error message", json_schema_extra={"example": "License key already exists"})
