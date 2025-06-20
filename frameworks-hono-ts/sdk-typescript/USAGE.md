<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.users.getUsers();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->