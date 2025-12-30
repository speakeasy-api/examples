# Bookings.Payments

## Overview

### Available Operations

* [create](#create) - Pay for a Booking

## create

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-booking-payment" method="post" path="/bookings/{bookingId}/payment" -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.bookings.payments.create({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    body: {
      amount: 49.99,
      currency: "gbp",
      source: {
        object: "card",
        name: "J. Doe",
        number: "4242424242424242",
        cvc: "123",
        expMonth: 12,
        expYear: 2025,
        addressLine1: "123 Fake Street",
        addressLine2: "4th Floor",
        addressCity: "London",
        addressCountry: "gb",
        addressPostCode: "N12 9XX",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TrainTravelSDKCore } from "train-travel-sdk/core.js";
import { bookingsPaymentsCreate } from "train-travel-sdk/funcs/bookingsPaymentsCreate.js";

// Use `TrainTravelSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const trainTravelSDK = new TrainTravelSDKCore({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await bookingsPaymentsCreate(trainTravelSDK, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    body: {
      amount: 49.99,
      currency: "gbp",
      source: {
        object: "card",
        name: "J. Doe",
        number: "4242424242424242",
        cvc: "123",
        expMonth: 12,
        expYear: 2025,
        addressLine1: "123 Fake Street",
        addressLine2: "4th Floor",
        addressCity: "London",
        addressCountry: "gb",
        addressPostCode: "N12 9XX",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bookingsPaymentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBookingPaymentRequest](../../models/operations/createbookingpaymentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBookingPaymentResponse](../../models/operations/createbookingpaymentresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.TrainTravelSDKDefaultError | 4XX, 5XX                          | \*/\*                             |