# GetRevisionsResponse

## Example Usage

```typescript
import { GetRevisionsResponse } from "speakeasy/models/components";

let value: GetRevisionsResponse = {
  items: [
    {
      id: "<id>",
      digest:
        "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
      namespaceName: "<value>",
      tags: [
        "<value>",
      ],
      createdAt: new Date("2025-12-23T05:51:49.489Z"),
      updatedAt: new Date("2023-10-01T08:44:41.136Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [components.Revision](../../models/components/revision.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `nextPageToken`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |