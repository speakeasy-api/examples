# OrganizationBillingAddOnRequest

A request to add billing add ons

## Example Usage

```typescript
import { OrganizationBillingAddOnRequest } from "speakeasy/models/components";

let value: OrganizationBillingAddOnRequest = {
  addOns: [
    "sdk_testing",
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `addOns`                                                             | [components.BillingAddOn](../../models/components/billingaddon.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |