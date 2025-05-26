# OrderUpdate

Fields to update an order


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `burger_ids`                                             | List[*int*]                                              | :heavy_minus_sign:                                       | List of burger ids in the order                          | [<br/>1,<br/>2<br/>]                                     |
| `table`                                                  | *Optional[int]*                                          | :heavy_minus_sign:                                       | Table number for the order                               | 1                                                        |
| `status`                                                 | [Optional[models.OrderStatus]](../models/orderstatus.md) | :heavy_minus_sign:                                       | Status of the order                                      |                                                          |
| `note`                                                   | *Optional[str]*                                          | :heavy_minus_sign:                                       | Note for the order                                       | No onions                                                |