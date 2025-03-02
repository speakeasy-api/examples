# CoffeeOrder

## Example Usage

```typescript
import { CoffeeOrder } from "coffee-example-api-sdk/models/components";

let value: CoffeeOrder = {
  id: 6,
  customerName: "Grace",
  coffeeType: "Cold Brew",
  size: "Medium",
  extras: [
    "Vanilla syrup",
  ],
  price: 5.5,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `id`                         | *number*                     | :heavy_check_mark:           | N/A                          | 1                            |
| `customerName`               | *string*                     | :heavy_check_mark:           | N/A                          | Alice                        |
| `coffeeType`                 | *string*                     | :heavy_check_mark:           | N/A                          | Latte                        |
| `size`                       | *string*                     | :heavy_check_mark:           | N/A                          | Medium                       |
| `extras`                     | *string*[]                   | :heavy_minus_sign:           | N/A                          | [<br/>"Extra shot",<br/>"Soy milk"<br/>] |
| `price`                      | *number*                     | :heavy_check_mark:           | N/A                          | 4.5                          |