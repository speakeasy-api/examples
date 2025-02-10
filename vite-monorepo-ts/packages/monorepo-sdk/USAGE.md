<!-- Start SDK Example Usage [usage] -->
```typescript
import { GhAcme } from "@disintegrator/httpbin-client";

async function run() {
    const sdk = new GhAcme();

    const result = await sdk.generateUUID();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->