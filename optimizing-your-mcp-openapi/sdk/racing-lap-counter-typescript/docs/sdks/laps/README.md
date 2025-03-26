# Laps
(*laps*)

## Overview

Operations related to lap times

### Available Operations

* [createLap](#createlap) - Create a new lap record
* [listLaps](#listlaps) - Get all laps for a driver
* [getLap](#getlap) - Get a specific lap record
* [updateLap](#updatelap) - Update a lap record
* [deleteLap](#deletelap) - Delete a lap record

## createLap

Create a new lap record for a specific driver

### Example Usage

```typescript
import { RacingLapCounter } from "racing-lap-counter";

const racingLapCounter = new RacingLapCounter();

async function run() {
  const result = await racingLapCounter.laps.createLap({
    driverId: "<id>",
    lapCreate: {
      lapTime: 82.45,
      track: "Spa-Francorchamps",
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
import { RacingLapCounterCore } from "racing-lap-counter/core.js";
import { lapsCreateLap } from "racing-lap-counter/funcs/lapsCreateLap.js";

// Use `RacingLapCounterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const racingLapCounter = new RacingLapCounterCore();

async function run() {
  const res = await lapsCreateLap(racingLapCounter, {
    driverId: "<id>",
    lapCreate: {
      lapTime: 82.45,
      track: "Spa-Francorchamps",
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
| `request`                                                                                                                                                                      | [operations.CreateLapRequest](../../models/operations/createlaprequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Lap](../../models/components/lap.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listLaps

Retrieve all lap records for a specific driver

### Example Usage

```typescript
import { RacingLapCounter } from "racing-lap-counter";

const racingLapCounter = new RacingLapCounter();

async function run() {
  const result = await racingLapCounter.laps.listLaps({
    driverId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RacingLapCounterCore } from "racing-lap-counter/core.js";
import { lapsListLaps } from "racing-lap-counter/funcs/lapsListLaps.js";

// Use `RacingLapCounterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const racingLapCounter = new RacingLapCounterCore();

async function run() {
  const res = await lapsListLaps(racingLapCounter, {
    driverId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListLapsRequest](../../models/operations/listlapsrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Lap[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getLap

Retrieve a specific lap record for a driver

### Example Usage

```typescript
import { RacingLapCounter } from "racing-lap-counter";

const racingLapCounter = new RacingLapCounter();

async function run() {
  const result = await racingLapCounter.laps.getLap({
    driverId: "<id>",
    lapId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RacingLapCounterCore } from "racing-lap-counter/core.js";
import { lapsGetLap } from "racing-lap-counter/funcs/lapsGetLap.js";

// Use `RacingLapCounterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const racingLapCounter = new RacingLapCounterCore();

async function run() {
  const res = await lapsGetLap(racingLapCounter, {
    driverId: "<id>",
    lapId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetLapRequest](../../models/operations/getlaprequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Lap](../../models/components/lap.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## updateLap

Update a specific lap record for a driver

### Example Usage

```typescript
import { RacingLapCounter } from "racing-lap-counter";

const racingLapCounter = new RacingLapCounter();

async function run() {
  const result = await racingLapCounter.laps.updateLap({
    driverId: "<id>",
    lapId: "<id>",
    lapUpdate: {
      lapTime: 81.23,
      track: "Imola",
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
import { RacingLapCounterCore } from "racing-lap-counter/core.js";
import { lapsUpdateLap } from "racing-lap-counter/funcs/lapsUpdateLap.js";

// Use `RacingLapCounterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const racingLapCounter = new RacingLapCounterCore();

async function run() {
  const res = await lapsUpdateLap(racingLapCounter, {
    driverId: "<id>",
    lapId: "<id>",
    lapUpdate: {
      lapTime: 81.23,
      track: "Imola",
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
| `request`                                                                                                                                                                      | [operations.UpdateLapRequest](../../models/operations/updatelaprequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Lap](../../models/components/lap.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteLap

Delete a specific lap record for a driver

### Example Usage

```typescript
import { RacingLapCounter } from "racing-lap-counter";

const racingLapCounter = new RacingLapCounter();

async function run() {
  const result = await racingLapCounter.laps.deleteLap({
    driverId: "<id>",
    lapId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RacingLapCounterCore } from "racing-lap-counter/core.js";
import { lapsDeleteLap } from "racing-lap-counter/funcs/lapsDeleteLap.js";

// Use `RacingLapCounterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const racingLapCounter = new RacingLapCounterCore();

async function run() {
  const res = await lapsDeleteLap(racingLapCounter, {
    driverId: "<id>",
    lapId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteLapRequest](../../models/operations/deletelaprequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |