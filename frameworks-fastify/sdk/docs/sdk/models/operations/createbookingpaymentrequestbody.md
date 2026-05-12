# CreateBookingPaymentRequestBody

## Example Usage

```typescript
import { CreateBookingPaymentRequestBody } from "openapi/sdk/models/operations";

let value: CreateBookingPaymentRequestBody = {
  amount: 962.53,
  currency: "nok",
  source: {
    accountType: "company",
    bankName: "<value>",
    country: "Finland",
    name: "<value>",
    number: "<value>",
    object: "bank_account",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `amount`                                                          | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `currency`                                                        | [operations.Currency](../../../sdk/models/operations/currency.md) | :heavy_check_mark:                                                | N/A                                                               |
| `source`                                                          | *operations.Source*                                               | :heavy_check_mark:                                                | N/A                                                               |