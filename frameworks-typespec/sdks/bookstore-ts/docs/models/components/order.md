# Order

Represents an order for publications


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for the order                                  |
| `customerId`                                                     | *string*                                                         | :heavy_check_mark:                                               | Customer who placed the order                                    |
| `items`                                                          | *components.Publication*[]                                       | :heavy_check_mark:                                               | List of publications in the order                                |
| `totalPrice`                                                     | *number*                                                         | :heavy_check_mark:                                               | Total price of the order                                         |
| `status`                                                         | [components.OrderStatus](../../models/components/orderstatus.md) | :heavy_check_mark:                                               | Status of the order                                              |