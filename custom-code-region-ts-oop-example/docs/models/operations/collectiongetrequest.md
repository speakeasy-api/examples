# CollectionGetRequest

## Example Usage

```typescript
import { CollectionGetRequest } from "API/models/operations";

let value: CollectionGetRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
  collectionId: "<id>",
  getRequestPayload: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `tenantId`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Tenant ID                                                                    |
| `databaseName`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Database name for the collection                                             |
| `collectionId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | Collection ID to fetch records from                                          |
| `getRequestPayload`                                                          | [components.GetRequestPayload](../../models/components/getrequestpayload.md) | :heavy_check_mark:                                                           | N/A                                                                          |