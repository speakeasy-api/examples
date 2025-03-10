# SuggestOpenAPIRegistryRequest

## Example Usage

```typescript
import { SuggestOpenAPIRegistryRequest } from "speakeasy/models/operations";

let value: SuggestOpenAPIRegistryRequest = {
  xSessionId: "<id>",
  namespaceName: "<value>",
  revisionReference: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `xSessionId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `namespaceName`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `revisionReference`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | Tag or digest                                                                  |
| `suggestRequestBody`                                                           | [components.SuggestRequestBody](../../models/components/suggestrequestbody.md) | :heavy_minus_sign:                                                             | Suggest options                                                                |