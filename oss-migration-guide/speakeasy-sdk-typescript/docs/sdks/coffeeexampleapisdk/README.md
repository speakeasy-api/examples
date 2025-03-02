# CoffeeExampleApiSDK

## Overview

Coffee Orders API: A CRUD API for managing coffee orders and available coffee types.

### Available Operations

* [getOrdersOrdersGet](#getordersordersget) - Get Orders
* [createOrderOrdersPost](#createorderorderspost) - Create Order
* [getOrderOrdersOrderIdGet](#getorderordersorderidget) - Get Order
* [updateOrderOrdersOrderIdPut](#updateorderordersorderidput) - Update Order
* [deleteOrderOrdersOrderIdDelete](#deleteorderordersorderiddelete) - Delete Order
* [getCoffeeTypesCoffeeTypesGet](#getcoffeetypescoffeetypesget) - Get Coffee Types
* [createCoffeeTypeCoffeeTypesPost](#createcoffeetypecoffeetypespost) - Create Coffee Type
* [getCoffeeTypeCoffeeTypesTypeIdGet](#getcoffeetypecoffeetypestypeidget) - Get Coffee Type
* [updateCoffeeTypeCoffeeTypesTypeIdPut](#updatecoffeetypecoffeetypestypeidput) - Update Coffee Type
* [deleteCoffeeTypeCoffeeTypesTypeIdDelete](#deletecoffeetypecoffeetypestypeiddelete) - Delete Coffee Type

## getOrdersOrdersGet

Retrieve all coffee orders.
If 'coffee_type' is provided, returns orders matching that coffee type.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.getOrdersOrdersGet({
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
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { getOrdersOrdersGet } from "coffee-example-api-sdk/funcs/getOrdersOrdersGet.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await getOrdersOrdersGet(coffeeExampleApiSDK, {
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
| `request`                                                                                                                                                                      | [operations.GetOrdersOrdersGetRequest](../../models/operations/getordersordersgetrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## createOrderOrdersPost

Create a new coffee order.
Validates that the coffee type exists.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.createOrderOrdersPost({
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
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { createOrderOrdersPost } from "coffee-example-api-sdk/funcs/createOrderOrdersPost.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await createOrderOrdersPost(coffeeExampleApiSDK, {
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
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getOrderOrdersOrderIdGet

Retrieve a specific coffee order by its ID.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.getOrderOrdersOrderIdGet({
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
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { getOrderOrdersOrderIdGet } from "coffee-example-api-sdk/funcs/getOrderOrdersOrderIdGet.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await getOrderOrdersOrderIdGet(coffeeExampleApiSDK, {
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
| `request`                                                                                                                                                                      | [operations.GetOrderOrdersOrderIdGetRequest](../../models/operations/getorderordersorderidgetrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeOrder](../../models/components/coffeeorder.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## updateOrderOrdersOrderIdPut

Update an existing coffee order.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.updateOrderOrdersOrderIdPut({
    orderId: 11411,
    coffeeOrderUpdate: {
      customerName: "Alice",
      coffeeType: "Cappuccino",
      size: "Large",
      extras: [
        "Whipped cream",
      ],
      price: 5,
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
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { updateOrderOrdersOrderIdPut } from "coffee-example-api-sdk/funcs/updateOrderOrdersOrderIdPut.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await updateOrderOrdersOrderIdPut(coffeeExampleApiSDK, {
    orderId: 11411,
    coffeeOrderUpdate: {
      customerName: "Alice",
      coffeeType: "Cappuccino",
      size: "Large",
      extras: [
        "Whipped cream",
      ],
      price: 5,
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
| `request`                                                                                                                                                                      | [operations.UpdateOrderOrdersOrderIdPutRequest](../../models/operations/updateorderordersorderidputrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeOrder](../../models/components/coffeeorder.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteOrderOrdersOrderIdDelete

Delete a coffee order.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  await coffeeExampleApiSDK.deleteOrderOrdersOrderIdDelete({
    orderId: 229509,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { deleteOrderOrdersOrderIdDelete } from "coffee-example-api-sdk/funcs/deleteOrderOrdersOrderIdDelete.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await deleteOrderOrdersOrderIdDelete(coffeeExampleApiSDK, {
    orderId: 229509,
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
| `request`                                                                                                                                                                      | [operations.DeleteOrderOrdersOrderIdDeleteRequest](../../models/operations/deleteorderordersorderiddeleterequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getCoffeeTypesCoffeeTypesGet

Retrieve all available coffee types.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.getCoffeeTypesCoffeeTypesGet();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { getCoffeeTypesCoffeeTypesGet } from "coffee-example-api-sdk/funcs/getCoffeeTypesCoffeeTypesGet.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await getCoffeeTypesCoffeeTypesGet(coffeeExampleApiSDK);

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

## createCoffeeTypeCoffeeTypesPost

Create a new coffee type.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.createCoffeeTypeCoffeeTypesPost({
    id: 1,
    name: "Latte",
    description: "A milk-based espresso coffee",
    priceMultiplier: 1.2,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { createCoffeeTypeCoffeeTypesPost } from "coffee-example-api-sdk/funcs/createCoffeeTypeCoffeeTypesPost.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await createCoffeeTypeCoffeeTypesPost(coffeeExampleApiSDK, {
    id: 1,
    name: "Latte",
    description: "A milk-based espresso coffee",
    priceMultiplier: 1.2,
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
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getCoffeeTypeCoffeeTypesTypeIdGet

Retrieve a specific coffee type by its ID.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.getCoffeeTypeCoffeeTypesTypeIdGet({
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
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { getCoffeeTypeCoffeeTypesTypeIdGet } from "coffee-example-api-sdk/funcs/getCoffeeTypeCoffeeTypesTypeIdGet.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await getCoffeeTypeCoffeeTypesTypeIdGet(coffeeExampleApiSDK, {
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
| `request`                                                                                                                                                                      | [operations.GetCoffeeTypeCoffeeTypesTypeIdGetRequest](../../models/operations/getcoffeetypecoffeetypestypeidgetrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeType](../../models/components/coffeetype.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## updateCoffeeTypeCoffeeTypesTypeIdPut

Update an existing coffee type.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.updateCoffeeTypeCoffeeTypesTypeIdPut({
    typeId: 157866,
    coffeeType: {
      id: 1,
      name: "Latte",
      description: "A milk-based espresso coffee",
      priceMultiplier: 1.2,
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
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { updateCoffeeTypeCoffeeTypesTypeIdPut } from "coffee-example-api-sdk/funcs/updateCoffeeTypeCoffeeTypesTypeIdPut.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await updateCoffeeTypeCoffeeTypesTypeIdPut(coffeeExampleApiSDK, {
    typeId: 157866,
    coffeeType: {
      id: 1,
      name: "Latte",
      description: "A milk-based espresso coffee",
      priceMultiplier: 1.2,
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
| `request`                                                                                                                                                                      | [operations.UpdateCoffeeTypeCoffeeTypesTypeIdPutRequest](../../models/operations/updatecoffeetypecoffeetypestypeidputrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CoffeeType](../../models/components/coffeetype.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteCoffeeTypeCoffeeTypesTypeIdDelete

Delete a coffee type.

### Example Usage

```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  await coffeeExampleApiSDK.deleteCoffeeTypeCoffeeTypesTypeIdDelete({
    typeId: 366515,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoffeeExampleApiSDKCore } from "coffee-example-api-sdk/core.js";
import { deleteCoffeeTypeCoffeeTypesTypeIdDelete } from "coffee-example-api-sdk/funcs/deleteCoffeeTypeCoffeeTypesTypeIdDelete.js";

// Use `CoffeeExampleApiSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coffeeExampleApiSDK = new CoffeeExampleApiSDKCore();

async function run() {
  const res = await deleteCoffeeTypeCoffeeTypesTypeIdDelete(coffeeExampleApiSDK, {
    typeId: 366515,
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
| `request`                                                                                                                                                                      | [operations.DeleteCoffeeTypeCoffeeTypesTypeIdDeleteRequest](../../models/operations/deletecoffeetypecoffeetypestypeiddeleterequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |