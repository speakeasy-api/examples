# GetBookingsResponse

## Example Usage

```typescript
import { GetBookingsResponse } from "train-travel-sdk/models/operations";

let value: GetBookingsResponse = {
  headers: {},
  result: {
    data: [
      {
        id: "3f3e3e1-c824-4d63-b37a-d8d698862f1d",
        tripId: "4f4e4e1-c824-4d63-b37a-d8d698862f1d",
        passengerName: "John Doe",
      },
    ],
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.GetBookingsResponseResult* | :heavy_check_mark:                     | N/A                                    |