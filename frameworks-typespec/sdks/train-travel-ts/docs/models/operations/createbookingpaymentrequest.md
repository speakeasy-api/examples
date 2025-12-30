# CreateBookingPaymentRequest

## Example Usage

```typescript
import { CreateBookingPaymentRequest } from "train-travel-sdk/models/operations";

let value: CreateBookingPaymentRequest = {
  bookingId: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  body: {
    amount: 49.99,
    source: {
      name: "<value>",
      number: "<value>",
      accountType: "individual",
      bankName: "Starling Bank",
      country: "Puerto Rico",
    },
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `bookingId`                                             | *string*                                                | :heavy_check_mark:                                      | The ID of the booking to pay for.                       | 1725ff48-ab45-4bb5-9d02-88745177dedb                    |
| `body`                                                  | [models.BookingPayment](../../models/bookingpayment.md) | :heavy_check_mark:                                      | Payment details                                         |                                                         |