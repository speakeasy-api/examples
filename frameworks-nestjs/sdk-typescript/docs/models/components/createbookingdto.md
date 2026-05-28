# CreateBookingDto

## Example Usage

```typescript
import { CreateBookingDto } from "sdk/models/components";

let value: CreateBookingDto = {
  tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
  passengerName: "John Doe",
  hasBicycle: true,
  hasDog: false,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `tripId`                             | *string*                             | :heavy_check_mark:                   | Identifier of the trip to book.      | ea399ba1-6d95-433f-92d1-83f67b775594 |
| `passengerName`                      | *string*                             | :heavy_check_mark:                   | Passenger full name.                 | John Doe                             |
| `hasBicycle`                         | *boolean*                            | :heavy_check_mark:                   | Whether the traveler has a bicycle.  | true                                 |
| `hasDog`                             | *boolean*                            | :heavy_check_mark:                   | Whether the traveler has a dog.      | false                                |