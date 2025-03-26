# Root
(*root*)

## Overview

Operations related to the root endpoint

### Available Operations

* [getWelcomeMessage](#getwelcomemessage) - Root endpoint

## getWelcomeMessage

Welcome to the Racing Drivers API

### Example Usage

```typescript
import { RacingLapCounter } from "racing-lap-counter";

const racingLapCounter = new RacingLapCounter();

async function run() {
  const result = await racingLapCounter.root.getWelcomeMessage();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RacingLapCounterCore } from "racing-lap-counter/core.js";
import { rootGetWelcomeMessage } from "racing-lap-counter/funcs/rootGetWelcomeMessage.js";

// Use `RacingLapCounterCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const racingLapCounter = new RacingLapCounterCore();

async function run() {
  const res = await rootGetWelcomeMessage(racingLapCounter);

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

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |