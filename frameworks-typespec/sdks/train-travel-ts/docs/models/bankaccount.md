# BankAccount

A bank account to take payment from. Must be able to make payments in the currency specified in the payment.

## Example Usage

```typescript
import { BankAccount } from "train-travel-sdk/models";

let value: BankAccount = {
  name: "<value>",
  number: "<value>",
  accountType: "company",
  bankName: "Starling Bank",
  country: "Benin",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `object`                                                                                 | *"bank_account"*                                                                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `number`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | The account number for the bank account, in string form. Must be a current account.      |                                                                                          |
| `sortCode`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | The sort code for the bank account, in string form. Must be a six-digit number.          |                                                                                          |
| `accountType`                                                                            | [models.AccountType](../models/accounttype.md)                                           | :heavy_check_mark:                                                                       | The type of entity that holds the account. This can be either `individual` or `company`. |                                                                                          |
| `bankName`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The name of the bank associated with the routing number.                                 | Starling Bank                                                                            |
| `country`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Two-letter country code (ISO 3166-1 alpha-2).                                            |                                                                                          |