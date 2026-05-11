# CreateBookingPaymentRequest

## Example Usage

```typescript
import { CreateBookingPaymentRequest } from "openapi/sdk/models/operations";

let value: CreateBookingPaymentRequest = {
  requestBody: {
    amount: 6927.89,
    currency: "bam",
    source: {
      accountType: "individual",
      bankName: "<value>",
      country: "Cuba",
      name: "<value>",
      number: "<value>",
      object: "bank_account",
    },
  },
  bookingId: "f96303b9-f84a-49a9-af61-d995e87b41a1",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                   | [operations.CreateBookingPaymentRequestBody](../../../sdk/models/operations/createbookingpaymentrequestbody.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `bookingId`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |