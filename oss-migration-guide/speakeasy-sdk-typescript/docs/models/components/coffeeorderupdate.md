# CoffeeOrderUpdate

## Example Usage

```typescript
import { CoffeeOrderUpdate } from "coffee-example-api-sdk/models/components";

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

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `customerName`      | *string*            | :heavy_minus_sign:  | N/A                 | Alice               |
| `coffeeType`        | *string*            | :heavy_minus_sign:  | N/A                 | Cappuccino          |
| `size`              | *string*            | :heavy_minus_sign:  | N/A                 | Large               |
| `extras`            | *string*[]          | :heavy_minus_sign:  | N/A                 | [<br/>"Whipped cream"<br/>] |
| `price`             | *number*            | :heavy_minus_sign:  | N/A                 | 5                   |