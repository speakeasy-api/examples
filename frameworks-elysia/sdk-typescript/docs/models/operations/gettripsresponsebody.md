# GetTripsResponseBody

A list of available train trips

## Example Usage

```typescript
import { GetTripsResponseBody } from "sdk/models/operations";

let value: GetTripsResponseBody = {
  data: [
    {
      id: "ea399ba1-6d95-433f-92d1-83f67b775594",
      origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      departureTime: new Date("2024-02-01T10:00:00Z"),
      arrivalTime: new Date("2024-02-01T16:00:00Z"),
      operator: "Deutsche Bahn",
      price: 50,
      bicyclesAllowed: true,
      dogsAllowed: true,
    },
  ],
  links: {
    self:
      "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
    next: "https://api.example.com/bookings?page=2",
    prev: "https://api.example.com/bookings?page=1",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [operations.GetTripsData](../../models/operations/gettripsdata.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `links`                                                              | [operations.GetTripsLinks](../../models/operations/gettripslinks.md) | :heavy_check_mark:                                                   | N/A                                                                  |