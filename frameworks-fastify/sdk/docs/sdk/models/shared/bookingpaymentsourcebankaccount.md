# BookingPaymentSourceBankAccount

## Example Usage

```typescript
import { BookingPaymentSourceBankAccount } from "openapi/sdk/models/shared";

let value: BookingPaymentSourceBankAccount = {
  accountType: "company",
  bankName: "<value>",
  country: "Hungary",
  name: "<value>",
  number: "<value>",
  object: "bank_account",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `accountType`                                                   | [shared.AccountType](../../../sdk/models/shared/accounttype.md) | :heavy_check_mark:                                              | N/A                                                             |
| `bankName`                                                      | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `country`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `number`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `object`                                                        | *"bank_account"*                                                | :heavy_check_mark:                                              | N/A                                                             |
| `sortCode`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |