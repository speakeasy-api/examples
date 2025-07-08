# Burger
(*burger*)

## Overview

Operations related to burgers

Burger external docs
<https://en.wikipedia.org/wiki/Hamburger>

### Available Operations

* [listBurgers](#listburgers) - List Burgers
* [createBurger](#createburger) - Create Burger
* [deleteBurger](#deleteburger) - Delete Burger
* [readBurger](#readburger) - Read Burger
* [updateBurger](#updateburger) - Update Burger

## listBurgers

List all burgers

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.listBurgers();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { burgerListBurgers } from "mcp-burger-sdk/funcs/burgerListBurgers.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await burgerListBurgers(mcpBurgerSDK);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("burgerListBurgers failed:", res.error);
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

**Promise\<[models.BurgerOutput[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createBurger

Create a burger

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.createBurger({
    description: "A classic cheeseburger",
    name: "Cheeseburger",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { burgerCreateBurger } from "mcp-burger-sdk/funcs/burgerCreateBurger.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await burgerCreateBurger(mcpBurgerSDK, {
    description: "A classic cheeseburger",
    name: "Cheeseburger",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("burgerCreateBurger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BurgerCreate](../../models/burgercreate.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BurgerOutput](../../models/burgeroutput.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteBurger

Delete a burger

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.deleteBurger({
    burgerId: 887477,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { burgerDeleteBurger } from "mcp-burger-sdk/funcs/burgerDeleteBurger.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await burgerDeleteBurger(mcpBurgerSDK, {
    burgerId: 887477,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("burgerDeleteBurger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBurgerRequest](../../models/operations/deleteburgerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ResponseMessage](../../models/responsemessage.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## readBurger

Read a burger

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.readBurger({
    burgerId: 88308,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { McpBurgerSDKCore } from "mcp-burger-sdk/core.js";
import { burgerReadBurger } from "mcp-burger-sdk/funcs/burgerReadBurger.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await burgerReadBurger(mcpBurgerSDK, {
    burgerId: 88308,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("burgerReadBurger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReadBurgerRequest](../../models/operations/readburgerrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BurgerOutput](../../models/burgeroutput.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## updateBurger

Update a burger

### Example Usage

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.updateBurger({
    burgerId: 731130,
    burgerUpdate: {
      description: "A classic cheeseburger",
      name: "Cheeseburger",
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
import { burgerUpdateBurger } from "mcp-burger-sdk/funcs/burgerUpdateBurger.js";

// Use `McpBurgerSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mcpBurgerSDK = new McpBurgerSDKCore({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await burgerUpdateBurger(mcpBurgerSDK, {
    burgerId: 731130,
    burgerUpdate: {
      description: "A classic cheeseburger",
      name: "Cheeseburger",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("burgerUpdateBurger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBurgerRequest](../../models/operations/updateburgerrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BurgerOutput](../../models/burgeroutput.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseMessageError | 404                         | application/json            |
| errors.HTTPValidationError  | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |