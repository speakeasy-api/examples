# Subscriptions
(*subscriptions*)

## Overview

REST APIs for managing subscriptions

### Available Operations

* [ignoreSubscriptionNamespace](#ignoresubscriptionnamespace) - Ignored a namespace for a subscription
* [activateSubscriptionNamespace](#activatesubscriptionnamespace) - Activate an ignored namespace for a subscription

## ignoreSubscriptionNamespace

Ignored a namespace for a subscription

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.subscriptions.ignoreSubscriptionNamespace({
    subscriptionID: "<id>",
    namespaceName: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { subscriptionsIgnoreSubscriptionNamespace } from "speakeasy/funcs/subscriptionsIgnoreSubscriptionNamespace.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await subscriptionsIgnoreSubscriptionNamespace(speakeasy, {
    subscriptionID: "<id>",
    namespaceName: "<value>",
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
| `request`                                                                                                                                                                      | [operations.IgnoreSubscriptionNamespaceRequest](../../models/operations/ignoresubscriptionnamespacerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## activateSubscriptionNamespace

Activate an ignored namespace for a subscription

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.subscriptions.activateSubscriptionNamespace({
    subscriptionID: "<id>",
    namespaceName: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { subscriptionsActivateSubscriptionNamespace } from "speakeasy/funcs/subscriptionsActivateSubscriptionNamespace.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await subscriptionsActivateSubscriptionNamespace(speakeasy, {
    subscriptionID: "<id>",
    namespaceName: "<value>",
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
| `request`                                                                                                                                                                      | [operations.ActivateSubscriptionNamespaceRequest](../../models/operations/activatesubscriptionnamespacerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |