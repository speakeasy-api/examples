# GetResponse

## Example Usage

```typescript
import { GetResponse } from "API/models/components";

let value: GetResponse = {
  ids: [
    "<value>",
  ],
  include: [
    "documents",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `documents`                                                | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `embeddings`                                               | *number*[][]                                               | :heavy_minus_sign:                                         | N/A                                                        |
| `ids`                                                      | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `include`                                                  | [components.Include](../../models/components/include.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `metadatas`                                                | Record<string, *components.HashMap*>[]                     | :heavy_minus_sign:                                         | N/A                                                        |
| `uris`                                                     | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |