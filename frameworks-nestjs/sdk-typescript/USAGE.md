<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.resources.stations.getStations({
    oAuth2: process.env["SDK_O_AUTH2"] ?? "",
  }, {});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->