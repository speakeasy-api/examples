# GetTripsRequest

## Example Usage

```typescript
import { GetTripsRequest } from "train-travel-sdk/models/operations";

let value: GetTripsRequest = {
  origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
  date: new Date("2024-02-01T09:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The page number to return                                                                     | 1                                                                                             |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of items to return per page                                                        | 10                                                                                            |
| `origin`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the origin station                                                                  | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e                                                          |
| `destination`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the destination station                                                             | b2e783e1-c824-4d63-b37a-d8d698862f1d                                                          |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time of the trip in ISO 8601 format in origin station's timezone.                | 2024-02-01T09:00:00Z                                                                          |
| `bicycles`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Only return trips where bicycles are known to be allowed                                      |                                                                                               |
| `dogs`                                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Only return trips where dogs are known to be allowed                                          |                                                                                               |