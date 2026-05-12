# Payments

## Overview

Pay for bookings and view payment status.

### Available Operations

* [createBookingPayment](#createbookingpayment)

## createBookingPayment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-booking-payment" method="post" path="/bookings/{bookingId}/payment" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  oAuth2: "<YOUR_O_AUTH2_HERE>",
});

async function run() {
  const result = await sdk.payments.createBookingPayment({
    requestBody: {
      amount: 1864.09,
      currency: "bam",
      source: {
        addressCountry: "<value>",
        cvc: "<value>",
        expMonth: 990505,
        expYear: 163532,
        name: "<value>",
        number: "<value>",
        object: "card",
      },
    },
    bookingId: "1d522bb2-5e80-46f4-b946-ac8b8da488f8",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { paymentsCreateBookingPayment } from "openapi/funcs/paymentsCreateBookingPayment.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  oAuth2: "<YOUR_O_AUTH2_HERE>",
});

async function run() {
  const res = await paymentsCreateBookingPayment(sdk, {
    requestBody: {
      amount: 1864.09,
      currency: "bam",
      source: {
        addressCountry: "<value>",
        cvc: "<value>",
        expMonth: 990505,
        expYear: 163532,
        name: "<value>",
        number: "<value>",
        object: "card",
      },
    },
    bookingId: "1d522bb2-5e80-46f4-b946-ac8b8da488f8",
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
| `request`                                                                                                                                                                      | [operations.CreateBookingPaymentRequest](../../sdk/models/operations/createbookingpaymentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.BookingPayment](../../sdk/models/shared/bookingpayment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |