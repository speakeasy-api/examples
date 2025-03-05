# ValidationError

Detailed information about a validation error

## Example Usage

```typescript
import { ValidationError } from "speakeasy-coffee-client/models/components";

let value: ValidationError = {
  type: "value_error.number.not_gt",
  loc: [
    "body",
    "price",
  ],
  msg: "Price must be greater than 0",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `type`                               | *string*                             | :heavy_check_mark:                   | Type of error                        |
| `loc`                                | *components.Loc*[]                   | :heavy_check_mark:                   | Location of the error in the request |
| `msg`                                | *string*                             | :heavy_check_mark:                   | Error message                        |