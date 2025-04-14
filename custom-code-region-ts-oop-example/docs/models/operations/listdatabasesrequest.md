# ListDatabasesRequest

## Example Usage

```typescript
import { ListDatabasesRequest } from "API/models/operations";

let value: ListDatabasesRequest = {
  tenantId: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `tenantId`                      | *string*                        | :heavy_minus_sign:              | Tenant ID to list databases for |
| `limit`                         | *number*                        | :heavy_minus_sign:              | Limit for pagination            |
| `offset`                        | *number*                        | :heavy_minus_sign:              | Offset for pagination           |