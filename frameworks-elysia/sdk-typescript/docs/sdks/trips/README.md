# Trips

## Overview

Timetables and routes for train trips between stations, including pricing and availability.

### Available Operations

* [getTrips](#gettrips) - Get available train trips

## getTrips

Returns a list of available train trips between the specified origin and destination stations on the given date.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-trips" method="get" path="/trips/" -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await sdk.trips.getTrips({
    origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    date: new Date("2024-02-01T09:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "sdk/core.js";
import { tripsGetTrips } from "sdk/funcs/tripsGetTrips.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await tripsGetTrips(sdk, {
    origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    date: new Date("2024-02-01T09:00:00Z"),
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
| `request`                                                                                                                                                                      | [operations.GetTripsRequest](../../models/operations/gettripsrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTripsResponseBody](../../models/operations/gettripsresponsebody.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.GetTripsResponseBody | 400                         | application/problem+json    |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |