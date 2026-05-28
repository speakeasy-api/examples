# BookingPayment

## Example Usage

```typescript
import { BookingPayment } from "sdk/models/components";

let value: BookingPayment = {
  id: "2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
  amount: 49.99,
  currency: "eur",
  status: "succeeded",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | Payment identifier.                                    | 2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a                   |
| `amount`                                               | *number*                                               | :heavy_check_mark:                                     | Payment amount.                                        | 49.99                                                  |
| `currency`                                             | *string*                                               | :heavy_check_mark:                                     | Lowercase ISO currency code.                           | eur                                                    |
| `status`                                               | [components.Status](../../models/components/status.md) | :heavy_check_mark:                                     | Payment status.                                        | succeeded                                              |