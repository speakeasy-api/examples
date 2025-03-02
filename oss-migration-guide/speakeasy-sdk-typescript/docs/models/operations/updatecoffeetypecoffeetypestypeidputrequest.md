# UpdateCoffeeTypeCoffeeTypesTypeIdPutRequest

## Example Usage

```typescript
import { UpdateCoffeeTypeCoffeeTypesTypeIdPutRequest } from "coffee-example-api-sdk/models/operations";

let value: UpdateCoffeeTypeCoffeeTypesTypeIdPutRequest = {
  typeId: 383441,
  coffeeType: {
    id: 5,
    name: "Flat White",
    description: "Espresso with steamed whole milk",
    priceMultiplier: 1.25,
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `typeId`                                                                                                | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `coffeeType`                                                                                            | [components.CoffeeType](../../models/components/coffeetype.md)                                          | :heavy_check_mark:                                                                                      | N/A                                                                                                     | {<br/>"id": 4,<br/>"name": "Cold Brew",<br/>"description": "Smooth, cold-steeped coffee",<br/>"price_multiplier": 1.4<br/>} |