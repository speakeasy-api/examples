# GetDatabaseRequest

## Example Usage

```typescript
import { GetDatabaseRequest } from "API/models/operations";

let value: GetDatabaseRequest = {
  tenantId: "<id>",
  databaseName: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `tenantId`                       | *string*                         | :heavy_minus_sign:               | Tenant ID                        |
| `databaseName`                   | *string*                         | :heavy_minus_sign:               | Name of the database to retrieve |