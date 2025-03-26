# Lap

## Example Usage

```typescript
import { Lap } from "racing-lap-counter/models/components";

let value: Lap = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  lapTime: 83.12,
  track: "Monaco",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_minus_sign:                           | Unique identifier for the lap                |                                              |
| `lapTime`                                    | *number*                                     | :heavy_check_mark:                           | Lap time in seconds                          | 82.45                                        |
| `track`                                      | *string*                                     | :heavy_check_mark:                           | Name of the track where the lap was recorded | Spa-Francorchamps                            |