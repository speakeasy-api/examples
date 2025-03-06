# AddPricingRequest

## Example Usage

```typescript
import { AddPricingRequest } from "store/models/operations";

let value: AddPricingRequest = {
  productId: "<id>",
  requestBody: {
    amount: 6027.63,
    currency: "Denar",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `productId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the product to add pricing to.                                                 |
| `requestBody`                                                                        | [operations.AddPricingRequestBody](../../models/operations/addpricingrequestbody.md) | :heavy_check_mark:                                                                   | Pricing details for the product.                                                     |