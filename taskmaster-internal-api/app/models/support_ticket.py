from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum


class TicketStatus(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"
    CLOSED = "closed"


class TicketPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    URGENT = "urgent"


class SupportTicketBase(BaseModel):
    title: str = Field(..., description="Ticket title", json_schema_extra={"example": "Login issues with TaskMaster"})
    description: str = Field(..., description="Ticket description", json_schema_extra={"example": "Unable to login to TaskMaster application"})
    priority: TicketPriority = Field(TicketPriority.MEDIUM, description="Ticket priority", json_schema_extra={"example": "medium"})


class SupportTicketCreate(SupportTicketBase):
    pass


class SupportTicketUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[TicketStatus] = None
    priority: Optional[TicketPriority] = None
    assigned_to: Optional[int] = None
    is_active: Optional[bool] = None


class SupportTicket(SupportTicketBase):
    id: int = Field(..., description="Ticket ID", json_schema_extra={"example": 1})
    status: TicketStatus = Field(..., description="Ticket status", json_schema_extra={"example": "open"})
    user_id: int = Field(..., description="User ID who created the ticket", json_schema_extra={"example": 1})
    assigned_to: Optional[int] = Field(None, description="User ID assigned to handle the ticket", json_schema_extra={"example": 2})
    created_at: datetime = Field(..., description="Creation timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})
    updated_at: datetime = Field(..., description="Last update timestamp", json_schema_extra={"example": "2023-12-01T10:00:00Z"})
    resolved_at: Optional[datetime] = Field(None, description="Resolution timestamp", json_schema_extra={"example": "2023-12-02T15:30:00Z"})
    is_active: bool = Field(..., description="Whether ticket is active", json_schema_extra={"example": True})

    model_config = {"from_attributes": True}
