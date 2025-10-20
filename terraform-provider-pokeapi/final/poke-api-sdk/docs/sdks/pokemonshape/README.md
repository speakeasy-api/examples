# PokemonShape
(*PokemonShape*)

## Overview

### Available Operations

* [PokemonShapeList](#pokemonshapelist)
* [PokemonShapeRead](#pokemonshaperead)

## PokemonShapeList

### Example Usage

<!-- UsageSnippet language="go" operationID="pokemon-shape_list" method="get" path="/api/v2/pokemon-shape/" -->
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

    res, err := s.PokemonShape.PokemonShapeList(ctx, nil, nil)
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

**[*operations.PokemonShapeListResponse](../../models/operations/pokemonshapelistresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |

## PokemonShapeRead

### Example Usage

<!-- UsageSnippet language="go" operationID="pokemon-shape_read" method="get" path="/api/v2/pokemon-shape/{id}/" -->
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

    res, err := s.PokemonShape.PokemonShapeRead(ctx, 462443)
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

**[*operations.PokemonShapeReadResponse](../../models/operations/pokemonshapereadresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| apierrors.APIError | 4XX, 5XX           | \*/\*              |