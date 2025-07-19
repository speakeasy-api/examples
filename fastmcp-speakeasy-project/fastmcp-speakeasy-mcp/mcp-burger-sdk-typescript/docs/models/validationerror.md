# ValidationError

## Example Usage

```typescript
import { ValidationError } from "mcp-burger-sdk";

let value: ValidationError = {
  loc: [
    929957,
  ],
  msg: "<value>",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `loc`              | *models.Loc*[]     | :heavy_check_mark: | N/A                |
| `msg`              | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |