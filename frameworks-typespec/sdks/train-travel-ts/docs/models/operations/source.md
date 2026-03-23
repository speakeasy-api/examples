# Source

The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.


## Supported Types

### `operations.Card`

```typescript
const value: operations.Card = {
  name: "Francis Bourgeois",
  number: "4242424242424242",
  expMonth: 12,
  expYear: 2025,
  addressCountry: "<value>",
};
```

### `operations.BankAccount`

```typescript
const value: operations.BankAccount = {
  name: "<value>",
  number: "<value>",
  accountType: "company",
  bankName: "Starling Bank",
  country: "Benin",
};
```

