from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum


class CampaignStatus(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    PAUSED = "paused"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


class CampaignBase(BaseModel):
    name: str = Field(..., description="Campaign name", json_schema_extra={"example": "Q1 2024 Product Launch"})
    description: Optional[str] = Field(None, description="Campaign description", json_schema_extra={"example": "Marketing campaign for new product launch"})
    target_audience: Optional[str] = Field(None, description="Target audience", json_schema_extra={"example": "Enterprise customers"})
    start_date: Optional[datetime] = Field(None, description="Campaign start date", json_schema_extra={"example": "2024-01-01T00:00:00Z"})
    end_date: Optional[datetime] = Field(None, description="Campaign end date", json_schema_extra={"example": "2024-03-31T23:59:59Z"})


class CampaignCreate(CampaignBase):
    pass


class CampaignUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    status: Optional[CampaignStatus] = None
    target_audience: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    is_active: Optional[bool] = None


class Campaign(CampaignBase):
    id: int = Field(..., description="Campaign ID", json_schema_extra={"example": 1})
    status: CampaignStatus = Field(..., description="Campaign status", json_schema_extra={"example": "active"})
    created_by: int = Field(..., description="User ID who created the campaign", json_schema_extra={"example": 1})
    created_at: datetime = Field(..., description="Creation timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})
    updated_at: datetime = Field(..., description="Last update timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})
    is_active: bool = Field(..., description="Whether campaign is active", json_schema_extra={"example": True})

    model_config = {"from_attributes": True}
