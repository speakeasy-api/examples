# GetTripsLinks

## Example Usage

```typescript
import { GetTripsLinks } from "sdk/models/operations";

let value: GetTripsLinks = {
  self: "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
  next: "https://api.example.com/bookings?page=2",
  prev: "https://api.example.com/bookings?page=1",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `self`                                                                | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb |
| `next`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | https://api.example.com/bookings?page=2                               |
| `prev`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | https://api.example.com/bookings?page=1                               |