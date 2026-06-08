# CreateBookingPaymentRequest

## Example Usage

```typescript
import { CreateBookingPaymentRequest } from "sdk/models/operations";

let value: CreateBookingPaymentRequest = {
  bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  requestBody: {
    amount: 49.99,
    currency: "gbp",
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `bookingId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    | 1725ff48-ab45-4bb5-9d02-88745177dedb                                                                                                   |
| `requestBody`                                                                                                                          | [operations.CreateBookingPaymentPaymentsRequestRequestBody](../../models/operations/createbookingpaymentpaymentsrequestrequestbody.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |