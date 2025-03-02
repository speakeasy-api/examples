# CoffeeType

## Example Usage

```typescript
import { CoffeeType } from "coffee-example-api-sdk/models/components";

let value: CoffeeType = {
  id: 5,
  name: "Flat White",
  description: "Espresso with steamed whole milk",
  priceMultiplier: 1.25,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `id`                         | *number*                     | :heavy_check_mark:           | N/A                          | 1                            |
| `name`                       | *string*                     | :heavy_check_mark:           | N/A                          | Latte                        |
| `description`                | *string*                     | :heavy_minus_sign:           | N/A                          | A milk-based espresso coffee |
| `priceMultiplier`            | *number*                     | :heavy_minus_sign:           | N/A                          | 1.2                          |