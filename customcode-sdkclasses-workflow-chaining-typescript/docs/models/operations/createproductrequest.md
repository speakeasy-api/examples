# CreateProductRequest

The product details to create.

## Example Usage

```typescript
import { CreateProductRequest } from "store/models/operations";

let value: CreateProductRequest = {
  name: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `name`                              | *string*                            | :heavy_check_mark:                  | The name of the product.            |
| `description`                       | *string*                            | :heavy_minus_sign:                  | A brief description of the product. |