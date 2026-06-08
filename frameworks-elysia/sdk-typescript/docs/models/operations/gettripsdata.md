# GetTripsData

A train trip.

## Example Usage

```typescript
import { GetTripsData } from "sdk/models/operations";

let value: GetTripsData = {
  id: "ea399ba1-6d95-433f-92d1-83f67b775594",
  origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
  departureTime: new Date("2024-02-01T10:00:00Z"),
  arrivalTime: new Date("2024-02-01T16:00:00Z"),
  operator: "Deutsche Bahn",
  price: 50,
  bicyclesAllowed: true,
  dogsAllowed: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | ea399ba1-6d95-433f-92d1-83f67b775594                                                          |
| `origin`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e                                                          |
| `destination`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | b2e783e1-c824-4d63-b37a-d8d698862f1d                                                          |
| `departureTime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-02-01T10:00:00Z                                                                          |
| `arrivalTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-02-01T16:00:00Z                                                                          |
| `operator`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Deutsche Bahn                                                                                 |
| `price`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 50                                                                                            |
| `bicyclesAllowed`                                                                             | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | true                                                                                          |
| `dogsAllowed`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | true                                                                                          |