# SpeakeasyBooking

A booking for a train trip.

## Example Usage

```typescript
import { SpeakeasyBooking } from "openapi/models";

let value: SpeakeasyBooking = {
  id: "1725ff48-ab45-4bb5-9d02-88745177dedb",
  passengerName: "John Doe",
  tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `hasBicycle`                                   | *boolean*                                      | :heavy_minus_sign:                             | Indicates whether the passenger has a bicycle. |                                                |
| `hasDog`                                       | *boolean*                                      | :heavy_minus_sign:                             | Indicates whether the passenger has a dog.     |                                                |
| `id`                                           | *string*                                       | :heavy_minus_sign:                             | Unique identifier for the booking.             | 1725ff48-ab45-4bb5-9d02-88745177dedb           |
| `passengerName`                                | *string*                                       | :heavy_check_mark:                             | Name of the passenger.                         | John Doe                                       |
| `tripId`                                       | *string*                                       | :heavy_check_mark:                             | Identifier of the booked trip.                 | ea399ba1-6d95-433f-92d1-83f67b775594           |