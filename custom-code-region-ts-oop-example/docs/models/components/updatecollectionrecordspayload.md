# UpdateCollectionRecordsPayload

## Example Usage

```typescript
import { UpdateCollectionRecordsPayload } from "API/models/components";

let value: UpdateCollectionRecordsPayload = {
  ids: [
    "<value>",
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `documents`                            | *string*[]                             | :heavy_minus_sign:                     | N/A                                    |
| `embeddings`                           | *number*[][]                           | :heavy_minus_sign:                     | N/A                                    |
| `ids`                                  | *string*[]                             | :heavy_check_mark:                     | N/A                                    |
| `metadatas`                            | Record<string, *components.HashMap*>[] | :heavy_minus_sign:                     | N/A                                    |
| `uris`                                 | *string*[]                             | :heavy_minus_sign:                     | N/A                                    |