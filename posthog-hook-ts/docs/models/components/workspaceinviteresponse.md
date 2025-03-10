# WorkspaceInviteResponse

A response for workspace user invite

## Example Usage

```typescript
import { WorkspaceInviteResponse } from "speakeasy/models/components";

let value: WorkspaceInviteResponse = {
  relationship: {
    workspaceId: "<id>",
    userId: "<id>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `relationship`                                                     | [components.Relationship](../../models/components/relationship.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `inviteLink`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |