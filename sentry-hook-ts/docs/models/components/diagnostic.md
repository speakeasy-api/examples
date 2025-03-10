# Diagnostic

## Example Usage

```typescript
import { Diagnostic } from "speakeasy/models/components";

let value: Diagnostic = {
  message: "<value>",
  path: [
    "/boot/defaults",
  ],
  type: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `message`                             | *string*                              | :heavy_check_mark:                    | Message describing the issue          |
| `path`                                | *string*[]                            | :heavy_check_mark:                    | Schema path to the issue              |
| `type`                                | *string*                              | :heavy_check_mark:                    | Issue type                            |
| `helpMessage`                         | *string*                              | :heavy_minus_sign:                    | Help message for how to fix the issue |