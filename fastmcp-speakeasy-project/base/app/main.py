"""APItizing Burgers API: an example API to manage burgers and orders in a restaurant

This example API demonstrates Speakeasy's recommended practices for generating clear
OpenAPI specifications.
"""

from datetime import datetime
from enum import Enum
from typing import List, Annotated

from fastapi import Depends, FastAPI, HTTPException, Path, status
from fastapi.openapi.utils import get_openapi
from fastapi.responses import JSONResponse
from fastapi.routing import APIRoute
from fastapi.security import APIKeyHeader

from pydantic import BaseModel, Field, conlist

API_KEY = "your-apitizing-api-key"

header_scheme = APIKeyHeader(
    name=API_KEY,
    auto_error=True,
    description="API Key for the Burger listing API. API Key should be sent as a header, witht the value 'your-apitizing-api-key'",
    scheme_name="api_key",
)


class BurgerCreate(BaseModel):
    """Fields to create a burger"""

    name: str = Field(
        description="The name of the burger",
        examples=["Cheeseburger", "Hamburger", "Veggie Burger"],
        min_length=1,
        max_length=50,
    )
    description: str = Field(
        "",
        description="The description of the burger",
        examples=["A classic cheeseburger", "Veggie burger with avocado"],
        max_length=255,
    )


class BurgerUpdate(BaseModel):
    """Fields to update a burger"""

    name: str = Field(
        None,
        description="The name of the burger",
        examples=["Cheeseburger", "Hamburger", "Veggie Burger", None],
        min_length=1,
        max_length=50,
    )
    description: str = Field(
        None,
        description="The description of the burger",
        examples=["A classic cheeseburger", "Veggie burger with avocado", None],
        max_length=255,
    )


class BurgerData(BaseModel):
    """A burger in the database"""

    id: int = Field(gte=0, description="The id of the burger", examples=[1, 2, 3])
    name: str = Field(
        description="The name of the burger",
        examples=["Cheeseburger", "Hamburger", "Veggie Burger"],
        min_length=1,
        max_length=50,
    )
    description: str = Field(
        "",
        description="The description of the burger",
        examples=["A classic cheeseburger", "Veggie burger with avocado"],
        max_length=255,
    )


class BurgerOutput(BurgerData):
    """A burger to be returned"""


class OrderStatus(str, Enum):
    """Status of the order"""

    CREATED = "CREATED"
    PREPARING = "PREPARING"
    READY = "READY"
    DELIVERED = "DELIVERED"
    CANCELLED = "CANCELLED"


class OrderCreate(BaseModel):
    """Fields to create an order"""

    burger_ids: conlist(int, min_length=1, max_length=255) = Field(
        description="List of burger ids in the order",
        examples=[[1, 2], [3], [1, 3]],
    )
    table: int = Field(
        gt=0,
        description="Table number for the order",
        examples=[1, 2, 3],
    )
    note: str = Field(
        None,
        description="Note for the order",
        examples=["No onions", "Extra ketchup"],
    )


class OrderData(BaseModel):
    """An order in the database"""

    id: int = Field(gte=0, description="The id of the order", examples=[1, 2, 3])
    burger_ids: conlist(int, min_length=1, max_length=255) = Field(
        description="List of burger ids in the order",
        examples=[[1, 2], [3], [1, 3]],
    )
    time: datetime = Field(
        description="Time of the order",
        examples=["2021-01-01T12:00:00"],
    )
    table: int = Field(
        gt=0,
        description="Table number for the order",
        examples=[1, 2, 3],
    )
    status: OrderStatus = Field(
        description="Status of the order",
        examples=[s.value for s in OrderStatus],
    )
    note: str = Field(
        None,
        description="Note for the order",
        examples=["No onions", "Extra ketchup"],
    )


class OrderUpdate(BaseModel):
    """Fields to update an order"""

    burger_ids: conlist(int, min_length=1, max_length=255) = Field(
        None,
        description="List of burger ids in the order",
        examples=[[1, 2], [3], [1, 3]],
    )
    table: int = Field(
        None,
        gt=0,
        description="Table number for the order",
        examples=[1, 2, 3],
    )
    status: OrderStatus = Field(
        None,
        description="Status of the order",
        examples=[s.value for s in OrderStatus],
    )
    note: str = Field(
        None,
        description="Note for the order",
        examples=["No onions", "Extra ketchup"],
    )


class OrderOutput(OrderData):
    """An order to be returned"""


class ResponseMessage(BaseModel):
    """A response message"""

    message: str = Field(description="The response message")


OPENAPI_RESPONSE_BURGER_NOT_FOUND = {
    "model": ResponseMessage,
    "description": "Burger not found",
}


OPENAPI_RESPONSE_ORDER_NOT_FOUND = {
    "model": ResponseMessage,
    "description": "Order not found",
}


def response_burger_not_found(burger_id: int):
    """Response for burger not found"""

    return JSONResponse(
        status_code=404,
        content=f"Burger with id {burger_id} does not exist",
    )


def response_order_not_found(order_id: int):
    """Response for order not found"""

    return JSONResponse(
        status_code=404,
        content=f"Order with id {order_id} does not exist",
    )


tags_metadata = [
    {
        "name": "burger",
        "description": "Operations related to burgers",
        "externalDocs": {
            "description": "Burger external docs",
            "url": "https://en.wikipedia.org/wiki/Hamburger",
        },
    },
    {
        "name": "order",
        "description": "Operations related to orders",
    },
]


def convert_snake_case_to_camel_case(string: str) -> str:
    """Convert snake case to camel case"""

    words = string.split("_")
    return words[0] + "".join(word.title() for word in words[1:])


def custom_generate_unique_id_function(route: APIRoute) -> str:
    """Custom function to generate unique id for each endpoint"""

    return convert_snake_case_to_camel_case(route.name)


server = FastAPI(
    servers=[
        {"url": "http://127.0.0.1:8000", "description": "Local server"},
    ],
    summary="A simple API to manage burgers and orders",
    description="This API is used to manage burgers and orders in a restaurant",
    version="0.1.0",
    title="APItizing Burgers API",
    openapi_tags=tags_metadata,
    generate_unique_id_function=custom_generate_unique_id_function,
)

# Simulate in-memory databases
burgers_db = []
orders_db = []


@server.post(
    "/burger/",
    response_model=BurgerOutput,
    status_code=status.HTTP_201_CREATED,
    tags=["burger"],
)
def create_burger(burger: BurgerCreate):
    """Create a burger"""

    burger_data = BurgerData(
        id=len(burgers_db),
        **burger.dict(),
    )

    burgers_db.append(burger_data)
    return BurgerOutput(**burger_data.dict())


@server.get(
    "/burger/",
    response_model=List[BurgerOutput],
    tags=["burger"],
    openapi_extra={
        "x-speakeasy-retries": {
            "strategy": "backoff",
            "backoff": {
                "initialInterval": 500,
                "maxInterval": 60000,
                "maxElapsedTime": 3600000,
                "exponent": 1.5,
            },
            "statusCodes": [
                "5XX",
            ],
            "retryConnectionErrors": True,
        }
    },
)
def list_burgers(key: str = Depends(header_scheme)):
    """List all burgers"""

    if key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API Key")

    return [BurgerOutput(**burger_data.dict()) for burger_data in burgers_db]


@server.get(
    "/burger/{burger_id}",
    response_model=BurgerOutput,
    responses={404: OPENAPI_RESPONSE_BURGER_NOT_FOUND},
    tags=["burger"],
)
def read_burger(burger_id: Annotated[int, Path(title="Burger ID")]):
    """Read a burger"""

    for burger_data in burgers_db:
        if burger_data.id == burger_id:
            return BurgerOutput(**burger_data.dict())
    return response_burger_not_found(burger_id)


@server.put(
    "/burger/{burger_id}",
    response_model=BurgerOutput,
    responses={404: OPENAPI_RESPONSE_BURGER_NOT_FOUND},
    tags=["burger"],
)
def update_burger(burger_id: int, burger: BurgerUpdate):
    """Update a burger"""

    for i, burger_data in enumerate(burgers_db):
        if burger_data.id == burger_id:
            burger_updated = burger_data.dict()
            burger_updated.update(burger.dict(exclude_unset=True))
            burgers_db[i] = BurgerData(**burger_updated)
            return BurgerOutput(**burgers_db[i].dict())
    return response_burger_not_found(burger_id)


@server.delete(
    "/burger/{burger_id}",
    responses={
        200: {"model": ResponseMessage, "description": "Burger deleted"},
        404: OPENAPI_RESPONSE_BURGER_NOT_FOUND,
    },
    tags=["burger"],
)
def delete_burger(burger_id: Annotated[int, Path(title="Burger ID")]):
    """Delete a burger"""

    for i, burger_data in enumerate(burgers_db):
        if burger_data.id == burger_id:
            burger_name = burger_data.name
            burgers_db.pop(i)
            return JSONResponse(
                status_code=200,
                content={"message": f"{burger_name} deleted"},
            )
    return response_burger_not_found(burger_id)


@server.post(
    "/order/",
    response_model=OrderOutput,
    status_code=status.HTTP_201_CREATED,
    tags=["order"],
)
def create_order(order: OrderCreate):
    """Create an order"""

    order_data = OrderData(
        id=len(orders_db),
        time=datetime.now(),
        status=OrderStatus.CREATED,
        **order.dict(),
    )

    orders_db.append(order_data)
    return OrderOutput(**order_data.dict())


@server.get("/order/", response_model=List[OrderOutput], tags=["order"])
def list_orders():
    """List all orders"""

    return [OrderOutput(**order_data.dict()) for order_data in orders_db]


@server.get(
    "/order/{order_id}",
    response_model=OrderOutput,
    responses={404: OPENAPI_RESPONSE_ORDER_NOT_FOUND},
    tags=["order"],
)
def read_order(order_id: Annotated[int, Path(title="Order ID")]):
    """Read an order"""

    for order in orders_db:
        if order.id == order_id:
            return OrderOutput(**order.dict())
    return response_order_not_found(order_id)


@server.put(
    "/order/{order_id}",
    response_model=OrderOutput,
    responses={404: OPENAPI_RESPONSE_ORDER_NOT_FOUND},
    tags=["order"],
)
def update_order(order_id: Annotated[int, Path(title="Order ID")], order: OrderUpdate):
    """Update an order"""

    for i, order_data in enumerate(orders_db):
        if order_data.id == order_id:
            updated_order = order_data.dict()
            updated_order.update(order.dict(exclude_unset=True))
            orders_db[i] = OrderData(**updated_order)
            return OrderOutput(**orders_db[i].dict())
    return response_order_not_found(order_id)


@server.webhooks.post(
    "order-status-changed",
    operation_id="webhookOrderStatusChanged",
)
def webhook_order_status_changed(body: OrderOutput):  # pylint: disable=unused-argument
    """
    When an order status is changed, this webhook will be triggered.

    The server will send a `POST` request with the order details to the webhook URL.
    """


def custom_openapi():
    """Customize OpenAPI Output"""

    if server.openapi_schema:
        return server.openapi_schema

    openapi_schema = get_openapi(
        title=server.title,
        version=server.version,
        summary=server.summary,
        description=server.description,
        servers=server.servers,
        routes=server.routes,
        tags=server.openapi_tags,
        webhooks=server.webhooks.routes,
    )

    openapi_schema["x-speakeasy-retries"] = {
        "strategy": "backoff",
        "backoff": {
            "initialInterval": 500,
            "maxInterval": 60000,
            "maxElapsedTime": 3600000,
            "exponent": 1.5,
        },
        "statusCodes": [
            "5XX",
        ],
        "retryConnectionErrors": True,
    }

    server.openapi_schema = openapi_schema
    return server.openapi_schema


server.openapi = custom_openapi