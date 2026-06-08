# Payments

## Overview

Pay for bookings using a card or bank account, and view payment status and history.

### Available Operations

* [createBookingPayment](#createbookingpayment) - Pay for a booking

## createBookingPayment

A payment attempt confirms the booking and enables ticket retrieval.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-booking-payment" method="post" path="/bookings/{bookingId}/payment" -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await sdk.payments.createBookingPayment({
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    requestBody: {
      amount: 49.99,
      currency: "bgn",
      promoCode: "SUMMER20",
      source: {
        object: "card",
        name: "J. Doe",
        number: "4242424242424242",
        cvc: "123",
        expMonth: 12,
        expYear: 2025,
        addressCountry: "gb",
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
import { SDKCore } from "sdk/core.js";
import { paymentsCreateBookingPayment } from "sdk/funcs/paymentsCreateBookingPayment.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const res = await paymentsCreateBookingPayment(sdk, {
    bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    requestBody: {
      amount: 49.99,
      currency: "bgn",
      promoCode: "SUMMER20",
      source: {
        object: "card",
        name: "J. Doe",
        number: "4242424242424242",
        cvc: "123",
        expMonth: 12,
        expYear: 2025,
        addressCountry: "gb",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentsCreateBookingPayment failed:", res.error);
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

**Promise\<[operations.CreateBookingPaymentResponseBody](../../models/operations/createbookingpaymentresponsebody.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.CreateBookingPaymentResponseBody | 404                                     | application/problem+json                |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |