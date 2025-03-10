# WorkspaceFeatureFlag

enum value workspace feature flag

## Example Usage

```typescript
import { WorkspaceFeatureFlag } from "speakeasy/models/components";

let value: WorkspaceFeatureFlag = "webhooks";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"schema_registry" | "changes_report" | "skip_schema_registry" | "webhooks" | Unrecognized<string>
```