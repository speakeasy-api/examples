# BookingPaymentSourceCardOutput

## Example Usage

```typescript
import { BookingPaymentSourceCardOutput } from "openapi/sdk/models/shared";

let value: BookingPaymentSourceCardOutput = {
  addressCountry: "<value>",
  expMonth: 676653,
  expYear: 717154,
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
| `expMonth`         | *number*           | :heavy_check_mark: | N/A                |
| `expYear`          | *number*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `number`           | *string*           | :heavy_check_mark: | N/A                |
| `object`           | *"card"*           | :heavy_check_mark: | N/A                |