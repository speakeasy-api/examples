# CountCollectionsRequest

## Example Usage

```typescript
import { CountCollectionsRequest } from "API/models/operations";

let value: CountCollectionsRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `tenantId`                              | *string*                                | :heavy_minus_sign:                      | Tenant ID                               |
| `databaseName`                          | *string*                                | :heavy_minus_sign:                      | Database name to count collections from |