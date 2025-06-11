# TodoForm

## Example Usage

```typescript
import { TodoForm } from "@acme/sdk/models/components";
import { RFCDate } from "@acme/sdk/types";

let value: TodoForm = {
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