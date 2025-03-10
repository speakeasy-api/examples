# CreateWorkspaceTokenRequest

## Example Usage

```typescript
import { CreateWorkspaceTokenRequest } from "speakeasy/models/operations";

let value: CreateWorkspaceTokenRequest = {
  workspaceId: "<id>",
  workspaceToken: {
    id: "<id>",
    name: "<value>",
    workspaceId: "<id>",
    alg: "<value>",
    key: "<key>",
    createdAt: new Date("2024-08-22T09:15:37.633Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `workspaceId`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier of the workspace.                                    |
| `workspaceToken`                                                       | [components.WorkspaceToken](../../models/components/workspacetoken.md) | :heavy_check_mark:                                                     | N/A                                                                    |