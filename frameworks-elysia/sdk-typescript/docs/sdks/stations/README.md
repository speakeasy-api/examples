# Stations

## Overview

Find and filter train stations across Europe, including their location and local timezone.

### Available Operations

* [getStations](#getstations) - Get a list of train stations

## getStations

Returns a paginated and searchable list of all train stations.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-stations" method="get" path="/stations/" -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await sdk.stations.getStations({
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
import { SDKCore } from "sdk/core.js";
import { stationsGetStations } from "sdk/funcs/stationsGetStations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await stationsGetStations(sdk, {
    coordinates: "52.5200,13.4050",
    search: "Milano Centrale",
    country: "DE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stationsGetStations failed:", res.error);
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

**Promise\<[operations.GetStationsResponseBody](../../models/operations/getstationsresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetStationsResponseBody | 400                            | application/problem+json       |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |