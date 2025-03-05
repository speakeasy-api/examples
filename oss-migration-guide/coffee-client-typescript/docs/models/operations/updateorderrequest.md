# UpdateOrderRequest

## Example Usage

```typescript
import { UpdateOrderRequest } from "coffee-client/models/operations";

let value: UpdateOrderRequest = {
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
| `orderId`                                                                       | *number*                                                                        | :heavy_check_mark:                                                              | The ID of the order to operate on                                               |                                                                                 |
| `coffeeOrderUpdate`                                                             | [components.CoffeeOrderUpdate](../../models/components/coffeeorderupdate.md)    | :heavy_check_mark:                                                              | N/A                                                                             | {<br/>"customer_name": "Frank",<br/>"size": "Small",<br/>"extras": [<br/>"Sugar-free syrup"<br/>]<br/>} |