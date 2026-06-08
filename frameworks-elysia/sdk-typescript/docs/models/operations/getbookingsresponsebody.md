# GetBookingsResponseBody

A list of bookings

## Example Usage

```typescript
import { GetBookingsResponseBody } from "sdk/models/operations";

let value: GetBookingsResponseBody = {
  data: [
    {
      id: "1725ff48-ab45-4bb5-9d02-88745177dedb",
      tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
      passengerName: "John Doe",
      hasBicycle: true,
      hasDog: false,
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [operations.GetBookingsData](../../models/operations/getbookingsdata.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `links`                                                                    | [operations.GetBookingsLinks](../../models/operations/getbookingslinks.md) | :heavy_check_mark:                                                         | N/A                                                                        |