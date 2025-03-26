# CreateTodoRequest

## Example Usage

```typescript
import { CreateTodoRequest } from "@acme/todo-sdk/models/components";
import { RFCDate } from "@acme/todo-sdk/types";

let value: CreateTodoRequest = {
  title: "Buy groceries",
  dueDate: new RFCDate("2021-01-01"),
  completed: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `title`                           | *string*                          | :heavy_check_mark:                | N/A                               | Buy groceries                     |
| `dueDate`                         | [RFCDate](../../types/rfcdate.md) | :heavy_minus_sign:                | N/A                               | 2021-01-01                        |
| `completed`                       | *boolean*                         | :heavy_minus_sign:                | N/A                               | false                             |