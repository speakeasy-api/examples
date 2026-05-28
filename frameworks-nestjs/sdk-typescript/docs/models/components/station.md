# Station

## Example Usage

```typescript
import { Station } from "sdk/models/components";

let value: Station = {
  id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  name: "Berlin Hauptbahnhof",
  address: "Invalidenstraße 10557 Berlin, Germany",
  countryCode: "DE",
  timezone: "Europe/Berlin",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `id`                                  | *string*                              | :heavy_check_mark:                    | Unique identifier for the station.    | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e  |
| `name`                                | *string*                              | :heavy_check_mark:                    | Human-readable station name.          | Berlin Hauptbahnhof                   |
| `address`                             | *string*                              | :heavy_check_mark:                    | Full street address.                  | Invalidenstraße 10557 Berlin, Germany |
| `countryCode`                         | *string*                              | :heavy_check_mark:                    | ISO country code.                     | DE                                    |
| `timezone`                            | *string*                              | :heavy_check_mark:                    | IANA timezone.                        | Europe/Berlin                         |