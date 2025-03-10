# GithubConfigureCodeSamplesResponse

A response to configure GitHub code samples

## Example Usage

```typescript
import { GithubConfigureCodeSamplesResponse } from "speakeasy/models/components";

let value: GithubConfigureCodeSamplesResponse = {
  source: {
    location: "<value>",
  },
  codeSampleOverlayRegistryURL: "https://misguided-hawk.biz",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `source`                                                                   | [components.WorkflowDocument](../../models/components/workflowdocument.md) | :heavy_check_mark:                                                         | A document referenced by a workflow                                        |
| `codeSampleOverlayRegistryURL`                                             | *string*                                                                   | :heavy_check_mark:                                                         | The URL of the code sample overlay registry                                |
| `ghActionID`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | The ID of the GitHub action that was dispatched                            |