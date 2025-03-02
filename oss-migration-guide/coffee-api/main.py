from fastapi import FastAPI, HTTPException, Query, status
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Annotated
from enum import Enum

app = FastAPI(
    title="Coffee Orders API",
    description="A CRUD API for managing coffee orders and available coffee types.",
    version="1.0.0",
    servers=[
        {"url": "http://localhost:8000", "description": "Development server"}
    ]
)

# --- Models ---

class CoffeeOrder(BaseModel):
    """
    Represents a coffee order in the system.
    """
    id: int = Field(
        ...,
        example=1,
        description="Unique identifier for the order"
    )
    customer_name: str = Field(
        ...,
        example="Alice",
        description="Name of the customer placing the order"
    )
    coffee_type: str = Field(
        ...,
        example="Latte",
        description="Type of coffee ordered (must match an existing coffee type)"
    )
    size: str = Field(
        ...,
        example="Medium",
        description="Size of the coffee order",
        enum=["Small", "Medium", "Large"]
    )
    extras: Optional[List[str]] = Field(
        default=None,
        example=["Extra shot", "Soy milk"],
        description="Optional additions to the coffee order"
    )
    price: float = Field(
        ...,
        example=4.50,
        description="Total price of the order",
        gt=0
    )

    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "customer_name": "Alice",
                "coffee_type": "Latte",
                "size": "Medium",
                "extras": ["Extra shot", "Soy milk"],
                "price": 4.50
            }
        }

# Model for updating a coffee order (all fields optional)
class CoffeeOrderUpdate(BaseModel):
    customer_name: Optional[str] = Field(None, example="Alice")
    coffee_type: Optional[str] = Field(None, example="Cappuccino")
    size: Optional[str] = Field(None, example="Large")
    extras: Optional[List[str]] = Field(None, example=["Whipped cream"])
    price: Optional[float] = Field(None, example=5.00)

class CoffeeType(BaseModel):
    """
    Represents a type of coffee available in the system.
    """
    id: int = Field(
        ...,
        example=1,
        description="Unique identifier for the coffee type"
    )
    name: str = Field(
        ...,
        example="Latte",
        description="Name of the coffee type"
    )
    description: Optional[str] = Field(
        None,
        example="A milk-based espresso coffee",
        description="Detailed description of the coffee type"
    )
    price_multiplier: Optional[float] = Field(
        1.0,
        example=1.2,
        description="Price multiplier for this coffee type",
        gt=0,
        le=5.0
    )

    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "name": "Latte",
                "description": "A milk-based espresso coffee",
                "price_multiplier": 1.2
            }
        }

# --- In-memory "databases" ---

orders_db = {}  # key: order id, value: CoffeeOrder

coffee_types_db = {
    1: CoffeeType(id=1, name="Espresso", description="Strong and bold coffee shot", price_multiplier=1.0),
    2: CoffeeType(id=2, name="Latte", description="Espresso with steamed milk", price_multiplier=1.2),
    3: CoffeeType(id=3, name="Cappuccino", description="Espresso with steamed milk foam", price_multiplier=1.1),
    4: CoffeeType(id=4, name="Americano", description="Espresso diluted with hot water", price_multiplier=1.0),
}

# --- Endpoints for Coffee Orders ---
app.get("/", response_model=str)
async def read_root():
    return "Welcome to the Coffee Orders API! 🚀"


@app.get("/orders", response_model=List[CoffeeOrder])
async def get_orders(coffee_type: Optional[str] = Query(
    None, description="Optional filter by coffee type (case-insensitive)"
)):
    """
    Retrieve all coffee orders.
    If 'coffee_type' is provided, returns orders matching that coffee type.
    """
    orders = list(orders_db.values())
    if coffee_type:
        orders = [order for order in orders if order.coffee_type.lower() == coffee_type.lower()]
    return orders

@app.get("/orders/{order_id}", response_model=CoffeeOrder)
async def get_order(order_id: int):
    """
    Retrieve a specific coffee order by its ID.
    """
    order = orders_db.get(order_id)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@app.post("/orders", response_model=CoffeeOrder, status_code=201)
async def create_order(order: CoffeeOrder):
    """
    Create a new coffee order.

    Parameters:
    - **order**: The coffee order details including customer name, coffee type, size, and optional extras

    Returns:
    - The created coffee order

    Raises:
    - **400**: If the order ID already exists or if the coffee type is invalid
    """
    if order.id in orders_db:
        raise HTTPException(
            status_code=400,
            detail="Order with this ID already exists"
        )
    
    if not any(ct.name.lower() == order.coffee_type.lower() 
              for ct in coffee_types_db.values()):
        raise HTTPException(
            status_code=400,
            detail="Invalid coffee type. Please choose a valid coffee type."
        )
    
    orders_db[order.id] = order
    return order

@app.put("/orders/{order_id}", response_model=CoffeeOrder)
async def update_order(order_id: int, order_update: CoffeeOrderUpdate):
    """
    Update an existing coffee order.
    """
    stored_order = orders_db.get(order_id)
    if not stored_order:
        raise HTTPException(status_code=404, detail="Order not found")
    updated_data = order_update.dict(exclude_unset=True)
    if "coffee_type" in updated_data:
        if not any(ct.name.lower() == updated_data["coffee_type"].lower() for ct in coffee_types_db.values()):
            raise HTTPException(status_code=400, detail="Invalid coffee type. Please choose a valid coffee type.")
    updated_order = stored_order.copy(update=updated_data)
    orders_db[order_id] = updated_order
    return updated_order

@app.delete("/orders/{order_id}", status_code=204)
async def delete_order(order_id: int):
    """
    Delete a coffee order.
    """
    if order_id not in orders_db:
        raise HTTPException(status_code=404, detail="Order not found")
    del orders_db[order_id]

# --- Endpoints for Coffee Types ---

@app.get("/coffee-types", response_model=List[CoffeeType])
async def get_coffee_types():
    """
    Retrieve all available coffee types.
    """
    return list(coffee_types_db.values())

@app.get("/coffee-types/{type_id}", response_model=CoffeeType)
async def get_coffee_type(type_id: int):
    """
    Retrieve a specific coffee type by its ID.
    """
    coffee_type = coffee_types_db.get(type_id)
    if not coffee_type:
        raise HTTPException(status_code=404, detail="Coffee type not found")
    return coffee_type

@app.post("/coffee-types", response_model=CoffeeType, status_code=201)
async def create_coffee_type(coffee_type: CoffeeType):
    """
    Create a new coffee type.
    """
    if coffee_type.id in coffee_types_db:
        raise HTTPException(status_code=400, detail="Coffee type with this ID already exists")
    coffee_types_db[coffee_type.id] = coffee_type
    return coffee_type

@app.put("/coffee-types/{type_id}", response_model=CoffeeType)
async def update_coffee_type(type_id: int, updated_type: CoffeeType):
    """
    Update an existing coffee type.
    """
    if type_id not in coffee_types_db:
        raise HTTPException(status_code=404, detail="Coffee type not found")
    coffee_types_db[type_id] = updated_type
    return updated_type

@app.delete("/coffee-types/{type_id}", status_code=204)
async def delete_coffee_type(type_id: int):
    """
    Delete a coffee type.
    """
    if type_id not in coffee_types_db:
        raise HTTPException(status_code=404, detail="Coffee type not found")
    del coffee_types_db[type_id]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

