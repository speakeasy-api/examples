# CollectionUpsertRequest

## Example Usage

```typescript
import { CollectionUpsertRequest } from "API/models/operations";

let value: CollectionUpsertRequest = {
  tenant: "<value>",
  databaseName: "<value>",
  collectionId: "<id>",
  upsertCollectionRecordsPayload: {
    ids: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `tenant`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Tenant ID                                                                                              |
| `databaseName`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Database name                                                                                          |
| `collectionId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | Collection ID                                                                                          |
| `upsertCollectionRecordsPayload`                                                                       | [components.UpsertCollectionRecordsPayload](../../models/components/upsertcollectionrecordspayload.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |