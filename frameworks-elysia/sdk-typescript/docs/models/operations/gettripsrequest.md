# GetTripsRequest

## Example Usage

```typescript
import { GetTripsRequest } from "sdk/models/operations";

let value: GetTripsRequest = {
  origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
  date: new Date("2024-02-01T09:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `origin`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e                                                          |
| `destination`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | b2e783e1-c824-4d63-b37a-d8d698862f1d                                                          |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-02-01T09:00:00Z                                                                          |
| `bicycles`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `dogs`                                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |