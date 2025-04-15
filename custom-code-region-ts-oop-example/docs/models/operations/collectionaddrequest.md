# CollectionAddRequest

## Example Usage

```typescript
import { CollectionAddRequest } from "API/models/operations";

let value: CollectionAddRequest = {
  tenant: "<value>",
  databaseName: "<value>",
  collectionId: "<id>",
  addCollectionRecordsPayload: {
    ids: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `tenant`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `databaseName`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `collectionId`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `addCollectionRecordsPayload`                                                                    | [components.AddCollectionRecordsPayload](../../models/components/addcollectionrecordspayload.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |