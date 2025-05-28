# Orders
(*orders*)

## Overview

### Available Operations

* [list](#list) - Get Orders
* [create](#create) - Create Order
* [getById](#getbyid) - Get Order
* [update](#update) - Update Order
* [delete](#delete) - Delete Order

## list

Retrieve all coffee orders.
If 'coffee_type' is provided, returns orders matching that coffee type.


### Example Usage

```typescript
import { SpeakeasyCoffeeClient } from "speakeasy-coffee-client";

const speakeasyCoffeeClient = new SpeakeasyCoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await speakeasyCoffeeClient.orders.list({
    coffeeType: "Latte",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCoffeeClientCore } from "speakeasy-coffee-client/core.js";
import { ordersList } from "speakeasy-coffee-client/funcs/ordersList.js";

// Use `SpeakeasyCoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyCoffeeClient = new SpeakeasyCoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await ordersList(speakeasyCoffeeClient, {
    coffeeType: "Latte",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrdersRequest](../../models/operations/getordersrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeOrder[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a new coffee order.
Validates that the coffee type exists.


### Example Usage

```typescript
import { SpeakeasyCoffeeClient } from "speakeasy-coffee-client";

const speakeasyCoffeeClient = new SpeakeasyCoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await speakeasyCoffeeClient.orders.create({
    id: 3,
    customerName: "Charlie",
    coffeeType: "Americano",
    size: "Large",
    price: 3.75,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCoffeeClientCore } from "speakeasy-coffee-client/core.js";
import { ordersCreate } from "speakeasy-coffee-client/funcs/ordersCreate.js";

// Use `SpeakeasyCoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyCoffeeClient = new SpeakeasyCoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await ordersCreate(speakeasyCoffeeClient, {
    id: 3,
    customerName: "Charlie",
    coffeeType: "Americano",
    size: "Large",
    price: 3.75,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CoffeeOrder](../../models/components/coffeeorder.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeOrder](../../models/components/coffeeorder.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 400, 422                   | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getById

Retrieve a specific coffee order by its ID.

### Example Usage

```typescript
import { SpeakeasyCoffeeClient } from "speakeasy-coffee-client";

const speakeasyCoffeeClient = new SpeakeasyCoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await speakeasyCoffeeClient.orders.getById({
    orderId: 1,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCoffeeClientCore } from "speakeasy-coffee-client/core.js";
import { ordersGetById } from "speakeasy-coffee-client/funcs/ordersGetById.js";

// Use `SpeakeasyCoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyCoffeeClient = new SpeakeasyCoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await ordersGetById(speakeasyCoffeeClient, {
    orderId: 1,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrderRequest](../../models/operations/getorderrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeOrder](../../models/components/coffeeorder.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorResponse       | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## update

Update an existing coffee order.

### Example Usage

```typescript
import { SpeakeasyCoffeeClient } from "speakeasy-coffee-client";

const speakeasyCoffeeClient = new SpeakeasyCoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await speakeasyCoffeeClient.orders.update({
    orderId: 1,
    coffeeOrderUpdate: {
      coffeeType: "Cappuccino",
      extras: [
        "Cinnamon",
        "Whipped cream",
      ],
      price: 5.75,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCoffeeClientCore } from "speakeasy-coffee-client/core.js";
import { ordersUpdate } from "speakeasy-coffee-client/funcs/ordersUpdate.js";

// Use `SpeakeasyCoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyCoffeeClient = new SpeakeasyCoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await ordersUpdate(speakeasyCoffeeClient, {
    orderId: 1,
    coffeeOrderUpdate: {
      coffeeType: "Cappuccino",
      extras: [
        "Cinnamon",
        "Whipped cream",
      ],
      price: 5.75,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateOrderRequest](../../models/operations/updateorderrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeOrder](../../models/components/coffeeorder.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorResponse       | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a coffee order.

### Example Usage

```typescript
import { SpeakeasyCoffeeClient } from "speakeasy-coffee-client";

const speakeasyCoffeeClient = new SpeakeasyCoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  await speakeasyCoffeeClient.orders.delete({
    orderId: 1,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCoffeeClientCore } from "speakeasy-coffee-client/core.js";
import { ordersDelete } from "speakeasy-coffee-client/funcs/ordersDelete.js";

// Use `SpeakeasyCoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyCoffeeClient = new SpeakeasyCoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await ordersDelete(speakeasyCoffeeClient, {
    orderId: 1,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOrderRequest](../../models/operations/deleteorderrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorResponse       | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |