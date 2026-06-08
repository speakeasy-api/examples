# GetStationsRequest

## Example Usage

```typescript
import { GetStationsRequest } from "sdk/models/operations";

let value: GetStationsRequest = {
  coordinates: "52.5200,13.4050",
  search: "Milano Centrale",
  country: "DE",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `page`             | *number*           | :heavy_minus_sign: | N/A                |                    |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |                    |
| `coordinates`      | *string*           | :heavy_minus_sign: | N/A                | 52.5200,13.4050    |
| `search`           | *string*           | :heavy_minus_sign: | N/A                | Milano Centrale    |
| `country`          | *string*           | :heavy_minus_sign: | N/A                | DE                 |