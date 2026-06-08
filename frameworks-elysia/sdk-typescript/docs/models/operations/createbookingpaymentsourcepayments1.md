# CreateBookingPaymentSourcePayments1

## Example Usage

```typescript
import { CreateBookingPaymentSourcePayments1 } from "sdk/models/operations";

let value: CreateBookingPaymentSourcePayments1 = {
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

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `object`           | *"card"*           | :heavy_check_mark: | N/A                |                    |
| `name`             | *string*           | :heavy_check_mark: | N/A                | J. Doe             |
| `number`           | *string*           | :heavy_check_mark: | N/A                | 4242424242424242   |
| `cvc`              | *string*           | :heavy_check_mark: | N/A                | 123                |
| `expMonth`         | *number*           | :heavy_check_mark: | N/A                | 12                 |
| `expYear`          | *number*           | :heavy_check_mark: | N/A                | 2025               |
| `addressCountry`   | *string*           | :heavy_check_mark: | N/A                | gb                 |
| `addressPostCode`  | *string*           | :heavy_minus_sign: | N/A                | N12 9XX            |