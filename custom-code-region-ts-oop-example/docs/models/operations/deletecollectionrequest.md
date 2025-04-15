# DeleteCollectionRequest

## Example Usage

```typescript
import { DeleteCollectionRequest } from "API/models/operations";

let value: DeleteCollectionRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
  collectionId: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `tenantId`                       | *string*                         | :heavy_minus_sign:               | Tenant ID                        |
| `databaseName`                   | *string*                         | :heavy_minus_sign:               | Database name                    |
| `collectionId`                   | *string*                         | :heavy_check_mark:               | UUID of the collection to delete |