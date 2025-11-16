# OrderSchema

An order placed at the restaurant.


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `burger_ids`                                                         | List[*float*]                                                        | :heavy_check_mark:                                                   | The burgers in the order.                                            | [<br/>1,<br/>2<br/>]                                                 |
| `note`                                                               | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | A note for the order.                                                | No onions.                                                           |
| `status`                                                             | [models.Status](../models/status.md)                                 | :heavy_check_mark:                                                   | The status of the order.                                             | pending                                                              |
| `table`                                                              | *float*                                                              | :heavy_check_mark:                                                   | The table the order is for.                                          | 1                                                                    |
| `time`                                                               | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | The time the order was placed.                                       | 2021-01-01 00:00:00 +0000 UTC                                        |