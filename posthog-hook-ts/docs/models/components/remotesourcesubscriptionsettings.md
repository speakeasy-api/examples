# RemoteSourceSubscriptionSettings

## Example Usage

```typescript
import { RemoteSourceSubscriptionSettings } from "speakeasy/models/components";

let value: RemoteSourceSubscriptionSettings = {
  baseSpecNamespaces: [
    "<value>",
  ],
  overlayNamespaces: [
    "<value>",
  ],
  outputNamespace: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `baseSpecNamespaces` | *string*[]           | :heavy_check_mark:   | N/A                  |
| `overlayNamespaces`  | *string*[]           | :heavy_check_mark:   | N/A                  |
| `ignoredNamespaces`  | *string*[]           | :heavy_minus_sign:   | N/A                  |
| `outputNamespace`    | *string*             | :heavy_check_mark:   | N/A                  |