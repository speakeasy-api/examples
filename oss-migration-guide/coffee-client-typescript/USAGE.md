<!-- Start SDK Example Usage [usage] -->
```typescript
import { CoffeeClient } from "coffee-client";

const coffeeClient = new CoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await coffeeClient.orders.list({
    coffeeType: "Latte",
  });

  // Handle the result
  console.log(result);
}

run();

```

```typescript
import { CoffeeClient } from "coffee-client";

const coffeeClient = new CoffeeClient({
  apiKeyAuth: "your-api-key-here",
});

async function run() {
  const result = await coffeeClient.orders.create({
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