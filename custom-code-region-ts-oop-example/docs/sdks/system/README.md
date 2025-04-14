# System
(*system*)

## Overview

### Available Operations

* [getHealthcheck](#gethealthcheck) - Health check endpoint that returns 200 if the server and executor are ready
* [getHeartbeat](#getheartbeat) - Heartbeat endpoint that returns a nanosecond timestamp of the current time. Useful for making sure the client remains connected.
* [getPreFlightChecks](#getpreflightchecks) - Pre-flight checks endpoint reporting basic readiness info.
* [reset](#reset) - Reset endpoint allowing authorized users to reset the database.
* [getVersion](#getversion) - Returns the version of the server.

## getHealthcheck

Health check endpoint that returns 200 if the server and executor are ready

### Example Usage

```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.system.getHealthcheck();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { APICore } from "API/core.js";
import { systemGetHealthcheck } from "API/funcs/systemGetHealthcheck.js";

// Use `APICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const API = new APICore({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const res = await systemGetHealthcheck(API);

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

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 503                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## getHeartbeat

Heartbeat endpoint that returns a nanosecond timestamp of the current time. Useful for making sure the client remains connected.

### Example Usage

```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.system.getHeartbeat();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { APICore } from "API/core.js";
import { systemGetHeartbeat } from "API/funcs/systemGetHeartbeat.js";

// Use `APICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const API = new APICore({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const res = await systemGetHeartbeat(API);

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

**Promise\<[components.HeartbeatResponse](../../models/components/heartbeatresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.NotFound                        | 404                                    | application/json                       |
| errors.Unauthorized                    | 401, 403, 407                          | application/json                       |
| errors.Timeout                         | 408                                    | application/json                       |
| errors.RateLimited                     | 429                                    | application/json                       |
| errors.BadRequest                      | 400, 413, 414, 415, 422, 431           | application/json                       |
| errors.Timeout                         | 504                                    | application/json                       |
| errors.InternalServerError             | 500, 501, 502, 503, 505, 506, 507, 508 | application/json                       |
| errors.BadRequest                      | 510                                    | application/json                       |
| errors.Unauthorized                    | 511                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## getPreFlightChecks

Pre-flight checks endpoint reporting basic readiness info.

### Example Usage

```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.system.getPreFlightChecks();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { APICore } from "API/core.js";
import { systemGetPreFlightChecks } from "API/funcs/systemGetPreFlightChecks.js";

// Use `APICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const API = new APICore({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const res = await systemGetPreFlightChecks(API);

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

**Promise\<[components.ChecklistResponse](../../models/components/checklistresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.NotFound                        | 404                                    | application/json                       |
| errors.Unauthorized                    | 401, 403, 407                          | application/json                       |
| errors.Timeout                         | 408                                    | application/json                       |
| errors.RateLimited                     | 429                                    | application/json                       |
| errors.BadRequest                      | 400, 413, 414, 415, 422, 431           | application/json                       |
| errors.Timeout                         | 504                                    | application/json                       |
| errors.InternalServerError             | 500, 501, 502, 503, 505, 506, 507, 508 | application/json                       |
| errors.BadRequest                      | 510                                    | application/json                       |
| errors.Unauthorized                    | 511                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## reset

Reset endpoint allowing authorized users to reset the database.

### Example Usage

```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.system.reset();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { APICore } from "API/core.js";
import { systemReset } from "API/funcs/systemReset.js";

// Use `APICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const API = new APICore({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const res = await systemReset(API);

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

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 401                  | application/json     |
| errors.ErrorResponse | 500                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## getVersion

Returns the version of the server.

### Example Usage

```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.system.getVersion();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { APICore } from "API/core.js";
import { systemGetVersion } from "API/funcs/systemGetVersion.js";

// Use `APICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const API = new APICore({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const res = await systemGetVersion(API);

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

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.NotFound                        | 404                                    | application/json                       |
| errors.Unauthorized                    | 401, 403, 407                          | application/json                       |
| errors.Timeout                         | 408                                    | application/json                       |
| errors.RateLimited                     | 429                                    | application/json                       |
| errors.BadRequest                      | 400, 413, 414, 415, 422, 431           | application/json                       |
| errors.Timeout                         | 504                                    | application/json                       |
| errors.InternalServerError             | 500, 501, 502, 503, 505, 506, 507, 508 | application/json                       |
| errors.BadRequest                      | 510                                    | application/json                       |
| errors.Unauthorized                    | 511                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |