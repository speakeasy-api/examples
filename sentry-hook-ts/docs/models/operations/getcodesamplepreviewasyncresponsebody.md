# GetCodeSamplePreviewAsyncResponseBody

Job is still in progress

## Example Usage

```typescript
import { GetCodeSamplePreviewAsyncResponseBody } from "speakeasy/models/operations";

let value: GetCodeSamplePreviewAsyncResponseBody = {
  status: "running",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `status`                                                                           | [components.CodeSamplesJobStatus](../../models/components/codesamplesjobstatus.md) | :heavy_check_mark:                                                                 | The current status of the job. Possible values are `pending` or `running`.         |