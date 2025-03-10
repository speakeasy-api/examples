# UsageSnippets

## Example Usage

```typescript
import { UsageSnippets } from "speakeasy/models/components";

let value: UsageSnippets = {
  snippets: [
    {
      path: "/usr/libexec",
      method: "<value>",
      operationId: "<id>",
      language: "<value>",
      code: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `snippets`                                                           | [components.UsageSnippet](../../models/components/usagesnippet.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |