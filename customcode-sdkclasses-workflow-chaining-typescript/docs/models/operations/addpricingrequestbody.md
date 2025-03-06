# AddPricingRequestBody

Pricing details for the product.

## Example Usage

```typescript
import { AddPricingRequestBody } from "store/models/operations";

let value: AddPricingRequestBody = {
  amount: 5488.14,
  currency: "Russian Ruble",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `amount`                                              | *number*                                              | :heavy_check_mark:                                    | Price amount in smallest currency unit (e.g., cents). |
| `currency`                                            | *string*                                              | :heavy_check_mark:                                    | Currency code (e.g., USD).                            |