# UsageSnippet

## Example Usage

```typescript
import { UsageSnippet } from "speakeasy/models/components";

let value: UsageSnippet = {
  path: "/etc/mail",
  method: "<value>",
  operationId: "<id>",
  language: "<value>",
  code: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `path`                           | *string*                         | :heavy_check_mark:               | The path of the operation        |
| `method`                         | *any*                            | :heavy_check_mark:               | The HTTP method of the operation |
| `operationId`                    | *string*                         | :heavy_check_mark:               | The operation ID for the snippet |
| `language`                       | *string*                         | :heavy_check_mark:               | The language of the snippet      |
| `code`                           | *string*                         | :heavy_check_mark:               | The code snippet                 |