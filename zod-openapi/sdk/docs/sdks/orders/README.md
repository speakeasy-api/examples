# Orders
(*orders*)

## Overview

### Available Operations

* [create_order](#create_order) - Create a new order
* [get_order](#get_order) - Get an order

## create_order

Creates a new order in the database.

### Example Usage

<!-- UsageSnippet language="python" operationID="createOrder" method="post" path="/orders" -->
```python
from openapi import SDK, models
from openapi.utils import parse_datetime


with SDK() as sdk:

    res = sdk.orders.create_order(request={
        "burger_ids": [
            1,
            2,
        ],
        "note": "No onions.",
        "status": models.Status.PENDING,
        "table": 1,
        "time": parse_datetime("2021-01-01T00:00:00Z"),
    })

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [models.OrderSchema](../../models/orderschema.md)                   | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrderSchemaOutput](../../models/orderschemaoutput.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## get_order

Gets an order from the database.

### Example Usage

<!-- UsageSnippet language="python" operationID="getOrder" method="get" path="/orders/{id}" -->
```python
from openapi import SDK


with SDK() as sdk:

    res = sdk.orders.get_order(request={
        "id": 1,
    })

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [models.GetOrderRequest](../../models/getorderrequest.md)           | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrderSchemaOutput](../../models/orderschemaoutput.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |