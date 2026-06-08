<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  oAuth2: process.env["SDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await sdk.stations.getStations({
    coordinates: "52.5200,13.4050",
    search: "Milano Centrale",
    country: "DE",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->