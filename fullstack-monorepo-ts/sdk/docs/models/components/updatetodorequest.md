# UpdateTodoRequest

## Example Usage

```typescript
import { UpdateTodoRequest } from "@acme/todo-sdk/models/components";
import { RFCDate } from "@acme/todo-sdk/types";

let value: UpdateTodoRequest = {
  title: "Buy groceries",
  dueDate: new RFCDate("2021-01-01"),
  completed: true,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `title`                           | *string*                          | :heavy_minus_sign:                | N/A                               | Buy groceries                     |
| `dueDate`                         | [RFCDate](../../types/rfcdate.md) | :heavy_minus_sign:                | N/A                               | 2021-01-01                        |
| `completed`                       | *boolean*                         | :heavy_minus_sign:                | N/A                               | true                              |