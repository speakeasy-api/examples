# PetCreated

## Example Usage

```typescript
import { PetCreated } from "petstore/models/components";

let value: PetCreated = {
  type: "pet.created",
  pet: {
    id: "<id>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | N/A                                                |
| `pet`                                              | [components.Pet](../../models/components/pet.md)   | :heavy_check_mark:                                 | N/A                                                |