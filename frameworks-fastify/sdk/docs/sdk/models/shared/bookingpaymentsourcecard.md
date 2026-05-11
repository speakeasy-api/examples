# BookingPaymentSourceCard

## Example Usage

```typescript
import { BookingPaymentSourceCard } from "openapi/sdk/models/shared";

let value: BookingPaymentSourceCard = {
  addressCountry: "<value>",
  cvc: "<value>",
  expMonth: 806182,
  expYear: 254743,
  name: "<value>",
  number: "<value>",
  object: "card",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `addressCountry`   | *string*           | :heavy_check_mark: | N/A                |
| `addressPostCode`  | *string*           | :heavy_minus_sign: | N/A                |
| `cvc`              | *string*           | :heavy_check_mark: | N/A                |
| `expMonth`         | *number*           | :heavy_check_mark: | N/A                |
| `expYear`          | *number*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `number`           | *string*           | :heavy_check_mark: | N/A                |
| `object`           | *"card"*           | :heavy_check_mark: | N/A                |