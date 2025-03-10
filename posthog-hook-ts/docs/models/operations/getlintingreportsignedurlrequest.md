# GetLintingReportSignedUrlRequest

## Example Usage

```typescript
import { GetLintingReportSignedUrlRequest } from "speakeasy/models/operations";

let value: GetLintingReportSignedUrlRequest = {
  documentChecksum: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `documentChecksum`                                                  | *string*                                                            | :heavy_check_mark:                                                  | The checksum of the document to retrieve the signed access url for. |