# TodoForm

## Example Usage

```typescript
import { TodoForm } from "@speakeasy-sdks/gtd/models/components";

let value: TodoForm = {
  title: "Buy cat food",
  description: "Finn is running low on tuna and chicken cans.",
  completed: false,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `title`                                       | *string*                                      | :heavy_check_mark:                            | N/A                                           | Buy cat food                                  |
| `description`                                 | *string*                                      | :heavy_minus_sign:                            | N/A                                           | Finn is running low on tuna and chicken cans. |
| `completed`                                   | *boolean*                                     | :heavy_minus_sign:                            | N/A                                           | false                                         |