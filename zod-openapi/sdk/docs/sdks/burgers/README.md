# Burgers
(*burgers*)

## Overview

### Available Operations

* [create_burger](#create_burger) - Create a new burger
* [get_burger](#get_burger) - Get a burger
* [list_burgers](#list_burgers) - List burgers

## create_burger

Creates a new burger in the database.

### Example Usage

<!-- UsageSnippet language="python" operationID="createBurger" method="post" path="/burgers" -->
```python
from openapi import SDK


with SDK() as sdk:

    res = sdk.burgers.create_burger(request={
        "description": "A delicious bean burger with avocado.",
        "name": "Veggie Burger",
    })

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [models.BurgerSchema](../../models/burgerschema.md)                 | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.BurgerSchemaOutput](../../models/burgerschemaoutput.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## get_burger

Gets a burger from the database.

### Example Usage

<!-- UsageSnippet language="python" operationID="getBurger" method="get" path="/burgers/{id}" -->
```python
from openapi import SDK


with SDK() as sdk:

    res = sdk.burgers.get_burger(request={
        "id": 1,
    })

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [models.GetBurgerRequest](../../models/getburgerrequest.md)         | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.BurgerSchemaOutput](../../models/burgerschemaoutput.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## list_burgers

Lists all burgers in the database.

### Example Usage

<!-- UsageSnippet language="python" operationID="listBurgers" method="get" path="/burgers" -->
```python
from openapi import SDK


with SDK() as sdk:

    res = sdk.burgers.list_burgers()

    assert res is not None

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.BurgerSchemaOutput]](../../models/.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |