# BillingAddOn

## Example Usage

```typescript
import { BillingAddOn } from "speakeasy/models/components";

let value: BillingAddOn = "sdk_testing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"webhooks" | "sdk_testing" | "custom_code_regions" | Unrecognized<string>
```