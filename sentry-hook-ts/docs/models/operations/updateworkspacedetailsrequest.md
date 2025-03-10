# UpdateWorkspaceDetailsRequest

## Example Usage

```typescript
import { UpdateWorkspaceDetailsRequest } from "speakeasy/models/operations";

let value: UpdateWorkspaceDetailsRequest = {
  workspaceId: "<id>",
  workspace: {
    createdAt: new Date("2025-10-27T11:16:32.408Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2025-04-02T20:07:08.138Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceId`                                                | *string*                                                     | :heavy_minus_sign:                                           | Unique identifier of the workspace.                          |
| `workspace`                                                  | [components.Workspace](../../models/components/workspace.md) | :heavy_check_mark:                                           | The workspace details to update.                             |