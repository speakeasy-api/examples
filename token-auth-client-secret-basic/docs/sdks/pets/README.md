# Pets
(*pets*)

## Overview

### Available Operations

* [add](#add)

## add

### Example Usage

```typescript
import { TokenAuthClientSecretBasic } from "token-auth-client-secret-basic";

const tokenAuthClientSecretBasic = new TokenAuthClientSecretBasic({
  security: {
    clientID: process.env["TOKENAUTHCLIENTSECRETBASIC_CLIENT_ID"] ?? "",
    clientSecret: process.env["TOKENAUTHCLIENTSECRETBASIC_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await tokenAuthClientSecretBasic.pets.add({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TokenAuthClientSecretBasicCore } from "token-auth-client-secret-basic/core.js";
import { petsAdd } from "token-auth-client-secret-basic/funcs/petsAdd.js";

// Use `TokenAuthClientSecretBasicCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const tokenAuthClientSecretBasic = new TokenAuthClientSecretBasicCore({
  security: {
    clientID: process.env["TOKENAUTHCLIENTSECRETBASIC_CLIENT_ID"] ?? "",
    clientSecret: process.env["TOKENAUTHCLIENTSECRETBASIC_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await petsAdd(tokenAuthClientSecretBasic, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Pet](../../models/components/pet.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |