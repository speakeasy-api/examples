# GetChangesReportSignedUrlRequest

## Example Usage

```typescript
import { GetChangesReportSignedUrlRequest } from "speakeasy/models/operations";

let value: GetChangesReportSignedUrlRequest = {
  documentChecksum: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `documentChecksum`                                                  | *string*                                                            | :heavy_check_mark:                                                  | The checksum of the document to retrieve the signed access url for. |