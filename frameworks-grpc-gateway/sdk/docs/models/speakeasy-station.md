# SpeakeasyStation

A train station.

## Example Usage

```typescript
import { SpeakeasyStation } from "openapi/models";

let value: SpeakeasyStation = {
  address: "Invalidenstrasse 10557 Berlin, Germany",
  countryCode: "DE",
  id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  name: "Berlin Hauptbahnhof",
  timezone: "Europe/Berlin",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `address`                                   | *string*                                    | :heavy_check_mark:                          | The address of the station.                 | Invalidenstrasse 10557 Berlin, Germany      |
| `countryCode`                               | *string*                                    | :heavy_check_mark:                          | The country code of the station.            | DE                                          |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Unique identifier for the station.          | efdbb9d1-02c2-4bc3-afb7-6788d8782b1e        |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | The name of the station.                    | Berlin Hauptbahnhof                         |
| `timezone`                                  | *string*                                    | :heavy_minus_sign:                          | The timezone of the station in IANA format. | Europe/Berlin                               |