# ActivateSubscriptionNamespaceRequest

## Example Usage

```typescript
import { ActivateSubscriptionNamespaceRequest } from "speakeasy/models/operations";

let value: ActivateSubscriptionNamespaceRequest = {
  subscriptionID: "<id>",
  namespaceName: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `subscriptionID`             | *string*                     | :heavy_check_mark:           | The existing subscription ID |
| `namespaceName`              | *string*                     | :heavy_check_mark:           | The namespace name           |