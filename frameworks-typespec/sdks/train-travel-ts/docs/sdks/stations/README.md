# Stations

## Overview

Find and filter train stations across Europe, including their location
and local timezone.


### Available Operations

* [list](#list) - Get a list of train stations

## list

Returns a paginated and searchable list of all train stations.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-stations" method="get" path="/stations" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.stations.list({
    coordinates: "52.5200,13.4050",
    search: "Milano Centrale",
    country: "DE",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { stationsList } from "train-travel-sdk/funcs/stationsList.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await stationsList(trainTravelSDK, {
    coordinates: "52.5200,13.4050",
    search: "Milano Centrale",
    country: "DE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stationsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStationsRequest](../../models/operations/getstationsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStationsResponse](../../models/operations/getstationsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |