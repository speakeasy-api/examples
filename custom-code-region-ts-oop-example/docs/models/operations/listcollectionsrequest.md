# ListCollectionsRequest

## Example Usage

```typescript
import { ListCollectionsRequest } from "API/models/operations";

let value: ListCollectionsRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `tenantId`                             | *string*                               | :heavy_minus_sign:                     | Tenant ID                              |
| `databaseName`                         | *string*                               | :heavy_minus_sign:                     | Database name to list collections from |
| `limit`                                | *number*                               | :heavy_minus_sign:                     | Limit for pagination                   |
| `offset`                               | *number*                               | :heavy_minus_sign:                     | Offset for pagination                  |