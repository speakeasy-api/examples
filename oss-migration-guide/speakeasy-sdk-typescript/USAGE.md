<!-- Start SDK Example Usage [usage] -->
```typescript
import { CoffeeExampleApiSDK } from "coffee-example-api-sdk";

const coffeeExampleApiSDK = new CoffeeExampleApiSDK();

async function run() {
  const result = await coffeeExampleApiSDK.getOrdersOrdersGet({
    coffeeType: "Latte",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->