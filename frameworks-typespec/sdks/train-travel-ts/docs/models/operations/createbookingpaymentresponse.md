# CreateBookingPaymentResponse

## Example Usage

```typescript
import { CreateBookingPaymentResponse } from "train-travel-sdk/models/operations";

let value: CreateBookingPaymentResponse = {
  headers: {},
  result: {
    amount: 49.99,
    source: {
      name: "Francis Bourgeois",
      number: "4242424242424242",
      expMonth: 12,
      expYear: 2025,
      addressCountry: "<value>",
    },
    links: {
      booking:
        "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [operations.CreateBookingPaymentResponseBody](../../models/operations/createbookingpaymentresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |