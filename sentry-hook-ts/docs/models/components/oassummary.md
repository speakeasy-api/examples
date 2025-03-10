# OASSummary

## Example Usage

```typescript
import { OASSummary } from "speakeasy/models/components";

let value: OASSummary = {
  info: {
    title: "<value>",
    summary: "<value>",
    description: "what unless lest reward firsthand mmm concerning",
    version: "<value>",
    license: {},
  },
  operations: [
    {
      method: "<value>",
      path: "/private",
      operationId: "<id>",
      description: "aha roundabout embarrassment earth wildly",
      tags: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `info`                                                               | [components.OASInfo](../../models/components/oasinfo.md)             | :heavy_check_mark:                                                   | N/A                                                                  |
| `operations`                                                         | [components.OASOperation](../../models/components/oasoperation.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |