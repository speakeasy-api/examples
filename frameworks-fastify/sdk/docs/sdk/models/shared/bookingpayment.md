# BookingPayment

## Example Usage

```typescript
import { BookingPayment } from "openapi/sdk/models/shared";

let value: BookingPayment = {
  amount: 7712.2,
  currency: "bam",
  source: {
    addressCountry: "<value>",
    expMonth: 644691,
    expYear: 664469,
    name: "<value>",
    number: "<value>",
    object: "card",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `amount`                                                  | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `currency`                                                | [shared.Currency](../../../sdk/models/shared/currency.md) | :heavy_check_mark:                                        | N/A                                                       |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `links`                                                   | [shared.Links](../../../sdk/models/shared/links.md)       | :heavy_minus_sign:                                        | N/A                                                       |
| `source`                                                  | *shared.Source*                                           | :heavy_check_mark:                                        | N/A                                                       |
| `status`                                                  | [shared.Status](../../../sdk/models/shared/status.md)     | :heavy_minus_sign:                                        | N/A                                                       |