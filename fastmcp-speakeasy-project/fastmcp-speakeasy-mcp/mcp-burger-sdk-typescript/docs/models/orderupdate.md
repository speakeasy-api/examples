# OrderUpdate

Fields to update an order

## Example Usage

```typescript
import { OrderUpdate } from "mcp-burger-sdk";

let value: OrderUpdate = {
  burgerIds: [
    1,
    2,
  ],
  note: "No onions",
  table: 1,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `burgerIds`                                    | *number*[]                                     | :heavy_minus_sign:                             | List of burger ids in the order                | [<br/>1,<br/>2<br/>]                           |
| `note`                                         | *string*                                       | :heavy_minus_sign:                             | Note for the order                             | No onions                                      |
| `status`                                       | [models.OrderStatus](../models/orderstatus.md) | :heavy_minus_sign:                             | Status of the order                            |                                                |
| `table`                                        | *number*                                       | :heavy_minus_sign:                             | Table number for the order                     | 1                                              |