# Trip

A train trip.

## Example Usage

```typescript
import { Trip } from "train-travel-sdk/models";

let value: Trip = {
  id: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
  origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
  departureTime: new Date("2024-02-01T10:00:00Z"),
  arrivalTime: new Date("2024-02-01T16:00:00Z"),
  operator: "Deutsche Bahn",
  price: 50,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the trip                                                                | 4f4e4e1-c824-4d63-b37a-d8d698862f1d                                                           |
| `origin`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The starting station of the trip                                                              | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e                                                          |
| `destination`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The destination station of the trip                                                           | b2e783e1-c824-4d63-b37a-d8d698862f1d                                                          |
| `departureTime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the trip departs                                                       | 2024-02-01T10:00:00Z                                                                          |
| `arrivalTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the trip arrives                                                       | 2024-02-01T16:00:00Z                                                                          |
| `operator`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the operator of the trip                                                          | Deutsche Bahn                                                                                 |
| `price`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The cost of the trip                                                                          | 50                                                                                            |
| `bicyclesAllowed`                                                                             | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether bicycles are allowed on the trip                                            |                                                                                               |
| `dogsAllowed`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether dogs are allowed on the trip                                                |                                                                                               |