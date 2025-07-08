# OrderCreate

Fields to create an order

## Example Usage

```typescript
import { OrderCreate } from "mcp-burger-sdk";

let value: OrderCreate = {
  burgerIds: [
    1,
    2,
  ],
  note: "No onions",
  table: 1,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `burgerIds`                     | *number*[]                      | :heavy_check_mark:              | List of burger ids in the order | [<br/>1,<br/>2<br/>]            |
| `note`                          | *string*                        | :heavy_minus_sign:              | Note for the order              | No onions                       |
| `table`                         | *number*                        | :heavy_check_mark:              | Table number for the order      | 1                               |