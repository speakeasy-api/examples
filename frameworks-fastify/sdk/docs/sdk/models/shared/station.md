# Station

## Example Usage

```typescript
import { Station } from "openapi/sdk/models/shared";

let value: Station = {
  address: "1368 Sandrine Cape",
  countryCode: "GS",
  id: "c693ed54-46e1-4827-8eb4-bf0b32ef390e",
  name: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `address`                                   | *string*                                    | :heavy_check_mark:                          | The address of the station.                 |
| `countryCode`                               | *string*                                    | :heavy_check_mark:                          | The country code of the station.            |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Unique identifier for the station.          |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | The name of the station                     |
| `timezone`                                  | *string*                                    | :heavy_minus_sign:                          | The timezone of the station in IANA format. |