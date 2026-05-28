# Trip

## Example Usage

```typescript
import { Trip } from "sdk/models/components";

let value: Trip = {
  id: "ea399ba1-6d95-433f-92d1-83f67b775594",
  origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
  departureTime: "2026-05-21T10:00:00Z",
  arrivalTime: "2026-05-21T16:00:00Z",
  operator: "Deutsche Bahn",
  price: 50,
  bicyclesAllowed: true,
  dogsAllowed: true,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique trip identifier.              | ea399ba1-6d95-433f-92d1-83f67b775594 |
| `origin`                             | *string*                             | :heavy_check_mark:                   | Origin station ID.                   | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e |
| `destination`                        | *string*                             | :heavy_check_mark:                   | Destination station ID.              | b2e783e1-c824-4d63-b37a-d8d698862f1d |
| `departureTime`                      | *string*                             | :heavy_check_mark:                   | Departure time in ISO 8601.          | 2026-05-21T10:00:00Z                 |
| `arrivalTime`                        | *string*                             | :heavy_check_mark:                   | Arrival time in ISO 8601.            | 2026-05-21T16:00:00Z                 |
| `operator`                           | *string*                             | :heavy_check_mark:                   | Train operator.                      | Deutsche Bahn                        |
| `price`                              | *number*                             | :heavy_check_mark:                   | Ticket price.                        | 50                                   |
| `bicyclesAllowed`                    | *boolean*                            | :heavy_check_mark:                   | Indicates if bicycles are allowed.   | true                                 |
| `dogsAllowed`                        | *boolean*                            | :heavy_check_mark:                   | Indicates if dogs are allowed.       | true                                 |