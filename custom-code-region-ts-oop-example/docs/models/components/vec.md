# Vec

## Example Usage

```typescript
import { Vec } from "API/models/components";

let value: Vec = {
  collectionId: "986a7ef6-c89e-4110-9dcd-fc7c1a2f864c",
  database: "<value>",
  logPosition: 568434,
  name: "<value>",
  tenant: "<value>",
  version: 0,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `collectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | CollectionUuid is a wrapper around Uuid to provide a type for the collection id. |
| `configurationJson`                                                              | *any*                                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |
| `database`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `dimension`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `logPosition`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `metadata`                                                                       | Record<string, *components.HashMap*>                                             | :heavy_minus_sign:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `tenant`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |