# PokemonReadResponseBody

Pokemon data


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ID`                                                             | **int64*                                                         | :heavy_minus_sign:                                               | The identifier for this resource                                 |
| `Name`                                                           | **string*                                                        | :heavy_minus_sign:                                               | The name for this resource                                       |
| `Height`                                                         | **int64*                                                         | :heavy_minus_sign:                                               | The height of this Pokemon in decimetres                         |
| `Weight`                                                         | **int64*                                                         | :heavy_minus_sign:                                               | The weight of this Pokemon in hectograms                         |
| `BaseExperience`                                                 | **int64*                                                         | :heavy_minus_sign:                                               | The base experience gained for defeating this Pokemon            |
| `Order`                                                          | **int64*                                                         | :heavy_minus_sign:                                               | Order for sorting                                                |
| `IsDefault`                                                      | **bool*                                                          | :heavy_minus_sign:                                               | Set for exactly one Pokemon used as the default for each species |
| `LocationAreaEncounters`                                         | **string*                                                        | :heavy_minus_sign:                                               | A link to a list of location area encounters for this Pokemon    |
| `Stats`                                                          | [][operations.Stat](../../models/operations/stat.md)             | :heavy_minus_sign:                                               | A list of base stat values for this Pokemon                      |
| `Types`                                                          | [][operations.Type](../../models/operations/type.md)             | :heavy_minus_sign:                                               | A list of the types this Pokemon has                             |
| `Abilities`                                                      | [][operations.Ability](../../models/operations/ability.md)       | :heavy_minus_sign:                                               | A list of abilities this Pokemon could potentially have          |
| `Sprites`                                                        | [*operations.Sprites](../../models/operations/sprites.md)        | :heavy_minus_sign:                                               | A set of sprites used to depict this Pokemon in the game         |
| `Species`                                                        | [*operations.Species](../../models/operations/species.md)        | :heavy_minus_sign:                                               | The species this Pokemon belongs to                              |