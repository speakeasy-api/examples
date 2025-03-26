# CreateLapRequest

## Example Usage

```typescript
import { CreateLapRequest } from "racing-lap-counter/models/operations";

let value: CreateLapRequest = {
  driverId: "<id>",
  lapCreate: {
    lapTime: 79.32,
    track: "Silverstone",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `driverId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the driver                                         |                                                              |
| `lapCreate`                                                  | [components.LapCreate](../../models/components/lapcreate.md) | :heavy_check_mark:                                           | N/A                                                          | {<br/>"lap_time": 79.32,<br/>"track": "Silverstone"<br/>}    |