# DeleteWorkspaceTokenRequest

## Example Usage

```typescript
import { DeleteWorkspaceTokenRequest } from "speakeasy/models/operations";

let value: DeleteWorkspaceTokenRequest = {
  workspaceId: "<id>",
  tokenID: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `workspaceId`                       | *string*                            | :heavy_minus_sign:                  | Unique identifier of the workspace. |
| `tokenID`                           | *string*                            | :heavy_check_mark:                  | Unique identifier of the token.     |