# GetBookingsXMLResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetBookingsXMLResponseBody } from "train-travel-sdk/models/operations";

let value: GetBookingsXMLResponseBody = {
  data: [
    {
      id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
      tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
      passengerName: "John Doe",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [models.Booking](../../models/booking.md)[]                                      | :heavy_minus_sign:                                                               | N/A                                                                              |
| `links`                                                                          | [operations.GetBookingsXMLLinks](../../models/operations/getbookingsxmllinks.md) | :heavy_minus_sign:                                                               | N/A                                                                              |