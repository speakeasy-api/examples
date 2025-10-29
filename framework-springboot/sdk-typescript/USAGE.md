<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.publications.listPublications();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->