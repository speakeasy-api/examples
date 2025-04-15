# CollectionUpdateRequest

## Example Usage

```typescript
import { CollectionUpdateRequest } from "API/models/operations";

let value: CollectionUpdateRequest = {
  tenant: "<value>",
  databaseName: "<value>",
  collectionId: "<id>",
  updateCollectionRecordsPayload: {
    ids: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `tenant`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `databaseName`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `collectionId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updateCollectionRecordsPayload`                                                                       | [components.UpdateCollectionRecordsPayload](../../models/components/updatecollectionrecordspayload.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |