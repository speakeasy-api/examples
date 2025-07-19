# Order
(*order*)

## Overview

Operations related to orders

### Available Operations

* [listOrders](#listorders) - List Orders
* [createOrder](#createorder) - Create Order
* [readOrder](#readorder) - Read Order
* [updateOrder](#updateorder) - Update Order

## listOrders

List all orders

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.order.listOrders();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { orderListOrders } from "mcp-burger-sdk/funcs/orderListOrders.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await orderListOrders(mcpBurgerSDK);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderListOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OrderOutput[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createOrder

Create an order

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.order.createOrder({
    burgerIds: [
      1,
      2,
    ],
    note: "No onions",
    table: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { orderCreateOrder } from "mcp-burger-sdk/funcs/orderCreateOrder.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await orderCreateOrder(mcpBurgerSDK, {
    burgerIds: [
      1,
      2,
    ],
    note: "No onions",
    table: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderCreateOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.OrderCreate](../../models/ordercreate.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OrderOutput](../../models/orderoutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## readOrder

Read an order

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.order.readOrder({
    orderId: 270294,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { orderReadOrder } from "mcp-burger-sdk/funcs/orderReadOrder.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await orderReadOrder(mcpBurgerSDK, {
    orderId: 270294,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderReadOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReadOrderRequest](../../models/operations/readorderrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OrderOutput](../../models/orderoutput.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## updateOrder

Update an order

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.order.updateOrder({
    orderId: 628998,
    orderUpdate: {
      burgerIds: [
        1,
        2,
      ],
      note: "No onions",
      table: 1,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { orderUpdateOrder } from "mcp-burger-sdk/funcs/orderUpdateOrder.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await orderUpdateOrder(mcpBurgerSDK, {
    orderId: 628998,
    orderUpdate: {
      burgerIds: [
        1,
        2,
      ],
      note: "No onions",
      table: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("orderUpdateOrder failed:", res.error);
  }
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

**Promise\<[models.OrderOutput](../../models/orderoutput.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |