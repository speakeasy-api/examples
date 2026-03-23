<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
    const result = await sdk.orders.placeOrder({
        id: "<id>",
        customerId: "<value>",
        items: [
            {
                id: "<id>",
                title: "<value>",
                publishDate: new Date("2024-07-07T11:02:43.309Z"),
                price: 435.32,
                type: "Book",
                author: "<value>",
                isbn: "<value>",
            },
        ],
        totalPrice: 8499.45,
        status: "Shipped",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->