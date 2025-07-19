# BurgerOutput

A burger to be returned

## Example Usage

```typescript
import { BurgerOutput } from "mcp-burger-sdk";

let value: BurgerOutput = {
  description: "A classic cheeseburger",
  id: 1,
  name: "Cheeseburger",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `description`                 | *string*                      | :heavy_minus_sign:            | The description of the burger | A classic cheeseburger        |
| `id`                          | *number*                      | :heavy_check_mark:            | The id of the burger          | 1                             |
| `name`                        | *string*                      | :heavy_check_mark:            | The name of the burger        | Cheeseburger                  |