# UpdateCollectionRequest

## Example Usage

```typescript
import { UpdateCollectionRequest } from "API/models/operations";

let value: UpdateCollectionRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
  collectionId: "<id>",
  updateCollectionPayload: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `tenantId`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Tenant ID                                                                                |
| `databaseName`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | Database name                                                                            |
| `collectionId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID of the collection to update                                                         |
| `updateCollectionPayload`                                                                | [components.UpdateCollectionPayload](../../models/components/updatecollectionpayload.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |