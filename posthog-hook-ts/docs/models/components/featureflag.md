# FeatureFlag

A feature flag is a key-value pair that can be used to enable or disable features.

## Example Usage

```typescript
import { FeatureFlag } from "speakeasy/models/components";

let value: FeatureFlag = {
  featureFlag: "webhooks",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `featureFlag`                                                                                 | [components.WorkspaceFeatureFlag](../../models/components/workspacefeatureflag.md)            | :heavy_check_mark:                                                                            | enum value workspace feature flag                                                             |
| `trialEndsAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |