# GenerateCodeSamplePreviewAsyncResponse

Job accepted, returns a job ID to poll for status and result

## Example Usage

```typescript
import { GenerateCodeSamplePreviewAsyncResponse } from "speakeasy/models/operations";

let value: GenerateCodeSamplePreviewAsyncResponse = {
  jobId: "<id>",
  status: "pending",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `jobId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The job ID for polling                                                             |
| `status`                                                                           | [components.CodeSamplesJobStatus](../../models/components/codesamplesjobstatus.md) | :heavy_check_mark:                                                                 | The current status of the job. Possible values are `pending` or `running`.         |