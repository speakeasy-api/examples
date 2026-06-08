# CreateBookingPaymentPaymentsRequestRequestBody

## Example Usage

```typescript
import { CreateBookingPaymentPaymentsRequestRequestBody } from "sdk/models/operations";

let value: CreateBookingPaymentPaymentsRequestRequestBody = {
  amount: 49.99,
  currency: "eur",
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                           | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 49.99                                                                                                              |
| `currency`                                                                                                         | [operations.CreateBookingPaymentPaymentsCurrency](../../models/operations/createbookingpaymentpaymentscurrency.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `promoCode`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | SUMMER20                                                                                                           |
| `source`                                                                                                           | *operations.CreateBookingPaymentPaymentsSource*                                                                    | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |