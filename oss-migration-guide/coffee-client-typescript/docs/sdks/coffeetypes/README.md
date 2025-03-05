# CoffeeTypes
(*coffeeTypes*)

## Overview

### Available Operations

* [list](#list) - Get Coffee Types
* [create](#create) - Create Coffee Type
* [getById](#getbyid) - Get Coffee Type
* [update](#update) - Update Coffee Type
* [delete](#delete) - Delete Coffee Type

## list

Retrieve all available coffee types.

### Example Usage

```typescript
import { CoffeeClient } from "coffee-client";

const coffeeClient = new CoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await coffeeClient.coffeeTypes.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeClientCore } from "coffee-client/core.js";
import { coffeeTypesList } from "coffee-client/funcs/coffeeTypesList.js";

// Use `CoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeClient = new CoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await coffeeTypesList(coffeeClient);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeType[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a new coffee type.

### Example Usage

```typescript
import { CoffeeClient } from "coffee-client";

const coffeeClient = new CoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await coffeeClient.coffeeTypes.create({
    name: "Cold Brew",
    description: "Smooth, cold-steeped coffee",
    id: 4,
    priceMultiplier: 1.4,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeClientCore } from "coffee-client/core.js";
import { coffeeTypesCreate } from "coffee-client/funcs/coffeeTypesCreate.js";

// Use `CoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeClient = new CoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await coffeeTypesCreate(coffeeClient, {
    name: "Cold Brew",
    description: "Smooth, cold-steeped coffee",
    id: 4,
    priceMultiplier: 1.4,
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
| `request`                                                                                                                                                                      | [components.CoffeeType](../../models/components/coffeetype.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeType](../../models/components/coffeetype.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorResponse       | 400                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getById

Retrieve a specific coffee type by its ID.

### Example Usage

```typescript
import { CoffeeClient } from "coffee-client";

const coffeeClient = new CoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await coffeeClient.coffeeTypes.getById({
    typeId: 1,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeClientCore } from "coffee-client/core.js";
import { coffeeTypesGetById } from "coffee-client/funcs/coffeeTypesGetById.js";

// Use `CoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeClient = new CoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await coffeeTypesGetById(coffeeClient, {
    typeId: 1,
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
| `request`                                                                                                                                                                      | [operations.GetCoffeeTypeRequest](../../models/operations/getcoffeetyperequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeType](../../models/components/coffeetype.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorResponse       | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## update

Update an existing coffee type.

### Example Usage

```typescript
import { CoffeeClient } from "coffee-client";

const coffeeClient = new CoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await coffeeClient.coffeeTypes.update({
    typeId: 1,
    coffeeType: {
      name: "Flat White",
      description: "Espresso with steamed whole milk",
      id: 5,
      priceMultiplier: 1.25,
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
import { CoffeeClientCore } from "coffee-client/core.js";
import { coffeeTypesUpdate } from "coffee-client/funcs/coffeeTypesUpdate.js";

// Use `CoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeClient = new CoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await coffeeTypesUpdate(coffeeClient, {
    typeId: 1,
    coffeeType: {
      name: "Flat White",
      description: "Espresso with steamed whole milk",
      id: 5,
      priceMultiplier: 1.25,
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
| `request`                                                                                                                                                                      | [operations.UpdateCoffeeTypeRequest](../../models/operations/updatecoffeetyperequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeType](../../models/components/coffeetype.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorResponse       | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a coffee type.

### Example Usage

```typescript
import { CoffeeClient } from "coffee-client";

const coffeeClient = new CoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  await coffeeClient.coffeeTypes.delete({
    typeId: 1,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeClientCore } from "coffee-client/core.js";
import { coffeeTypesDelete } from "coffee-client/funcs/coffeeTypesDelete.js";

// Use `CoffeeClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeClient = new CoffeeClientCore({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const res = await coffeeTypesDelete(coffeeClient, {
    typeId: 1,
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
| `request`                                                                                                                                                                      | [operations.DeleteCoffeeTypeRequest](../../models/operations/deletecoffeetyperequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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