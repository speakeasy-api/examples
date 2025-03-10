# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { WorkspaceAndOrganization } from "speakeasy/models/components";

let value: WorkspaceAndOrganization = {
  workspace: {
    createdAt: new Date("2023-03-08T00:10:14.900Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-12-31T18:37:54.059Z"),
    verified: false,
  },
  organization: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    accountType: "business",
    telemetryDisabled: false,
    createdAt: new Date("2023-08-19T13:54:10.391Z"),
    updatedAt: new Date("2023-05-22T07:16:38.400Z"),
    ssoActivated: false,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workspace`                                                        | [components.Workspace](../../models/components/workspace.md)       | :heavy_check_mark:                                                 | A speakeasy workspace                                              |
| `organization`                                                     | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | A speakeasy organization                                           |