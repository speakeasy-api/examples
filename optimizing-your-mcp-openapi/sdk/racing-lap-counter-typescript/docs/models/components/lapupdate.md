# LapUpdate

## Example Usage

```typescript
import { LapUpdate } from "racing-lap-counter/models/components";

let value: LapUpdate = {
  lapTime: 80.56,
  track: "Budapest",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `lapTime`                                    | *number*                                     | :heavy_check_mark:                           | Lap time in seconds                          | 81.23                                        |
| `track`                                      | *string*                                     | :heavy_check_mark:                           | Name of the track where the lap was recorded | Imola                                        |