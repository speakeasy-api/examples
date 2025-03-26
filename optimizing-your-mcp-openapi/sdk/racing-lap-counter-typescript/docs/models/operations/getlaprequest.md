# GetLapRequest

## Example Usage

```typescript
import { GetLapRequest } from "racing-lap-counter/models/operations";

let value: GetLapRequest = {
  driverId: "<id>",
  lapId: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `driverId`               | *string*                 | :heavy_check_mark:       | The ID of the driver     |
| `lapId`                  | *string*                 | :heavy_check_mark:       | The ID of the lap record |