<!-- Start SDK Example Usage [usage] -->
```typescript
import { Acme } from "@acme/sdk";

const acme = new Acme();

async function run() {
  const result = await acme.getTodoById({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->