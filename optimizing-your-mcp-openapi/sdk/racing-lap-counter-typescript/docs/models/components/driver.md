# Driver

## Example Usage

```typescript
import { Driver } from "racing-lap-counter/models/components";

let value: Driver = {
  name: "Lewis Hamilton",
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  laps: [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
      lapTime: 85.4,
      track: "Silverstone",
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa8",
      lapTime: 86.2,
      track: "Monza",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The full name of the driver                        | Max Verstappen                                     |
| `id`                                               | *string*                                           | :heavy_minus_sign:                                 | Unique identifier for the driver                   |                                                    |
| `laps`                                             | [components.Lap](../../models/components/lap.md)[] | :heavy_minus_sign:                                 | List of laps completed by the driver               |                                                    |