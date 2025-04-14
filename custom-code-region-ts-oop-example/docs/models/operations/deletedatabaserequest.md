# DeleteDatabaseRequest

## Example Usage

```typescript
import { DeleteDatabaseRequest } from "API/models/operations";

let value: DeleteDatabaseRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `tenantId`                     | *string*                       | :heavy_minus_sign:             | Tenant ID                      |
| `databaseName`                 | *string*                       | :heavy_minus_sign:             | Name of the database to delete |