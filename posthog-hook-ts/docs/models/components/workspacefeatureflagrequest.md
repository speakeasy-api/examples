# WorkspaceFeatureFlagRequest

A request to add workspace feature flags

## Example Usage

```typescript
import { WorkspaceFeatureFlagRequest } from "speakeasy/models/components";

let value: WorkspaceFeatureFlagRequest = {
  featureFlags: [
    "webhooks",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `featureFlags`                                                                       | [components.WorkspaceFeatureFlag](../../models/components/workspacefeatureflag.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |