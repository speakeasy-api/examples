# CoffeeOrder

Represents a coffee order in the system

## Example Usage

```typescript
import { CoffeeOrder } from "coffee-client/models/components";

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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *number*                                                                 | :heavy_check_mark:                                                       | Unique identifier for the order                                          | 1                                                                        |
| `customerName`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | Name of the customer placing the order                                   | Alice                                                                    |
| `coffeeType`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Type of coffee ordered (must match an existing coffee type)              | Latte                                                                    |
| `size`                                                                   | [components.CoffeeOrderSize](../../models/components/coffeeordersize.md) | :heavy_check_mark:                                                       | Size of the coffee order                                                 | Medium                                                                   |
| `extras`                                                                 | *string*[]                                                               | :heavy_minus_sign:                                                       | Optional additions to the coffee order                                   | [<br/>"Extra shot",<br/>"Soy milk"<br/>]                                 |
| `price`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | Total price of the order                                                 | 4.5                                                                      |