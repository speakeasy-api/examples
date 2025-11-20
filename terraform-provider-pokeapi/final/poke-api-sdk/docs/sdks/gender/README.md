# Gender
(*Gender*)

## Overview

### Available Operations

* [GenderList](#genderlist)
* [GenderRead](#genderread)

## GenderList

### Example Usage

<!-- UsageSnippet language="go" operationID="gender_list" method="get" path="/api/v2/gender/" -->
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

    res, err := s.Gender.GenderList(ctx, nil, nil)
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

**[*operations.GenderListResponse](../../models/operations/genderlistresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |

## GenderRead

### Example Usage

<!-- UsageSnippet language="go" operationID="gender_read" method="get" path="/api/v2/gender/{id}/" -->
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

    res, err := s.Gender.GenderRead(ctx, 775445)
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

**[*operations.GenderReadResponse](../../models/operations/genderreadresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |