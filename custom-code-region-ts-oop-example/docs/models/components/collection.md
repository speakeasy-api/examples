# Collection

## Example Usage

```typescript
import { Collection } from "API/models/components";

let value: Collection = {
  collectionId: "d1f7f9b0-4141-4561-bb94-819e5a2b4290",
  database: "<value>",
  logPosition: 4695,
  name: "<value>",
  tenant: "<value>",
  version: 7,
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