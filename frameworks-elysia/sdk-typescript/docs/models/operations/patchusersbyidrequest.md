# PatchUsersByIdRequest

## Example Usage

```typescript
import { PatchUsersByIdRequest } from "sdk/models/operations";

let value: PatchUsersByIdRequest = {
  id: "1",
  requestBody: {
    age: 21,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 1                                                                                            |
| `requestBody`                                                                                | [operations.PatchUsersByIdRequestBody](../../models/operations/patchusersbyidrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          | {<br/>"age": 21<br/>}                                                                        |