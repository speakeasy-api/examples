<!-- Start SDK Example Usage [usage] -->
```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.auth.getIdentity();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->