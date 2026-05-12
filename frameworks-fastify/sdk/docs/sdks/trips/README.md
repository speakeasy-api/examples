# Trips

## Overview

Timetables and routes for train trips between stations.

### Available Operations

* [getTrips](#gettrips)

## getTrips

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-trips" method="get" path="/trips" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  oAuth2: "<YOUR_O_AUTH2_HERE>",
});

async function run() {
  const result = await sdk.trips.getTrips({
    date: new Date("2026-07-10T20:57:33.258Z"),
    destination: "eccd3bf6-7737-47cd-b359-0596cf854de4",
    origin: "4c3b4398-6f36-47bf-b258-344f651bc875",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { tripsGetTrips } from "openapi/funcs/tripsGetTrips.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: "<YOUR_O_AUTH2_HERE>",
});

async function run() {
  const res = await tripsGetTrips(sdk, {
    date: new Date("2026-07-10T20:57:33.258Z"),
    destination: "eccd3bf6-7737-47cd-b359-0596cf854de4",
    origin: "4c3b4398-6f36-47bf-b258-344f651bc875",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tripsGetTrips failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTripsRequest](../../sdk/models/operations/gettripsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTripsResponseBody](../../sdk/models/operations/gettripsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |