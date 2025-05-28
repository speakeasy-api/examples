# CoffeeType

Represents a type of coffee available in the system

## Example Usage

```typescript
import { CoffeeType } from "speakeasy-coffee-client/models/components";

let value: CoffeeType = {
  name: "Flat White",
  description: "Espresso with steamed whole milk",
  id: 5,
  priceMultiplier: 1.25,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *string*                                | :heavy_check_mark:                      | Name of the coffee type                 | Latte                                   |
| `description`                           | *string*                                | :heavy_minus_sign:                      | Detailed description of the coffee type | A milk-based espresso coffee            |
| `id`                                    | *number*                                | :heavy_check_mark:                      | Unique identifier for the coffee type   | 1                                       |
| `priceMultiplier`                       | *number*                                | :heavy_minus_sign:                      | Price multiplier for this coffee type   | 1.2                                     |