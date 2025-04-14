# CreateCollectionPayload

## Example Usage

```typescript
import { CreateCollectionPayload } from "API/models/components";

let value: CreateCollectionPayload = {
  getOrCreate: false,
  name: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `configuration`                      | *any*                                | :heavy_minus_sign:                   | N/A                                  |
| `getOrCreate`                        | *boolean*                            | :heavy_check_mark:                   | N/A                                  |
| `metadata`                           | Record<string, *components.HashMap*> | :heavy_minus_sign:                   | N/A                                  |
| `name`                               | *string*                             | :heavy_check_mark:                   | N/A                                  |