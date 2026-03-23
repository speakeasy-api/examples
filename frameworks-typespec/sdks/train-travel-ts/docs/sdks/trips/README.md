# Trips

## Overview

Timetables and routes for train trips between stations, including pricing
and availability.


### Available Operations

* [list](#list) - Get available train trips

## list

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-trips" method="get" path="/trips" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.trips.list({
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
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { tripsList } from "train-travel-sdk/funcs/tripsList.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await tripsList(trainTravelSDK, {
    origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    date: new Date("2024-02-01T09:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tripsList failed:", res.error);
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

**Promise\<[operations.GetTripsResponse](../../models/operations/gettripsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |