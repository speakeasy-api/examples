# MoveTarget
(*MoveTarget*)

## Overview

### Available Operations

* [MoveTargetList](#movetargetlist)
* [MoveTargetRead](#movetargetread)

## MoveTargetList

### Example Usage

<!-- UsageSnippet language="go" operationID="move-target_list" method="get" path="/api/v2/move-target/" -->
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

    res, err := s.MoveTarget.MoveTargetList(ctx, nil, nil)
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

**[*operations.MoveTargetListResponse](../../models/operations/movetargetlistresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |

## MoveTargetRead

### Example Usage

<!-- UsageSnippet language="go" operationID="move-target_read" method="get" path="/api/v2/move-target/{id}/" -->
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

    res, err := s.MoveTarget.MoveTargetRead(ctx, 36053)
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

**[*operations.MoveTargetReadResponse](../../models/operations/movetargetreadresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |