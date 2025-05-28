# CoffeeOrderUpdate

Model for updating an existing coffee order (all fields optional)

## Example Usage

```typescript
import { CoffeeOrderUpdate } from "speakeasy-coffee-client/models/components";

let value: CoffeeOrderUpdate = {
  coffeeType: "Cappuccino",
  extras: [
    "Cinnamon",
    "Whipped cream",
  ],
  price: 5.75,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `customerName`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | Updated customer name                                                                | Alice                                                                                |
| `coffeeType`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Updated coffee type (must match an existing coffee type)                             | Cappuccino                                                                           |
| `size`                                                                               | [components.CoffeeOrderUpdateSize](../../models/components/coffeeorderupdatesize.md) | :heavy_minus_sign:                                                                   | Updated size of the coffee order                                                     | Large                                                                                |
| `extras`                                                                             | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Updated optional additions to the coffee order                                       | [<br/>"Whipped cream"<br/>]                                                          |
| `price`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | Updated total price of the order                                                     | 5                                                                                    |