# DeleteBillingAddOnRequest

## Example Usage

```typescript
import { DeleteBillingAddOnRequest } from "speakeasy/models/operations";

let value: DeleteBillingAddOnRequest = {
  addOn: "custom_code_regions",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `addOn`                                                            | [components.BillingAddOn](../../models/components/billingaddon.md) | :heavy_check_mark:                                                 | The specific add-on to delete.                                     |