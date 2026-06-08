# CreateBookingPaymentResponseBody

Payment successful

## Example Usage

```typescript
import { CreateBookingPaymentResponseBody } from "sdk/models/operations";

let value: CreateBookingPaymentResponseBody = {
  id: "2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
  amount: 49.99,
  currency: "gbp",
  source: {
    object: "card",
    name: "J. Doe",
    number: "4242424242424242",
    cvc: "123",
    expMonth: 12,
    expYear: 2025,
    addressCountry: "gb",
  },
  status: "failed",
  links: {
    booking:
      "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a                                                         |
| `amount`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 49.99                                                                                        |
| `currency`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | gbp                                                                                          |
| `source`                                                                                     | *operations.CreateBookingPaymentPaymentsResponseSource*                                      | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `status`                                                                                     | [operations.Status](../../models/operations/status.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `links`                                                                                      | [operations.CreateBookingPaymentLinks](../../models/operations/createbookingpaymentlinks.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |