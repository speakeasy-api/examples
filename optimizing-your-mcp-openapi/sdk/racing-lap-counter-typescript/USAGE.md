<!-- Start SDK Example Usage [usage] -->
```typescript
import { RacingLapCounter } from "racing-lap-counter";

const racingLapCounter = new RacingLapCounter();

async function run() {
  const result = await racingLapCounter.root.getWelcomeMessage();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->