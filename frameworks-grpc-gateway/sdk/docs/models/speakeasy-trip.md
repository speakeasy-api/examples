# SpeakeasyTrip

A train trip between two stations.

## Example Usage

```typescript
import { SpeakeasyTrip } from "openapi/models";

let value: SpeakeasyTrip = {
  destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
  id: "ea399ba1-6d95-433f-92d1-83f67b775594",
  operator: "Deutsche Bahn",
  origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  price: 50,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `arrivalTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The arrival time in ISO 8601 format.                                                          | 2024-02-01T16:00:00Z                                                                          |
| `bicyclesAllowed`                                                                             | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether bicycles are allowed on the trip.                                           |                                                                                               |
| `departureTime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The departure time in ISO 8601 format.                                                        | 2024-02-01T10:00:00Z                                                                          |
| `destination`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the destination station.                                                            | b2e783e1-c824-4d63-b37a-d8d698862f1d                                                          |
| `dogsAllowed`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether dogs are allowed on the trip.                                               |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the trip.                                                               | ea399ba1-6d95-433f-92d1-83f67b775594                                                          |
| `operator`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the operator of the trip.                                                         | Deutsche Bahn                                                                                 |
| `origin`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the origin station.                                                                 | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e                                                          |
| `price`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The cost of the trip.                                                                         | 50                                                                                            |