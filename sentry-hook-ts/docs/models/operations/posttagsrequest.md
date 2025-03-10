# PostTagsRequest

## Example Usage

```typescript
import { PostTagsRequest } from "speakeasy/models/operations";

let value: PostTagsRequest = {
  namespaceName: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `namespaceName`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `addTags`                                                | [components.AddTags](../../models/components/addtags.md) | :heavy_minus_sign:                                       | A JSON representation of the tags to add                 |