# DeleteLapRequest

## Example Usage

```typescript
import { DeleteLapRequest } from "racing-lap-counter/models/operations";

let value: DeleteLapRequest = {
  driverId: "<id>",
  lapId: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `driverId`               | *string*                 | :heavy_check_mark:       | The ID of the driver     |
| `lapId`                  | *string*                 | :heavy_check_mark:       | The ID of the lap record |