# ValidationError

## Example Usage

```typescript
import { ValidationError } from "coffee-example-api-sdk/models/components";

let value: ValidationError = {
  loc: [
    "body",
    "price",
  ],
  msg: "Price must be greater than 0",
  type: "value_error.number.not_gt",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `loc`              | *components.Loc*[] | :heavy_check_mark: | N/A                |
| `msg`              | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |