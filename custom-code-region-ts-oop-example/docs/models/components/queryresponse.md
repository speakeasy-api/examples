# QueryResponse

## Example Usage

```typescript
import { QueryResponse } from "API/models/components";

let value: QueryResponse = {
  ids: [
    [
      "<value>",
    ],
  ],
  include: [
    "uris",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `distances`                                                | *number*[][]                                               | :heavy_minus_sign:                                         | N/A                                                        |
| `documents`                                                | *string*[][]                                               | :heavy_minus_sign:                                         | N/A                                                        |
| `embeddings`                                               | *number*[][][]                                             | :heavy_minus_sign:                                         | N/A                                                        |
| `ids`                                                      | *string*[][]                                               | :heavy_check_mark:                                         | N/A                                                        |
| `include`                                                  | [components.Include](../../models/components/include.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `metadatas`                                                | Record<string, *components.HashMap*>[][]                   | :heavy_minus_sign:                                         | N/A                                                        |
| `uris`                                                     | *string*[][]                                               | :heavy_minus_sign:                                         | N/A                                                        |