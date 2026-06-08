# CreateBookingBookingsRequestRequestBody

Booking details.

## Example Usage

```typescript
import { CreateBookingBookingsRequestRequestBody } from "sdk/models/operations";

let value: CreateBookingBookingsRequestRequestBody = {
  tripId: "ea399ba1-6d95-433f-92d1-83f67b775594",
  passengerName: "John Doe",
  hasBicycle: true,
  hasDog: false,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `tripId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  | ea399ba1-6d95-433f-92d1-83f67b775594 |
| `passengerName`                      | *string*                             | :heavy_check_mark:                   | N/A                                  | John Doe                             |
| `hasBicycle`                         | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `hasDog`                             | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | false                                |