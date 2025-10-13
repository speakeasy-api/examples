# pokeapisdk

Developer-friendly & type-safe Go SDK specifically catered to leverage *pokeapisdk* API.

<div align="left" style="margin-bottom: 0;">
    <a href="https://www.speakeasy.com/?utm_source=pokeapisdk&utm_campaign=go" class="badge-link">
        <span class="badge-container">
            <span class="badge-icon-section">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill="none" style="vertical-align: middle;"><title>Speakeasy Logo</title><path fill="currentColor" d="m20.639 27.548-19.17-2.724L0 26.1l20.639 2.931 8.456-7.336-1.468-.208-6.988 6.062Z"></path><path fill="currentColor" d="m20.639 23.1 8.456-7.336-1.468-.207-6.988 6.06-6.84-.972-9.394-1.333-2.936-.417L0 20.169l2.937.416L0 23.132l20.639 2.931 8.456-7.334-1.468-.208-6.986 6.062-9.78-1.39 1.468-1.273 8.31 1.18Z"></path><path fill="currentColor" d="m20.639 18.65-19.17-2.724L0 17.201l20.639 2.931 8.456-7.334-1.468-.208-6.988 6.06Z"></path><path fill="currentColor" d="M27.627 6.658 24.69 9.205 20.64 12.72l-7.923-1.126L1.469 9.996 0 11.271l11.246 1.596-1.467 1.275-8.311-1.181L0 14.235l20.639 2.932 8.456-7.334-2.937-.418 2.937-2.549-1.468-.208Z"></path><path fill="currentColor" d="M29.095 3.902 8.456.971 0 8.305l20.639 2.934 8.456-7.337Z"></path></svg>
            </span>
            <span class="badge-text badge-text-section">BUILT BY SPEAKEASY</span>
        </span>
    </a>
    <a href="https://opensource.org/licenses/MIT" class="badge-link">
        <span class="badge-container blue">
            <span class="badge-text badge-text-section">LICENSE // MIT</span>
        </span>
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/vedalok/test). Delete this section before > publishing to a package manager.

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [pokeapisdk](#pokeapisdk)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

To add the SDK as a dependency to your project:
```bash
go get github.com/pokeapi/sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Ability](docs/sdks/ability/README.md)

* [AbilityList](docs/sdks/ability/README.md#abilitylist)
* [AbilityRead](docs/sdks/ability/README.md#abilityread)

### [Berry](docs/sdks/berry/README.md)

* [BerryList](docs/sdks/berry/README.md#berrylist)
* [BerryRead](docs/sdks/berry/README.md#berryread)

### [BerryFirmness](docs/sdks/berryfirmness/README.md)

* [BerryFirmnessList](docs/sdks/berryfirmness/README.md#berryfirmnesslist)
* [BerryFirmnessRead](docs/sdks/berryfirmness/README.md#berryfirmnessread)

### [BerryFlavor](docs/sdks/berryflavor/README.md)

* [BerryFlavorList](docs/sdks/berryflavor/README.md#berryflavorlist)
* [BerryFlavorRead](docs/sdks/berryflavor/README.md#berryflavorread)

### [Characteristic](docs/sdks/characteristic/README.md)

* [CharacteristicList](docs/sdks/characteristic/README.md#characteristiclist)
* [CharacteristicRead](docs/sdks/characteristic/README.md#characteristicread)

### [ContestEffect](docs/sdks/contesteffect/README.md)

* [ContestEffectList](docs/sdks/contesteffect/README.md#contesteffectlist)
* [ContestEffectRead](docs/sdks/contesteffect/README.md#contesteffectread)

### [ContestType](docs/sdks/contesttype/README.md)

* [ContestTypeList](docs/sdks/contesttype/README.md#contesttypelist)
* [ContestTypeRead](docs/sdks/contesttype/README.md#contesttyperead)

### [EggGroup](docs/sdks/egggroup/README.md)

* [EggGroupList](docs/sdks/egggroup/README.md#egggrouplist)
* [EggGroupRead](docs/sdks/egggroup/README.md#egggroupread)

### [EncounterCondition](docs/sdks/encountercondition/README.md)

* [EncounterConditionList](docs/sdks/encountercondition/README.md#encounterconditionlist)
* [EncounterConditionRead](docs/sdks/encountercondition/README.md#encounterconditionread)

### [EncounterConditionValue](docs/sdks/encounterconditionvalue/README.md)

* [EncounterConditionValueList](docs/sdks/encounterconditionvalue/README.md#encounterconditionvaluelist)
* [EncounterConditionValueRead](docs/sdks/encounterconditionvalue/README.md#encounterconditionvalueread)

### [EncounterMethod](docs/sdks/encountermethod/README.md)

* [EncounterMethodList](docs/sdks/encountermethod/README.md#encountermethodlist)
* [EncounterMethodRead](docs/sdks/encountermethod/README.md#encountermethodread)

### [EvolutionChain](docs/sdks/evolutionchain/README.md)

* [EvolutionChainList](docs/sdks/evolutionchain/README.md#evolutionchainlist)
* [EvolutionChainRead](docs/sdks/evolutionchain/README.md#evolutionchainread)

### [EvolutionTrigger](docs/sdks/evolutiontrigger/README.md)

* [EvolutionTriggerList](docs/sdks/evolutiontrigger/README.md#evolutiontriggerlist)
* [EvolutionTriggerRead](docs/sdks/evolutiontrigger/README.md#evolutiontriggerread)

### [Gender](docs/sdks/gender/README.md)

* [GenderList](docs/sdks/gender/README.md#genderlist)
* [GenderRead](docs/sdks/gender/README.md#genderread)

### [Generation](docs/sdks/generation/README.md)

* [GenerationList](docs/sdks/generation/README.md#generationlist)
* [GenerationRead](docs/sdks/generation/README.md#generationread)

### [GrowthRate](docs/sdks/growthrate/README.md)

* [GrowthRateList](docs/sdks/growthrate/README.md#growthratelist)
* [GrowthRateRead](docs/sdks/growthrate/README.md#growthrateread)

### [Item](docs/sdks/item/README.md)

* [ItemList](docs/sdks/item/README.md#itemlist)
* [ItemRead](docs/sdks/item/README.md#itemread)

### [ItemAttribute](docs/sdks/itemattribute/README.md)

* [ItemAttributeList](docs/sdks/itemattribute/README.md#itemattributelist)
* [ItemAttributeRead](docs/sdks/itemattribute/README.md#itemattributeread)

### [ItemCategory](docs/sdks/itemcategory/README.md)

* [ItemCategoryList](docs/sdks/itemcategory/README.md#itemcategorylist)
* [ItemCategoryRead](docs/sdks/itemcategory/README.md#itemcategoryread)

### [ItemFlingEffect](docs/sdks/itemflingeffect/README.md)

* [ItemFlingEffectList](docs/sdks/itemflingeffect/README.md#itemflingeffectlist)
* [ItemFlingEffectRead](docs/sdks/itemflingeffect/README.md#itemflingeffectread)

### [ItemPocket](docs/sdks/itempocket/README.md)

* [ItemPocketList](docs/sdks/itempocket/README.md#itempocketlist)
* [ItemPocketRead](docs/sdks/itempocket/README.md#itempocketread)

### [Language](docs/sdks/language/README.md)

* [LanguageList](docs/sdks/language/README.md#languagelist)
* [LanguageRead](docs/sdks/language/README.md#languageread)

### [Location](docs/sdks/location/README.md)

* [LocationList](docs/sdks/location/README.md#locationlist)
* [LocationRead](docs/sdks/location/README.md#locationread)

### [LocationArea](docs/sdks/locationarea/README.md)

* [LocationAreaList](docs/sdks/locationarea/README.md#locationarealist)
* [LocationAreaRead](docs/sdks/locationarea/README.md#locationarearead)

### [Machine](docs/sdks/machine/README.md)

* [MachineList](docs/sdks/machine/README.md#machinelist)
* [MachineRead](docs/sdks/machine/README.md#machineread)

### [Move](docs/sdks/move/README.md)

* [MoveList](docs/sdks/move/README.md#movelist)
* [MoveRead](docs/sdks/move/README.md#moveread)

### [MoveAilment](docs/sdks/moveailment/README.md)

* [MoveAilmentList](docs/sdks/moveailment/README.md#moveailmentlist)
* [MoveAilmentRead](docs/sdks/moveailment/README.md#moveailmentread)

### [MoveBattleStyle](docs/sdks/movebattlestyle/README.md)

* [MoveBattleStyleList](docs/sdks/movebattlestyle/README.md#movebattlestylelist)
* [MoveBattleStyleRead](docs/sdks/movebattlestyle/README.md#movebattlestyleread)

### [MoveCategory](docs/sdks/movecategory/README.md)

* [MoveCategoryList](docs/sdks/movecategory/README.md#movecategorylist)
* [MoveCategoryRead](docs/sdks/movecategory/README.md#movecategoryread)

### [MoveDamageClass](docs/sdks/movedamageclass/README.md)

* [MoveDamageClassList](docs/sdks/movedamageclass/README.md#movedamageclasslist)
* [MoveDamageClassRead](docs/sdks/movedamageclass/README.md#movedamageclassread)

### [MoveLearnMethod](docs/sdks/movelearnmethod/README.md)

* [MoveLearnMethodList](docs/sdks/movelearnmethod/README.md#movelearnmethodlist)
* [MoveLearnMethodRead](docs/sdks/movelearnmethod/README.md#movelearnmethodread)

### [MoveTarget](docs/sdks/movetarget/README.md)

* [MoveTargetList](docs/sdks/movetarget/README.md#movetargetlist)
* [MoveTargetRead](docs/sdks/movetarget/README.md#movetargetread)

### [Nature](docs/sdks/nature/README.md)

* [NatureList](docs/sdks/nature/README.md#naturelist)
* [NatureRead](docs/sdks/nature/README.md#natureread)

### [PalParkArea](docs/sdks/palparkarea/README.md)

* [PalParkAreaList](docs/sdks/palparkarea/README.md#palparkarealist)
* [PalParkAreaRead](docs/sdks/palparkarea/README.md#palparkarearead)

### [PokeathlonStat](docs/sdks/pokeathlonstat/README.md)

* [PokeathlonStatList](docs/sdks/pokeathlonstat/README.md#pokeathlonstatlist)
* [PokeathlonStatRead](docs/sdks/pokeathlonstat/README.md#pokeathlonstatread)

### [Pokedex](docs/sdks/pokedex/README.md)

* [PokedexList](docs/sdks/pokedex/README.md#pokedexlist)
* [PokedexRead](docs/sdks/pokedex/README.md#pokedexread)

### [Pokemon](docs/sdks/pokemon/README.md)

* [PokemonList](docs/sdks/pokemon/README.md#pokemonlist)
* [PokemonRead](docs/sdks/pokemon/README.md#pokemonread)

### [PokemonColor](docs/sdks/pokemoncolor/README.md)

* [PokemonColorList](docs/sdks/pokemoncolor/README.md#pokemoncolorlist)
* [PokemonColorRead](docs/sdks/pokemoncolor/README.md#pokemoncolorread)

### [PokemonForm](docs/sdks/pokemonform/README.md)

* [PokemonFormList](docs/sdks/pokemonform/README.md#pokemonformlist)
* [PokemonFormRead](docs/sdks/pokemonform/README.md#pokemonformread)

### [PokemonHabitat](docs/sdks/pokemonhabitat/README.md)

* [PokemonHabitatList](docs/sdks/pokemonhabitat/README.md#pokemonhabitatlist)
* [PokemonHabitatRead](docs/sdks/pokemonhabitat/README.md#pokemonhabitatread)

### [PokemonShape](docs/sdks/pokemonshape/README.md)

* [PokemonShapeList](docs/sdks/pokemonshape/README.md#pokemonshapelist)
* [PokemonShapeRead](docs/sdks/pokemonshape/README.md#pokemonshaperead)

### [PokemonSpecies](docs/sdks/pokemonspecies/README.md)

* [PokemonSpeciesList](docs/sdks/pokemonspecies/README.md#pokemonspecieslist)
* [PokemonSpeciesRead](docs/sdks/pokemonspecies/README.md#pokemonspeciesread)

### [Region](docs/sdks/region/README.md)

* [RegionList](docs/sdks/region/README.md#regionlist)
* [RegionRead](docs/sdks/region/README.md#regionread)

### [Stat](docs/sdks/stat/README.md)

* [StatList](docs/sdks/stat/README.md#statlist)
* [StatRead](docs/sdks/stat/README.md#statread)

### [SuperContestEffect](docs/sdks/supercontesteffect/README.md)

* [SuperContestEffectList](docs/sdks/supercontesteffect/README.md#supercontesteffectlist)
* [SuperContestEffectRead](docs/sdks/supercontesteffect/README.md#supercontesteffectread)

### [Type](docs/sdks/type/README.md)

* [TypeList](docs/sdks/type/README.md#typelist)
* [TypeRead](docs/sdks/type/README.md#typeread)

### [Version](docs/sdks/version/README.md)

* [VersionList](docs/sdks/version/README.md#versionlist)
* [VersionRead](docs/sdks/version/README.md#versionread)

### [VersionGroup](docs/sdks/versiongroup/README.md)

* [VersionGroupList](docs/sdks/versiongroup/README.md#versiongrouplist)
* [VersionGroupRead](docs/sdks/versiongroup/README.md#versiongroupread)

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a `retry.Config` object to the call by using the `WithRetries` option:
```go
package main

import (
	"context"
	pokeapisdk "github.com/pokeapi/sdk"
	"github.com/pokeapi/sdk/retry"
	"log"
	"models/operations"
)

func main() {
	ctx := context.Background()

	s := pokeapisdk.New()

	res, err := s.Ability.AbilityList(ctx, nil, nil, operations.WithRetries(
		retry.Config{
			Strategy: "backoff",
			Backoff: &retry.BackoffStrategy{
				InitialInterval: 1,
				MaxInterval:     50,
				Exponent:        1.1,
				MaxElapsedTime:  100,
			},
			RetryConnectionErrors: false,
		}))
	if err != nil {
		log.Fatal(err)
	}
	if res.Res != nil {
		// handle response
	}
}

```

If you'd like to override the default retry strategy for all operations that support retries, you can use the `WithRetryConfig` option at SDK initialization:
```go
package main

import (
	"context"
	pokeapisdk "github.com/pokeapi/sdk"
	"github.com/pokeapi/sdk/retry"
	"log"
)

func main() {
	ctx := context.Background()

	s := pokeapisdk.New(
		pokeapisdk.WithRetryConfig(
			retry.Config{
				Strategy: "backoff",
				Backoff: &retry.BackoffStrategy{
					InitialInterval: 1,
					MaxInterval:     50,
					Exponent:        1.1,
					MaxElapsedTime:  100,
				},
				RetryConnectionErrors: false,
			}),
	)

	res, err := s.Ability.AbilityList(ctx, nil, nil)
	if err != nil {
		log.Fatal(err)
	}
	if res.Res != nil {
		// handle response
	}
}

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations. All operations return a response object or an error, they will never return both.

By Default, an API error will return `apierrors.APIError`. When custom error responses are specified for an operation, the SDK may also return their associated error. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation.

For example, the `AbilityList` function may return the following errors:

| Error Type         | Status Code | Content Type |
| ------------------ | ----------- | ------------ |
| apierrors.APIError | 4XX, 5XX    | \*/\*        |

### Example

```go
package main

import (
	"context"
	"errors"
	pokeapisdk "github.com/pokeapi/sdk"
	"github.com/pokeapi/sdk/models/apierrors"
	"log"
)

func main() {
	ctx := context.Background()

	s := pokeapisdk.New()

	res, err := s.Ability.AbilityList(ctx, nil, nil)
	if err != nil {

		var e *apierrors.APIError
		if errors.As(err, &e) {
			// handle error
			log.Fatal(e.Error())
		}
	}
}

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally using the `WithServerURL(serverURL string)` option when initializing the SDK client instance. For example:
```go
package main

import (
	"context"
	pokeapisdk "github.com/pokeapi/sdk"
	"log"
)

func main() {
	ctx := context.Background()

	s := pokeapisdk.New(
		pokeapisdk.WithServerURL("https://pokeapi.co/"),
	)

	res, err := s.Ability.AbilityList(ctx, nil, nil)
	if err != nil {
		log.Fatal(err)
	}
	if res.Res != nil {
		// handle response
	}
}

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Go SDK makes API calls that wrap an internal HTTP client. The requirements for the HTTP client are very simple. It must match this interface:

```go
type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}
```

The built-in `net/http` client satisfies this interface and a default client based on the built-in is provided by default. To replace this default with a client of your own, you can implement this interface yourself or provide your own client configured as desired. Here's a simple example, which adds a client with a 30 second timeout.

```go
import (
	"net/http"
	"time"

	"github.com/pokeapi/sdk"
)

var (
	httpClient = &http.Client{Timeout: 30 * time.Second}
	sdkClient  = pokeapisdk.New(pokeapisdk.WithClient(httpClient))
)
```

This can be a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration.
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=pokeapisdk&utm_campaign=go)

<style>
  :root {
    --badge-gray-bg: #f3f4f6;
    --badge-gray-border: #d1d5db;
    --badge-gray-text: #374151;
    --badge-blue-bg: #eff6ff;
    --badge-blue-border: #3b82f6;
    --badge-blue-text: #3b82f6;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --badge-gray-bg: #374151;
      --badge-gray-border: #4b5563;
      --badge-gray-text: #f3f4f6;
      --badge-blue-bg: #1e3a8a;
      --badge-blue-border: #3b82f6;
      --badge-blue-text: #93c5fd;
    }
  }
  
  h1 {
    border-bottom: none !important;
    margin-bottom: 4px;
    margin-top: 0;
    letter-spacing: 0.5px;
    font-weight: 600;
  }
  
  .badge-text {
    letter-spacing: 1px;
    font-weight: 300;
  }
  
  .badge-container {
    display: inline-flex;
    align-items: center;
    background: var(--badge-gray-bg);
    border: 1px solid var(--badge-gray-border);
    border-radius: 6px;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 11px;
    text-decoration: none;
    vertical-align: middle;
  }

  .badge-container.blue {
    background: var(--badge-blue-bg);
    border-color: var(--badge-blue-border);
  }

  .badge-icon-section {
    padding: 4px 8px;
    border-right: 1px solid var(--badge-gray-border);
    display: flex;
    align-items: center;
  }

  .badge-text-section {
    padding: 4px 10px;
    color: var(--badge-gray-text);
    font-weight: 400;
  }

  .badge-container.blue .badge-text-section {
    color: var(--badge-blue-text);
  }
  
  .badge-link {
    text-decoration: none;
    margin-left: 8px;
    display: inline-flex;
    vertical-align: middle;
  }

  .badge-link:hover {
    text-decoration: none;
  }
  
  .badge-link:first-child {
    margin-left: 0;
  }
  
  .badge-icon-section svg {
    color: var(--badge-gray-text);
  }

  .badge-container.blue .badge-icon-section svg {
    color: var(--badge-blue-text);
  }
</style> 