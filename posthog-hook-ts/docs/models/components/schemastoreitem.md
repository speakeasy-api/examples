# SchemaStoreItem

## Example Usage

```typescript
import { SchemaStoreItem } from "speakeasy/models/components";

let value: SchemaStoreItem = {
  id: "<id>",
  spec: "<value>",
  createdAt: new Date("2024-01-26T22:49:04.962Z"),
  format: "json",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spec`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `format`                                                                                      | [components.Format](../../models/components/format.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |