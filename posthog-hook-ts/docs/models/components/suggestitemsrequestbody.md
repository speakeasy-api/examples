# SuggestItemsRequestBody

## Example Usage

```typescript
import { SuggestItemsRequestBody } from "speakeasy/models/components";

let value: SuggestItemsRequestBody = {
  prompt: "<value>",
  items: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `prompt`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | The prompt to use for the suggestion. Think of this as the "preamble".                                  |
| `items`                                                                                                 | *string*[]                                                                                              | :heavy_check_mark:                                                                                      | The list of "things" to get suggestions for. One suggestion will be returned for each item in the list. |