<!-- Start SDK Example Usage [usage] -->
```typescript
import { TrainTravelSDK } from "train-travel-sdk";

const trainTravelSDK = new TrainTravelSDK({
  oAuth2: process.env["TRAINTRAVELSDK_O_AUTH2"] ?? "",
});

async function run() {
  const result = await trainTravelSDK.stations.list({
    coordinates: "52.5200,13.4050",
    search: "Milano Centrale",
    country: "DE",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->