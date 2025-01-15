<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gtd } from "@speakeasy-sdks/gtd";

const gtd = new Gtd();

async function run() {
  const result = await gtd.todos.create({
    title: "Buy cat food",
    description: "Finn is running low on tuna and chicken cans.",
    completed: false,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->