# GetTripsRequest

## Example Usage

```typescript
import { GetTripsRequest } from "sdk/models/operations";

let value: GetTripsRequest = {
  origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
  date: "2026-05-21T09:00:00Z",
  bicycles: true,
  dogs: false,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `origin`                                | *string*                                | :heavy_check_mark:                      | Origin station ID.                      | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e    |
| `destination`                           | *string*                                | :heavy_check_mark:                      | Destination station ID.                 | b2e783e1-c824-4d63-b37a-d8d698862f1d    |
| `date`                                  | *string*                                | :heavy_check_mark:                      | Desired departure date in ISO 8601.     | 2026-05-21T09:00:00Z                    |
| `bicycles`                              | *boolean*                               | :heavy_minus_sign:                      | Only include trips that allow bicycles. | true                                    |
| `dogs`                                  | *boolean*                               | :heavy_minus_sign:                      | Only include trips that allow dogs.     | false                                   |