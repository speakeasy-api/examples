# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody } from "speakeasy/models/components";

let value: SuggestRequestBody = {
  oasSummary: {
    info: {
      title: "<value>",
      summary: "<value>",
      description: "rally wherever minus runny rough agreeable beneath",
      version: "<value>",
      license: {},
    },
    operations: [
      {
        method: "<value>",
        path: "/selinux",
        operationId: "<id>",
        description: "inject worth uh-huh substitution psst upon er",
        tags: [
          "<value>",
        ],
      },
    ],
  },
  suggestionType: "diagnostics-only",
  diagnostics: [
    {
      message: "<value>",
      path: [
        "/root",
      ],
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `oasSummary`                                                                                               | [components.OASSummary](../../models/components/oassummary.md)                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `suggestionType`                                                                                           | [components.SuggestRequestBodySuggestionType](../../models/components/suggestrequestbodysuggestiontype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `diagnostics`                                                                                              | [components.Diagnostic](../../models/components/diagnostic.md)[]                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |