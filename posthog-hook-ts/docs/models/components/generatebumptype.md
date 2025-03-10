# GenerateBumpType

Bump type of the lock file (calculated semver delta, custom change (manual release), or prerelease/graduate)

## Example Usage

```typescript
import { GenerateBumpType } from "speakeasy/models/components";

let value: GenerateBumpType = "custom";
```

## Values

```typescript
"major" | "minor" | "patch" | "custom" | "graduate" | "prerelease" | "none"
```