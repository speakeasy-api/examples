# SuggestRequest

## Example Usage

```typescript
import { SuggestRequest } from "speakeasy/models/operations";

let value: SuggestRequest = {
  xSessionId: "<id>",
  suggestRequestBody: {
    oasSummary: {
      info: {
        title: "<value>",
        summary: "<value>",
        description:
          "ouch substantiate into ew a sidetrack popularity clamor svelte ah",
        version: "<value>",
        license: {},
      },
      operations: [
        {
          method: "<value>",
          path: "/etc/periodic",
          operationId: "<id>",
          description:
            "redact zowie instead gah vision um sneaky never hmph though",
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
          "/etc",
        ],
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `xSessionId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `suggestRequestBody`                                                           | [components.SuggestRequestBody](../../models/components/suggestrequestbody.md) | :heavy_check_mark:                                                             | The OAS summary and diagnostics to use for the suggestion.                     |