# CreateBookingRawResponse

## Example Usage

```typescript
import { CreateBookingRawResponse } from "train-travel-sdk/models/operations";

let value: CreateBookingRawResponse = {
  headers: {},
  result: {
    id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
    tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
    passengerName: "John Doe",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `headers`                                   | Record<string, *string*[]>                  | :heavy_check_mark:                          | N/A                                         |
| `result`                                    | *operations.CreateBookingRawResponseResult* | :heavy_check_mark:                          | N/A                                         |