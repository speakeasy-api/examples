# CreateBookingResponseBody

A booking for a train trip.

## Example Usage

```typescript
import { CreateBookingResponseBody } from "sdk/models/operations";

let value: CreateBookingResponseBody = {
  id: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
  passengerName: "John Doe",
  hasBicycle: true,
  hasDog: false,
  links: {
    self:
      "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | 1725ff48-ab45-4bb5-9d02-88745177dedb                                           |
| `tripId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | ea399ba1-6d95-433f-92d1-83f67b775594                                           |
| `passengerName`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | John Doe                                                                       |
| `hasBicycle`                                                                   | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | true                                                                           |
| `hasDog`                                                                       | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | false                                                                          |
| `links`                                                                        | [operations.CreateBookingLinks](../../models/operations/createbookinglinks.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |