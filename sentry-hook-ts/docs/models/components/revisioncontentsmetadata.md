# RevisionContentsMetadata

## Example Usage

```typescript
import { RevisionContentsMetadata } from "speakeasy/models/components";

let value: RevisionContentsMetadata = {
  type: "OPENAPI_BUNDLE",
  workspaceId: "<id>",
  namespace: "<value>",
  revisionDigest: "<value>",
  title: "<value>",
  description: "why baseboard psst till with",
  version: "<value>",
  hash: "<value>",
  tags: [
    "<value>",
  ],
  operationIds: [
    "<value>",
  ],
  numOverlayActions: 904949,
  containsCodeSamples: false,
  createdAt: new Date("2023-11-22T00:36:57.586Z"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.RevisionContentsMetadataType](../../models/components/revisioncontentsmetadatatype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The workspace ID                                                                                   |
| `namespace`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The fully qualified namespace                                                                      |
| `revisionDigest`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The digest of the parent bundle                                                                    |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The OAS title                                                                                      |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The OAS description                                                                                |
| `version`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The OAS version                                                                                    |
| `hash`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The hash of the contents                                                                           |
| `tags`                                                                                             | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | The tags contained in the OAS -- NOT the OCI tags. Will be empty if the OAS is an overlay.         |
| `operationIds`                                                                                     | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | The operation IDs contained in the OAS. Will be empty if the OAS is an overlay.                    |
| `numOverlayActions`                                                                                | *number*                                                                                           | :heavy_check_mark:                                                                                 | The number of overlay actions in the OAS. Will be 0 if the OAS is not an overlay.                  |
| `containsCodeSamples`                                                                              | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the OAS contains code samples.                                                             |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |