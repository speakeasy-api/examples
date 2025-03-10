# AccessToken

An AccessToken is a token that can be used to authenticate with the Speakeasy API.

## Example Usage

```typescript
import { AccessToken } from "speakeasy/models/components";

let value: AccessToken = {
  accessToken: "<value>",
  claims: {},
  user: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `accessToken`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `claims`                                                                 | [components.Claims](../../models/components/claims.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `user`                                                                   | [components.AccessTokenUser](../../models/components/accesstokenuser.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `workspaces`                                                             | [components.Workspaces](../../models/components/workspaces.md)[]         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `featureFlags`                                                           | [components.FeatureFlag](../../models/components/featureflag.md)[]       | :heavy_minus_sign:                                                       | N/A                                                                      |