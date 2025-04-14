# CollectionQueryRequest

## Example Usage

```typescript
import { CollectionQueryRequest } from "API/models/operations";

let value: CollectionQueryRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
  collectionId: "<id>",
  queryRequestPayload: {
    queryEmbeddings: [
      [
        5761.57,
      ],
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `tenantId`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | Tenant ID                                                                        |
| `databaseName`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | Database name containing the collection                                          |
| `collectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | Collection ID to query                                                           |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Limit for pagination                                                             |
| `offset`                                                                         | *number*                                                                         | :heavy_minus_sign:                                                               | Offset for pagination                                                            |
| `queryRequestPayload`                                                            | [components.QueryRequestPayload](../../models/components/queryrequestpayload.md) | :heavy_check_mark:                                                               | N/A                                                                              |