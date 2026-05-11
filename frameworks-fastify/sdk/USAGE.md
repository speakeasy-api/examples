<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  oAuth2: "<YOUR_O_AUTH2_HERE>",
});

async function run() {
  const result = await sdk.health.getHealth();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->