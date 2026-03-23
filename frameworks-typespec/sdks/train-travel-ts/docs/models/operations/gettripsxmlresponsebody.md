# GetTripsXMLResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetTripsXMLResponseBody } from "train-travel-sdk/models/operations";

let value: GetTripsXMLResponseBody = {
  data: [
    {
      id: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
      origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      departureTime: new Date("2024-02-01T10:00:00Z"),
      arrivalTime: new Date("2024-02-01T16:00:00Z"),
      operator: "Deutsche Bahn",
      price: 50,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [models.Trip](../../models/trip.md)[]                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `links`                                                                    | [operations.GetTripsXMLLinks](../../models/operations/gettripsxmllinks.md) | :heavy_minus_sign:                                                         | N/A                                                                        |