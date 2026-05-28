# Booking

## Example Usage

```typescript
import { Booking } from "sdk/models/components";

let value: Booking = {
  id: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
  passengerName: "John Doe",
  hasBicycle: true,
  hasDog: false,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Booking identifier.                  | 1725ff48-ab45-4bb5-9d02-88745177dedb |
| `tripId`                             | *string*                             | :heavy_check_mark:                   | Identifier of the booked trip.       | ea399ba1-6d95-433f-92d1-83f67b775594 |
| `passengerName`                      | *string*                             | :heavy_check_mark:                   | Passenger full name.                 | John Doe                             |
| `hasBicycle`                         | *boolean*                            | :heavy_check_mark:                   | Whether the traveler has a bicycle.  | true                                 |
| `hasDog`                             | *boolean*                            | :heavy_check_mark:                   | Whether the traveler has a dog.      | false                                |