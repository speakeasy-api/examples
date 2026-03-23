# GetStationsXMLResponseBody

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Example Usage

```typescript
import { GetStationsXMLResponseBody } from "train-travel-sdk/models/operations";

let value: GetStationsXMLResponseBody = {
  data: [
    {
      id: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      name: "Berlin Hauptbahnhof",
      address: "Invalidenstraße 10557 Berlin, Germany",
      countryCode: "DE",
      timezone: "Europe/Berlin",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [models.Station](../../models/station.md)[]                                      | :heavy_minus_sign:                                                               | N/A                                                                              |
| `links`                                                                          | [operations.GetStationsXMLLinks](../../models/operations/getstationsxmllinks.md) | :heavy_minus_sign:                                                               | N/A                                                                              |