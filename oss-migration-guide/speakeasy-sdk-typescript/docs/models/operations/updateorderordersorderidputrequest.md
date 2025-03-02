# UpdateOrderOrdersOrderIdPutRequest

## Example Usage

```typescript
import { UpdateOrderOrdersOrderIdPutRequest } from "coffee-example-api-sdk/models/operations";

let value: UpdateOrderOrdersOrderIdPutRequest = {
  orderId: 645894,
  coffeeOrderUpdate: {
    customerName: "Frank",
    size: "Small",
    extras: [
      "Sugar-free syrup",
    ],
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `orderId`                                                                       | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `coffeeOrderUpdate`                                                             | [components.CoffeeOrderUpdate](../../models/components/coffeeorderupdate.md)    | :heavy_check_mark:                                                              | N/A                                                                             | {<br/>"customer_name": "Frank",<br/>"size": "Small",<br/>"extras": [<br/>"Sugar-free syrup"<br/>]<br/>} |