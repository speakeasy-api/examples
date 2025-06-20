# ErrorT

## Example Usage

```typescript
import { ErrorT } from "sdk";

let value: ErrorT = {
  issues: [
    {
      code: "invalid_type",
      path: [
        "age",
      ],
      message: "Expected number, received string",
    },
  ],
  name: "ZodError",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `issues`                             | [models.Issue](../models/issue.md)[] | :heavy_check_mark:                   | N/A                                  |
| `name`                               | *string*                             | :heavy_check_mark:                   | N/A                                  |