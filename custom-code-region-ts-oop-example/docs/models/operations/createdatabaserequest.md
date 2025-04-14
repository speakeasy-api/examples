# CreateDatabaseRequest

## Example Usage

```typescript
import { CreateDatabaseRequest } from "API/models/operations";

let value: CreateDatabaseRequest = {
  tenantId: "<id>",
  createDatabasePayload: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `tenantId`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | Tenant ID to associate with the new database                                         |
| `createDatabasePayload`                                                              | [components.CreateDatabasePayload](../../models/components/createdatabasepayload.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |