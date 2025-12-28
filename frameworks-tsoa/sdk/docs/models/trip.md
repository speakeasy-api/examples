# Trip

## Example Usage

```typescript
import { Trip } from "openapi/models";

let value: Trip = {
  id: "<id>",
  origin: "<value>",
  destination: "<value>",
  departureTime: "<value>",
  arrivalTime: "<value>",
  operator: "<value>",
  price: 1423.59,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `origin`           | *string*           | :heavy_check_mark: | N/A                |
| `destination`      | *string*           | :heavy_check_mark: | N/A                |
| `departureTime`    | *string*           | :heavy_check_mark: | N/A                |
| `arrivalTime`      | *string*           | :heavy_check_mark: | N/A                |
| `operator`         | *string*           | :heavy_check_mark: | N/A                |
| `price`            | *number*           | :heavy_check_mark: | N/A                |
| `bicyclesAllowed`  | *boolean*          | :heavy_minus_sign: | N/A                |
| `dogsAllowed`      | *boolean*          | :heavy_minus_sign: | N/A                |