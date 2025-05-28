<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyCoffeeClient } from "speakeasy-coffee-client";

const speakeasyCoffeeClient = new SpeakeasyCoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await speakeasyCoffeeClient.orders.list({
    coffeeType: "Latte",
  });

  // Handle the result
  console.log(result);
}

run();

```

```typescript
import { SpeakeasyCoffeeClient } from "speakeasy-coffee-client";

const speakeasyCoffeeClient = new SpeakeasyCoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await speakeasyCoffeeClient.orders.create({
    id: 3,
    customerName: "Charlie",
    coffeeType: "Americano",
    size: "Large",
    price: 3.75,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->