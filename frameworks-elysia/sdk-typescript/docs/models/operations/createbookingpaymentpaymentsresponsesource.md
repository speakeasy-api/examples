# CreateBookingPaymentPaymentsResponseSource


## Supported Types

### `operations.CreateBookingPaymentSourcePayments1`

```typescript
const value: operations.CreateBookingPaymentSourcePayments1 = {
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

### `operations.CreateBookingPaymentSourcePayments2`

```typescript
const value: operations.CreateBookingPaymentSourcePayments2 = {
  object: "bank_account",
  name: "J. Doe",
  number: "00012345",
  sortCode: "000123",
  accountType: "individual",
  bankName: "Starling Bank",
  country: "gb",
};
```

