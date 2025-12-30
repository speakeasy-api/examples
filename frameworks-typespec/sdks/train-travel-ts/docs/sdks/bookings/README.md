# Bookings

## Overview

Create and manage bookings for train trips, including passenger details
and optional extras.


### Available Operations

* [list](#list) - List existing bookings
* [create](#create) - Create a booking
* [createRaw](#createraw) - Create a booking
* [get](#get) - Get a booking
* [delete](#delete) - Delete a booking

## list

Returns a list of all trip bookings by the authenticated user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-bookings" method="get" path="/bookings" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.bookings.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { bookingsList } from "train-travel-sdk/funcs/bookingsList.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsList(trainTravelSDK, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBookingsRequest](../../models/operations/getbookingsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBookingsResponse](../../models/operations/getbookingsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |

## create

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-booking" method="post" path="/bookings" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.bookings.create({
    tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
    passengerName: "John Doe",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { bookingsCreate } from "train-travel-sdk/funcs/bookingsCreate.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsCreate(trainTravelSDK, {
    tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
    passengerName: "John Doe",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BookingInput](../../models/bookinginput.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBookingResponse](../../models/operations/createbookingresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |

## createRaw

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-booking_raw" method="post" path="/bookings" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.bookings.createRaw(bytesToStream(new TextEncoder().encode("{\"trip_id\":\"4f4e4e1-c824-4d63-b37a-d8d698862f1d\",\"passenger_name\":\"John Doe\"}")));

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { bookingsCreateRaw } from "train-travel-sdk/funcs/bookingsCreateRaw.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsCreateRaw(trainTravelSDK, bytesToStream(new TextEncoder().encode("{\"trip_id\":\"4f4e4e1-c824-4d63-b37a-d8d698862f1d\",\"passenger_name\":\"John Doe\"}")));
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsCreateRaw failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/booking.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBookingRawResponse](../../models/operations/createbookingrawresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |

## get

Returns the details of a specific booking.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-booking" method="get" path="/bookings/{bookingId}" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.bookings.get({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { bookingsGet } from "train-travel-sdk/funcs/bookingsGet.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsGet(trainTravelSDK, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBookingRequest](../../models/operations/getbookingrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBookingResponse](../../models/operations/getbookingresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |

## delete

Deletes a booking, cancelling the hold on the trip.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-booking" method="delete" path="/bookings/{bookingId}" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.bookings.delete({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { bookingsDelete } from "train-travel-sdk/funcs/bookingsDelete.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsDelete(trainTravelSDK, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBookingRequest](../../models/operations/deletebookingrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteBookingResponse](../../models/operations/deletebookingresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |