# CreateCollectionRequest

## Example Usage

```typescript
import { CreateCollectionRequest } from "API/models/operations";

let value: CreateCollectionRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
  createCollectionPayload: {
    getOrCreate: false,
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `tenantId`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Tenant ID                                                                                |
| `databaseName`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | Database name containing the new collection                                              |
| `createCollectionPayload`                                                                | [components.CreateCollectionPayload](../../models/components/createcollectionpayload.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |