# GetTripsRequest

## Example Usage

```typescript
import { GetTripsRequest } from "openapi/models/operations";

let value: GetTripsRequest = {
  origin: "5de1e3e2-5a23-40e8-afc8-45118d2096e1",
  destination: "a961de35-51b3-4e0b-9161-2789983b1ae6",
  date: new Date("2024-04-06T17:57:36.526Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `origin`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the origin station.                                                                 |
| `destination`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the destination station.                                                            |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time of the trip in ISO 8601 format.                                             |
| `bicycles`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Only return trips where bicycles are allowed.                                                 |
| `dogs`                                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Only return trips where dogs are allowed.                                                     |