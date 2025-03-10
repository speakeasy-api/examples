<!-- Start SDK Example Usage [usage] -->
```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.auth.validateApiKey();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->