<!-- Start SDK Example Usage [usage] -->
```typescript
import { AcmeTodoApi } from "@acme/todo-sdk";

const acmeTodoApi = new AcmeTodoApi();

async function run() {
  const result = await acmeTodoApi.getTodoById({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->