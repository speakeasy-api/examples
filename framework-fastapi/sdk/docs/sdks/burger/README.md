# Burger
(*burger*)

## Overview

Operations related to burgers

Burger external docs
<https://en.wikipedia.org/wiki/Hamburger>

### Available Operations

* [list_burgers](#list_burgers) - List Burgers
* [create_burger](#create_burger) - Create Burger
* [read_burger](#read_burger) - Read Burger
* [update_burger](#update_burger) - Update Burger
* [delete_burger](#delete_burger) - Delete Burger

## list_burgers

List all burgers

### Example Usage

```python
from openapi import SDK


with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.burger.list_burgers()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.BurgerOutput]](../../models/.md)**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create_burger

Create a burger

### Example Usage

```python
from openapi import SDK


with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.burger.create_burger(name="Cheeseburger")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *str*                                                               | :heavy_check_mark:                                                  | The name of the burger                                              | Cheeseburger                                                        |
| `description`                                                       | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | The description of the burger                                       | A classic cheeseburger                                              |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Response

**[models.BurgerOutput](../../models/burgeroutput.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## read_burger

Read a burger

### Example Usage

```python
from openapi import SDK


with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.burger.read_burger(burger_id=88308)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `burger_id`                                                         | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.BurgerOutput](../../models/burgeroutput.md)**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## update_burger

Update a burger

### Example Usage

```python
from openapi import SDK


with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.burger.update_burger(burger_id=731130, name="Cheeseburger", description="A classic cheeseburger")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `burger_id`                                                         | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `name`                                                              | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | The name of the burger                                              | Cheeseburger                                                        |
| `description`                                                       | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | The description of the burger                                       | A classic cheeseburger                                              |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Response

**[models.BurgerOutput](../../models/burgeroutput.md)**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## delete_burger

Delete a burger

### Example Usage

```python
from openapi import SDK


with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.burger.delete_burger(burger_id=887477)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `burger_id`                                                         | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ResponseMessage](../../models/responsemessage.md)**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |