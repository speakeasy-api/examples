from fastapi import FastAPI, Depends, HTTPException, Path, Body
from sqlalchemy import create_engine, Column, String, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship, Session
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from contextlib import asynccontextmanager

# --- Database setup ---

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# --- Database models ---

class DriverDB(Base):
    __tablename__ = "drivers"
    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    laps = relationship("LapDB", back_populates="driver", cascade="all, delete-orphan")

class LapDB(Base):
    __tablename__ = "laps"
    id = Column(String, primary_key=True, index=True)
    lap_time = Column(Float, nullable=False)
    track = Column(String, nullable=False)
    driver_id = Column(String, ForeignKey("drivers.id"), nullable=False)
    driver = relationship("DriverDB", back_populates="laps")

Base.metadata.create_all(bind=engine)

# --- Pydantic schemas ---

# Driver schemas
class DriverBase(BaseModel):
    name: str = Field(
        description="The full name of the driver",
        example="Max Verstappen"
    )

class DriverCreate(DriverBase):
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Charles Leclerc"
            }
        }

class DriverUpdate(DriverBase):
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Fernando Alonso"
            }
        }

class Lap(BaseModel):
    id: Optional[str] = Field(
        default=None, 
        description="Unique identifier for the lap"
    )
    lap_time: float = Field(
        description="Lap time in seconds", 
        example=82.45,
        gt=0
    )
    track: str = Field(
        description="Name of the track where the lap was recorded", 
        example="Spa-Francorchamps"
    )

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "lap_time": 83.12,
                "track": "Monaco"
            }
        }

class Driver(DriverBase):
    id: Optional[str] = Field(
        default=None, 
        description="Unique identifier for the driver"
    )
    laps: List[Lap] = Field(
        default=[], 
        description="List of laps completed by the driver"
    )

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "name": "Lewis Hamilton",
                "laps": [
                    {
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa7",
                        "lap_time": 85.4,
                        "track": "Silverstone"
                    },
                    {
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa8",
                        "lap_time": 86.2,
                        "track": "Monza"
                    }
                ]
            }
        }

# Lap schemas
class LapCreate(BaseModel):
    lap_time: float = Field(
        description="Lap time in seconds", 
        example=82.45,
        gt=0
    )
    track: str = Field(
        description="Name of the track where the lap was recorded", 
        example="Spa-Francorchamps"
    )

    class Config:
        json_schema_extra = {
            "example": {
                "lap_time": 79.32,
                "track": "Silverstone"
            }
        }

class LapUpdate(BaseModel):
    lap_time: float = Field(
        description="Lap time in seconds", 
        example=81.23,
        gt=0
    )
    track: str = Field(
        description="Name of the track where the lap was recorded", 
        example="Imola"
    )

    class Config:
        json_schema_extra = {
            "example": {
                "lap_time": 80.56,
                "track": "Budapest"
            }
        }

# --- Dependency for DB session ---

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- FastAPI application setup with lifespan handler ---

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Add dummy data if none exists
    db = SessionLocal()
    try:
        if db.query(DriverDB).count() == 0:
            driver = DriverDB(id=str(uuid.uuid4()), name="Lewis Hamilton")
            lap1 = LapDB(id=str(uuid.uuid4()), lap_time=85.4, track="Silverstone", driver=driver)
            lap2 = LapDB(id=str(uuid.uuid4()), lap_time=86.2, track="Monza", driver=driver)
            driver.laps = [lap1, lap2]
            db.add(driver)
            db.commit()
    finally:
        db.close()
    yield
    # Shutdown (if needed)

app = FastAPI(
    title="Racing Drivers API",
    description="An API for managing racing drivers and their lap times",
    version="1.0.0",
    lifespan=lifespan,
    server=[
        {
            "url": "http://localhost:8000",
            "description": "Local server"
        },
    ],
)

# ---------- Driver Endpoints ----------

@app.get(
    "/",
    tags=["Root"],
    summary="Root endpoint",
    description="Welcome to the Racing Drivers API",
    response_description="Welcome message",
    responses={
        200: {"description": "Welcome message"}
    }
)
def read_root():
    return {"message": "Welcome to the Racing Drivers API!"}


@app.post(
    "/drivers", 
    response_model=Driver,
    status_code=201,
    tags=["Drivers"],
    summary="Create a new driver",
    description="Create a new racing driver in the database",
    response_description="The created driver record",
    responses={
        201: {"description": "Driver created successfully"},
        422: {"description": "Validation error in request body"}
    }
)
def create_driver(driver: DriverCreate, db: Session = Depends(get_db)):
    db_driver = DriverDB(id=str(uuid.uuid4()), name=driver.name)
    db.add(db_driver)
    db.commit()
    db.refresh(db_driver)
    return db_driver

@app.get(
    "/drivers", 
    response_model=List[Driver],
    tags=["Drivers"],
    summary="Get all drivers",
    description="Retrieve a list of all racing drivers in the database",
    response_description="List of driver records",
    responses={
        200: {"description": "List of drivers retrieved successfully"}
    }
)
def get_drivers(db: Session = Depends(get_db)):
    return db.query(DriverDB).all()

@app.get(
    "/drivers/{driver_id}", 
    response_model=Driver,
    tags=["Drivers"],
    summary="Get a specific driver",
    description="Retrieve details for a specific racing driver by ID",
    response_description="The requested driver record",
    responses={
        200: {"description": "Driver details retrieved successfully"},
        404: {"description": "Driver not found"}
    }
)
def get_driver(
    driver_id: str = Path(..., description="The ID of the driver to retrieve", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}), 
    db: Session = Depends(get_db)
):
    driver = db.query(DriverDB).filter(DriverDB.id == driver_id).first()
    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")
    return driver

@app.put(
    "/drivers/{driver_id}", 
    response_model=Driver,
    tags=["Drivers"],
    summary="Update a driver",
    description="Update a racing driver's details by ID",
    response_description="The updated driver record",
    responses={
        200: {"description": "Driver updated successfully"},
        404: {"description": "Driver not found"},
        422: {"description": "Validation error in request body"}
    }
)
def update_driver(
    driver_id: str = Path(..., description="The ID of the driver to update", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}),
    driver_update: DriverUpdate = Body(..., description="Updated driver information"),
    db: Session = Depends(get_db)
):
    driver = db.query(DriverDB).filter(DriverDB.id == driver_id).first()
    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")
    driver.name = driver_update.name
    db.commit()
    db.refresh(driver)
    return driver

@app.delete(
    "/drivers/{driver_id}",
    tags=["Drivers"],
    summary="Delete a driver",
    description="Delete a racing driver by ID, including all associated lap records",
    response_description="Confirmation of driver deletion",
    status_code=200,
    responses={
        200: {"description": "Driver deleted successfully"},
        404: {"description": "Driver not found"}
    }
)
def delete_driver(
    driver_id: str = Path(..., description="The ID of the driver to delete", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}),
    db: Session = Depends(get_db)
):
    driver = db.query(DriverDB).filter(DriverDB.id == driver_id).first()
    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")
    db.delete(driver)
    db.commit()
    return {"detail": "Driver deleted"}

# ---------- Lap Endpoints ----------

@app.post(
    "/drivers/{driver_id}/laps", 
    response_model=Lap,
    status_code=201,
    tags=["Laps"],
    summary="Create a new lap record",
    description="Create a new lap record for a specific driver",
    response_description="The created lap record",
    responses={
        201: {"description": "Lap record created successfully"},
        404: {"description": "Driver not found"},
        422: {"description": "Validation error in request body"}
    }
)
def create_lap(
    driver_id: str = Path(..., description="The ID of the driver", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}),
    lap: LapCreate = Body(..., description="Lap data to create"),
    db: Session = Depends(get_db)
):
    driver = db.query(DriverDB).filter(DriverDB.id == driver_id).first()
    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")
    db_lap = LapDB(id=str(uuid.uuid4()), lap_time=lap.lap_time, track=lap.track, driver_id=driver_id)
    db.add(db_lap)
    db.commit()
    db.refresh(db_lap)
    return db_lap

@app.get(
    "/drivers/{driver_id}/laps", 
    response_model=List[Lap],
    tags=["Laps"],
    summary="Get all laps for a driver",
    description="Retrieve all lap records for a specific driver",
    response_description="List of lap records",
    responses={
        200: {"description": "Lap records retrieved successfully"},
        404: {"description": "Driver not found"}
    }
)
def get_laps(
    driver_id: str = Path(..., description="The ID of the driver", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}),
    db: Session = Depends(get_db)
):
    driver = db.query(DriverDB).filter(DriverDB.id == driver_id).first()
    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")
    return driver.laps

@app.get(
    "/drivers/{driver_id}/laps/{lap_id}", 
    response_model=Lap,
    tags=["Laps"],
    summary="Get a specific lap record",
    description="Retrieve a specific lap record for a driver",
    response_description="The requested lap record",
    responses={
        200: {"description": "Lap record retrieved successfully"},
        404: {"description": "Lap not found or does not belong to specified driver"}
    }
)
def get_lap(
    driver_id: str = Path(..., description="The ID of the driver", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}),
    lap_id: str = Path(..., description="The ID of the lap record", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa7"}}),
    db: Session = Depends(get_db)
):
    lap = db.query(LapDB).filter(LapDB.id == lap_id, LapDB.driver_id == driver_id).first()
    if not lap:
        raise HTTPException(status_code=404, detail="Lap not found")
    return lap

@app.put(
    "/drivers/{driver_id}/laps/{lap_id}", 
    response_model=Lap,
    tags=["Laps"],
    summary="Update a lap record",
    description="Update a specific lap record for a driver",
    response_description="The updated lap record",
    responses={
        200: {"description": "Lap record updated successfully"},
        404: {"description": "Lap not found or does not belong to specified driver"},
        422: {"description": "Validation error in request body"}
    }
)
def update_lap(
    driver_id: str = Path(..., description="The ID of the driver", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}),
    lap_id: str = Path(..., description="The ID of the lap record", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa7"}}),
    lap_update: LapUpdate = Body(..., description="Updated lap information"),
    db: Session = Depends(get_db)
):
    lap = db.query(LapDB).filter(LapDB.id == lap_id, LapDB.driver_id == driver_id).first()
    if not lap:
        raise HTTPException(status_code=404, detail="Lap not found")
    lap.lap_time = lap_update.lap_time
    lap.track = lap_update.track
    db.commit()
    db.refresh(lap)
    return lap

@app.delete(
    "/drivers/{driver_id}/laps/{lap_id}",
    tags=["Laps"],
    summary="Delete a lap record",
    description="Delete a specific lap record for a driver",
    response_description="Confirmation of lap record deletion",
    status_code=200,
    responses={
        200: {"description": "Lap record deleted successfully"},
        404: {"description": "Lap not found or does not belong to specified driver"}
    }
)
def delete_lap(
    driver_id: str = Path(..., description="The ID of the driver", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}}),
    lap_id: str = Path(..., description="The ID of the lap record", examples={"example1": {"value": "3fa85f64-5717-4562-b3fc-2c963f66afa7"}}),
    db: Session = Depends(get_db)
):
    lap = db.query(LapDB).filter(LapDB.id == lap_id, LapDB.driver_id == driver_id).first()
    if not lap:
        raise HTTPException(status_code=404, detail="Lap not found")
    db.delete(lap)
    db.commit()
    return {"detail": "Lap deleted"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)