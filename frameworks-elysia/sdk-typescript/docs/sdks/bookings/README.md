# Bookings

## Overview

Create and manage bookings for train trips, including passenger details and optional extras.

### Available Operations

* [getBookings](#getbookings) - List existing bookings
* [createBooking](#createbooking) - Create a booking
* [getBooking](#getbooking) - Get a booking
* [deleteBooking](#deletebooking) - Delete a booking

## getBookings

Returns a list of all trip bookings by the authenticated user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-bookings" method="get" path="/bookings/" -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await sdk.bookings.getBookings({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "sdk/core.js";
import { bookingsGetBookings } from "sdk/funcs/bookingsGetBookings.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsGetBookings(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsGetBookings failed:", res.error);
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

**Promise\<[operations.GetBookingsResponseBody](../../models/operations/getbookingsresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GetBookingsResponseBody         | 401                                    | application/problem+json               |
| errors.GetBookingsBookingsResponseBody | 500                                    | application/problem+json               |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## createBooking

A booking is a temporary hold on a trip. It is not confirmed until payment is processed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-booking" method="post" path="/bookings/" -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await sdk.bookings.createBooking({
    tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
    passengerName: "John Doe",
    hasBicycle: true,
    hasDog: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "sdk/core.js";
import { bookingsCreateBooking } from "sdk/funcs/bookingsCreateBooking.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsCreateBooking(sdk, {
    tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
    passengerName: "John Doe",
    hasBicycle: true,
    hasDog: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsCreateBooking failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBookingBookingsRequestRequestBody](../../models/operations/createbookingbookingsrequestrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBookingResponseBody](../../models/operations/createbookingresponsebody.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.CreateBookingResponseBody         | 404                                      | application/problem+json                 |
| errors.CreateBookingBookingsResponseBody | 409                                      | application/problem+json                 |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## getBooking

Returns the details of a specific booking.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-booking" method="get" path="/bookings/{bookingId}" -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await sdk.bookings.getBooking({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "sdk/core.js";
import { bookingsGetBooking } from "sdk/funcs/bookingsGetBooking.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsGetBooking(sdk, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsGetBooking failed:", res.error);
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

**Promise\<[operations.GetBookingResponseBody](../../models/operations/getbookingresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GetBookingResponseBody | 404                           | application/problem+json      |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## deleteBooking

Deletes a booking, cancelling the hold on the trip.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-booking" method="delete" path="/bookings/{bookingId}" -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  await sdk.bookings.deleteBooking({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "sdk/core.js";
import { bookingsDeleteBooking } from "sdk/funcs/bookingsDeleteBooking.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsDeleteBooking(sdk, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("bookingsDeleteBooking failed:", res.error);
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

**Promise\<void\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.DeleteBookingResponseBody | 404                              | application/problem+json         |
| errors.APIError                  | 4XX, 5XX                         | \*/\*                            |