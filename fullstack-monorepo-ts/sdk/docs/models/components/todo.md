# Todo

## Example Usage

```typescript
import { Todo } from "@acme/todo-sdk/models/components";
import { RFCDate } from "@acme/todo-sdk/types";

let value: Todo = {
  id: "123",
  title: "Buy groceries",
  dueDate: new RFCDate("2021-01-01"),
  completed: false,
  createdAt: new Date("2021-01-01T00:00:00Z"),
  updatedAt: new Date("2021-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 123                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Buy groceries                                                                                 |
| `dueDate`                                                                                     | [RFCDate](../../types/rfcdate.md)                                                             | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-01-01                                                                                    |
| `completed`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | false                                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T00:00:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T00:00:00Z                                                                          |