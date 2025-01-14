<!-- Start SDK Example Usage [usage] -->
```typescript
import { PetStore } from "petstore";

const petStore = new PetStore();

async function run() {
  const result = await petStore.createPetCanine({
    id: "<id>",
    breed: "<value>",
    length: 5115.23,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->