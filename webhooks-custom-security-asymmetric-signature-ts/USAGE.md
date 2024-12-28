<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "petstore";

const petstore = new Petstore();

async function run() {
  await petstore.addPet({
    id: "<id>",
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->