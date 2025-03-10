# Namespace

A namespace contains many revisions.

## Example Usage

```typescript
import { Namespace } from "speakeasy/models/components";

let value: Namespace = {
  id: "<id>",
  name: "<value>",
  createdAt: new Date("2023-02-06T05:59:38.595Z"),
  updatedAt: new Date("2023-01-18T02:30:06.909Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | {organization_slug}/{workspace_slug}/{namespace_name}                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | A human-readable name for the namespace.                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `public`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the namespace is publicly accessible                                        |
| `archivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `latestRevisionMetadata`                                                                      | [components.RevisionContentsMetadata](../../models/components/revisioncontentsmetadata.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `compositeSpecMetadata`                                                                       | [components.CompositeSpecMetadata](../../models/components/compositespecmetadata.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |