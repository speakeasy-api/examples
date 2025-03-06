<!-- Start SDK Example Usage [usage] -->
```typescript
import { Store } from "store";

const store = new Store({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await store.createProduct({
    name: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->