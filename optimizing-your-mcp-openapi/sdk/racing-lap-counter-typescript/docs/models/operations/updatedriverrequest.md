# UpdateDriverRequest

## Example Usage

```typescript
import { UpdateDriverRequest } from "racing-lap-counter/models/operations";

let value: UpdateDriverRequest = {
  driverId: "<id>",
  driverUpdate: {
    name: "Fernando Alonso",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `driverId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The ID of the driver to update                                     |                                                                    |
| `driverUpdate`                                                     | [components.DriverUpdate](../../models/components/driverupdate.md) | :heavy_check_mark:                                                 | N/A                                                                | {<br/>"name": "Fernando Alonso"<br/>}                              |