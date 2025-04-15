# QueryRequestPayload

## Example Usage

```typescript
import { QueryRequestPayload } from "API/models/components";

let value: QueryRequestPayload = {
  queryEmbeddings: [
    [
      2487.53,
    ],
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `where`                                                    | *any*                                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `whereDocument`                                            | *any*                                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `ids`                                                      | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `include`                                                  | [components.Include](../../models/components/include.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `nResults`                                                 | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `queryEmbeddings`                                          | *number*[][]                                               | :heavy_check_mark:                                         | N/A                                                        |