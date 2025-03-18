<!-- Start SDK Example Usage [usage] -->
```typescript
import { MswExample } from "msw-example";

const mswExample = new MswExample();

async function run() {
  const result = await mswExample.getPing({
    message: "Hello, world!",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->