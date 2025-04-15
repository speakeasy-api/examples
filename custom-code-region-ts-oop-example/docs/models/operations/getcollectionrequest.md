# GetCollectionRequest

## Example Usage

```typescript
import { GetCollectionRequest } from "API/models/operations";

let value: GetCollectionRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
  collectionId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `tenantId`             | *string*               | :heavy_minus_sign:     | Tenant ID              |
| `databaseName`         | *string*               | :heavy_minus_sign:     | Database name          |
| `collectionId`         | *string*               | :heavy_check_mark:     | UUID of the collection |