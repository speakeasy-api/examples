# CollectionDeleteRequest

## Example Usage

```typescript
import { CollectionDeleteRequest } from "API/models/operations";

let value: CollectionDeleteRequest = {
  tenant: "<value>",
  databaseName: "<value>",
  collectionId: "<id>",
  deleteCollectionRecordsPayload: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `tenant`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Tenant ID                                                                                              |
| `databaseName`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Database name                                                                                          |
| `collectionId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | Collection ID                                                                                          |
| `deleteCollectionRecordsPayload`                                                                       | [components.DeleteCollectionRecordsPayload](../../models/components/deletecollectionrecordspayload.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |