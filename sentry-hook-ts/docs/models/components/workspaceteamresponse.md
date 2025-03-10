# WorkspaceTeamResponse

Workspace team response

## Example Usage

```typescript
import { WorkspaceTeamResponse } from "speakeasy/models/components";

let value: WorkspaceTeamResponse = {
  users: [
    {
      id: "<id>",
      email: "Caroline.Fritsch24@gmail.com",
      emailVerified: false,
      displayName: "Bernie36",
      confirmed: false,
      whitelisted: false,
      admin: false,
      createdAt: new Date("2023-04-17T10:09:07.050Z"),
      updatedAt: new Date("2025-07-07T09:18:10.249Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `users`                                                          | [components.User](../../models/components/user.md)[]             | :heavy_check_mark:                                               | N/A                                                              |
| `ssoMetadata`                                                    | [components.SSOMetadata](../../models/components/ssometadata.md) | :heavy_minus_sign:                                               | SSO metadata for a workspace                                     |