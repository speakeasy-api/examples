# UploadReportRequest

The report file to upload provided as a multipart/form-data file segment.

## Example Usage

```typescript
import { UploadReportRequest } from "speakeasy/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                               | [components.Report](../../models/components/report.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `file`                                                                                                                                                                               | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [operations.FileT](../../models/operations/filet.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |