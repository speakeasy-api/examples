<!-- Start SDK Example Usage [usage] -->
```go
package main

import (
	"context"
	pokeapisdk "github.com/pokeapi/sdk"
	"log"
)

func main() {
	ctx := context.Background()

	s := pokeapisdk.New()

	res, err := s.Ability.AbilityList(ctx, nil, nil)
	if err != nil {
		log.Fatal(err)
	}
	if res.Res != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->