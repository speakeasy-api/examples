# GetStationsResponseBody

OK

## Example Usage

```typescript
import { GetStationsResponseBody } from "sdk/models/operations";

let value: GetStationsResponseBody = {
  data: [
    {
      id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      name: "Berlin Hauptbahnhof",
      address: "Invalidenstrasse 10557 Berlin, Germany",
      countryCode: "DE",
      timezone: "Europe/Berlin",
    },
  ],
  links: {
    self:
      "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
    next: "https://api.example.com/bookings?page=2",
    prev: "https://api.example.com/bookings?page=1",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `data`                                               | [operations.Data](../../models/operations/data.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `links`                                              | [operations.Links](../../models/operations/links.md) | :heavy_check_mark:                                   | N/A                                                  |