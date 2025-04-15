# CollectionCountRequest

## Example Usage

```typescript
import { CollectionCountRequest } from "API/models/operations";

let value: CollectionCountRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
  collectionId: "<id>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `tenantId`                              | *string*                                | :heavy_minus_sign:                      | Tenant ID for the collection            |
| `databaseName`                          | *string*                                | :heavy_minus_sign:                      | Database containing this collection     |
| `collectionId`                          | *string*                                | :heavy_check_mark:                      | Collection ID whose records are counted |