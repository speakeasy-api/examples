# OrderOutput

An order to be returned

## Example Usage

```typescript
import { OrderOutput } from "mcp-burger-sdk";

let value: OrderOutput = {
  burgerIds: [
    1,
    2,
  ],
  id: 1,
  note: "No onions",
  status: "READY",
  table: 1,
  time: new Date("2021-01-01T12:00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `burgerIds`                                                                                   | *number*[]                                                                                    | :heavy_check_mark:                                                                            | List of burger ids in the order                                                               | [<br/>1,<br/>2<br/>]                                                                          |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The id of the order                                                                           | 1                                                                                             |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Note for the order                                                                            | No onions                                                                                     |
| `status`                                                                                      | [models.OrderStatus](../models/orderstatus.md)                                                | :heavy_check_mark:                                                                            | Status of the order                                                                           |                                                                                               |
| `table`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Table number for the order                                                                    | 1                                                                                             |
| `time`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time of the order                                                                             | 2021-01-01T12:00:00                                                                           |