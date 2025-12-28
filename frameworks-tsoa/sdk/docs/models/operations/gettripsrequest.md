# GetTripsRequest

## Example Usage

```typescript
import { GetTripsRequest } from "openapi/models/operations";

let value: GetTripsRequest = {
  origin: "<value>",
  destination: "<value>",
  date: "2024-05-13",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `origin`           | *string*           | :heavy_check_mark: | N/A                |
| `destination`      | *string*           | :heavy_check_mark: | N/A                |
| `date`             | *string*           | :heavy_check_mark: | N/A                |
| `page`             | *number*           | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |
| `bicycles`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `dogs`             | *boolean*          | :heavy_minus_sign: | N/A                |