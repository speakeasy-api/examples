from typing import List
from fastapi import FastAPI, HTTPException, Path, Query
from fastapi.responses import Response
from pydantic import BaseModel, Field

import functools
import io
import yaml

app = FastAPI(
    title="Holiday Destinations API",
    description="An API to manage a list of holiday destinations, including their details and ratings.",
    version="1.1.0"
)


# ---- Pydantic Models ----

class Destination(BaseModel):
    """
    Represents a holiday destination.
    """
    name: str = Field(..., description="The name of the holiday destination.", example="Bali")
    country: str = Field(..., description="The country where the destination is located.", example="Indonesia")
    description: str = Field(..., description="A brief description of the destination.", example="Beautiful beaches and vibrant culture.")
    rating: float = Field(..., ge=0.0, le=5.0, description="Rating of the destination (0 to 5).", example=4.8)


# ---- In-memory mock database ----

destinations_db = [
    {"name": "Bali", "country": "Indonesia", "description": "Beautiful beaches and vibrant culture.", "rating": 4.8},
    {"name": "Paris", "country": "France", "description": "The city of love, art, and amazing food.", "rating": 4.7},
]


# ---- Endpoints ----

@app.get("/destinations", response_model=List[Destination], tags=["Destinations"])
def get_destinations(
    min_rating: float = Query(0.0, ge=0.0, le=5.0, description="Filter destinations by minimum rating (0 to 5).")
) -> List[Destination]:
    """
    Retrieve a list of all holiday destinations in the database, optionally filtered by minimum rating.
    """
    return [d for d in destinations_db if d["rating"] >= min_rating]


@app.post("/destinations", response_model=Destination, status_code=201, tags=["Destinations"])
def create_destination(destination: Destination) -> Destination:
    """
    Add a new holiday destination to the database.
    """
    destinations_db.append(destination.dict())
    return destination


@app.get("/destinations/{destination_id}", response_model=Destination, tags=["Destinations"])
def get_destination_by_id(
    destination_id: int = Path(..., description="The ID of the destination to retrieve.", example=0)
) -> Destination:
    """
    Retrieve details of a specific holiday destination by its ID.
    """
    if destination_id < 0 or destination_id >= len(destinations_db):
        raise HTTPException(status_code=404, detail="Destination not found")
    return destinations_db[destination_id]


@app.put("/destinations/{destination_id}", response_model=Destination, tags=["Destinations"])
def update_destination(
    destination_id: int = Path(..., description="The ID of the destination to update.", example=1),
    updated_destination: Destination = ...
) -> Destination:
    """
    Update details of a specific holiday destination by its ID.
    """
    if destination_id < 0 or destination_id >= len(destinations_db):
        raise HTTPException(status_code=404, detail="Destination not found")
    
    destinations_db[destination_id] = updated_destination.dict()
    return updated_destination


@app.delete("/destinations/{destination_id}", status_code=204, tags=["Destinations"])
def delete_destination(
    destination_id: int = Path(..., description="The ID of the destination to delete.", example=0)
):
    """
    Remove a holiday destination from the database by its ID.
    """
    if destination_id < 0 or destination_id >= len(destinations_db):
        raise HTTPException(status_code=404, detail="Destination not found")
    
    destinations_db.pop(destination_id)
    return


@app.get("/", tags=["General"])
def read_root():
    """
    Root endpoint, returns a friendly greeting.
    """
    return {"message": "Welcome to the Holiday Destinations API!"}

# ---- Additional YAML OpenAPI Spec ----

@app.get('/openapi.yaml', include_in_schema=False)
@functools.lru_cache()
def read_openapi_yaml() -> Response:
    openapi_json= app.openapi()
    yaml_s = io.StringIO()
    yaml.dump(openapi_json, yaml_s)
    return Response(yaml_s.getvalue(), media_type='text/yaml')


# ---- Run the API ----

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)