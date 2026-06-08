# CreateBookingPaymentPaymentsSource


## Supported Types

### `operations.CreateBookingPaymentSource1`

```typescript
const value: operations.CreateBookingPaymentSource1 = {
  object: "card",
  name: "J. Doe",
  number: "4242424242424242",
  cvc: "123",
  expMonth: 12,
  expYear: 2025,
  addressCountry: "gb",
  addressPostCode: "N12 9XX",
};
```

### `operations.CreateBookingPaymentSource2`

```typescript
const value: operations.CreateBookingPaymentSource2 = {
  object: "bank_account",
  name: "J. Doe",
  number: "00012345",
  sortCode: "000123",
  accountType: "company",
  bankName: "Starling Bank",
  country: "gb",
};
```

