# LapCreate

## Example Usage

```typescript
import { LapCreate } from "racing-lap-counter/models/components";

let value: LapCreate = {
  lapTime: 79.32,
  track: "Silverstone",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `lapTime`                                    | *number*                                     | :heavy_check_mark:                           | Lap time in seconds                          | 82.45                                        |
| `track`                                      | *string*                                     | :heavy_check_mark:                           | Name of the track where the lap was recorded | Spa-Francorchamps                            |