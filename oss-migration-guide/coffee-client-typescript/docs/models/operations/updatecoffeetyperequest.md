# UpdateCoffeeTypeRequest

## Example Usage

```typescript
import { UpdateCoffeeTypeRequest } from "coffee-client/models/operations";

let value: UpdateCoffeeTypeRequest = {
  typeId: 383441,
  coffeeType: {
    name: "Flat White",
    description: "Espresso with steamed whole milk",
    id: 5,
    priceMultiplier: 1.25,
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `typeId`                                                                                                | *number*                                                                                                | :heavy_check_mark:                                                                                      | The ID of the coffee type to operate on                                                                 |                                                                                                         |
| `coffeeType`                                                                                            | [components.CoffeeType](../../models/components/coffeetype.md)                                          | :heavy_check_mark:                                                                                      | N/A                                                                                                     | {<br/>"name": "Cold Brew",<br/>"description": "Smooth, cold-steeped coffee",<br/>"id": 4,<br/>"price_multiplier": 1.4<br/>} |