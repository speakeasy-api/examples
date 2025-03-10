# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "speakeasy/models/operations";

let value: UpdateWorkspaceSettingsRequest = {
  workspaceId: "<id>",
  workspaceSettings: {
    workspaceId: "<id>",
    webhookUrl: "https://wide-eyed-yarmulke.info",
    createdAt: new Date("2023-03-19T16:09:31.123Z"),
    updatedAt: new Date("2023-11-17T21:39:15.131Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `workspaceId`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier of the workspace.                                          |
| `workspaceSettings`                                                          | [components.WorkspaceSettings](../../models/components/workspacesettings.md) | :heavy_check_mark:                                                           | The workspace settings to update.                                            |