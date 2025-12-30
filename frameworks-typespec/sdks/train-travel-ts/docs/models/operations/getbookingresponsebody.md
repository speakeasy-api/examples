# GetBookingResponseBody

A booking for a train trip.

## Example Usage

```typescript
import { GetBookingResponseBody } from "train-travel-sdk/models/operations";

let value: GetBookingResponseBody = {
  id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
  tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
  passengerName: "John Doe",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_minus_sign:                             | Unique identifier for the booking              | 3f3e3e1-c824-4d63-b37a-d8d698862f1d            |
| `tripId`                                       | *string*                                       | :heavy_minus_sign:                             | Identifier of the booked trip                  | 4f4e4e1-c824-4d63-b37a-d8d698862f1d            |
| `passengerName`                                | *string*                                       | :heavy_minus_sign:                             | Name of the passenger                          | John Doe                                       |
| `hasBicycle`                                   | *boolean*                                      | :heavy_minus_sign:                             | Indicates whether the passenger has a bicycle. |                                                |
| `hasDog`                                       | *boolean*                                      | :heavy_minus_sign:                             | Indicates whether the passenger has a dog.     |                                                |
| `links`                                        | [models.LinksSelf](../../models/linksself.md)  | :heavy_minus_sign:                             | The link to the current resource.              |                                                |