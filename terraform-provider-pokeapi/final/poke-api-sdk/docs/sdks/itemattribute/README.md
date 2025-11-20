# ItemAttribute
(*ItemAttribute*)

## Overview

### Available Operations

* [ItemAttributeList](#itemattributelist)
* [ItemAttributeRead](#itemattributeread)

## ItemAttributeList

### Example Usage

<!-- UsageSnippet language="go" operationID="item-attribute_list" method="get" path="/api/v2/item-attribute/" -->
```go
package main

import(
	"context"
	pokeapisdk "github.com/pokeapi/sdk"
	"log"
)

func main() {
    ctx := context.Background()

    s := pokeapisdk.New()

    res, err := s.ItemAttribute.ItemAttributeList(ctx, nil, nil)
    if err != nil {
        log.Fatal(err)
    }
    if res.Res != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `limit`                                                  | **int64*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `offset`                                                 | **int64*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.ItemAttributeListResponse](../../models/operations/itemattributelistresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |

## ItemAttributeRead

### Example Usage

<!-- UsageSnippet language="go" operationID="item-attribute_read" method="get" path="/api/v2/item-attribute/{id}/" -->
```go
package main

import(
	"context"
	pokeapisdk "github.com/pokeapi/sdk"
	"log"
)

func main() {
    ctx := context.Background()

    s := pokeapisdk.New()

    res, err := s.ItemAttribute.ItemAttributeRead(ctx, 913717)
    if err != nil {
        log.Fatal(err)
    }
    if res.Res != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `id`                                                     | *int64*                                                  | :heavy_check_mark:                                       | N/A                                                      |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.ItemAttributeReadResponse](../../models/operations/itemattributereadresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |