# UpdateTodoRequest

## Example Usage

```typescript
import { UpdateTodoRequest } from "@acme/todo-sdk/models/operations";
import { RFCDate } from "@acme/todo-sdk/types";

let value: UpdateTodoRequest = {
  id: "<id>",
  updateTodoRequest: {
    title: "Buy groceries",
    dueDate: new RFCDate("2021-01-01"),
    completed: true,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updateTodoRequest`                                                          | [components.UpdateTodoRequest](../../models/components/updatetodorequest.md) | :heavy_minus_sign:                                                           | N/A                                                                          |