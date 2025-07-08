<!-- Start SDK Example Usage [usage] -->
```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.listBurgers();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->