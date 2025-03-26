# UpdateLapRequest

## Example Usage

```typescript
import { UpdateLapRequest } from "racing-lap-counter/models/operations";

let value: UpdateLapRequest = {
  driverId: "<id>",
  lapId: "<id>",
  lapUpdate: {
    lapTime: 80.56,
    track: "Budapest",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `driverId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the driver                                         |                                                              |
| `lapId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The ID of the lap record                                     |                                                              |
| `lapUpdate`                                                  | [components.LapUpdate](../../models/components/lapupdate.md) | :heavy_check_mark:                                           | N/A                                                          | {<br/>"lap_time": 80.56,<br/>"track": "Budapest"<br/>}       |