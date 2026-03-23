# GetBookingResponse

## Example Usage

```typescript
import { GetBookingResponse } from "train-travel-sdk/models/operations";

let value: GetBookingResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: new TextEncoder().encode("0x50aAd25aB8"),
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `headers`                             | Record<string, *string*[]>            | :heavy_check_mark:                    | N/A                                   |
| `result`                              | *operations.GetBookingResponseResult* | :heavy_check_mark:                    | N/A                                   |