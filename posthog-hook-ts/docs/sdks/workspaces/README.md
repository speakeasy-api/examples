# Workspaces
(*workspaces*)

## Overview

REST APIs for managing Workspaces (speakeasy tenancy)

### Available Operations

* [getAll](#getall) - Get workspaces for a user
* [get](#get) - Get workspace by context
* [create](#create) - Create a workspace
* [getByID](#getbyid) - Get workspace
* [update](#update) - Update workspace details
* [getSettings](#getsettings) - Get workspace settings
* [updateSettings](#updatesettings) - Update workspace settings
* [getTeam](#getteam) - Get team members for a particular workspace
* [grantAccess](#grantaccess) - Grant a user access to a particular workspace
* [revokeAccess](#revokeaccess) - Revoke a user's access to a particular workspace
* [getTokens](#gettokens) - Get tokens for a particular workspace
* [createToken](#createtoken) - Create a token for a particular workspace
* [deleteToken](#deletetoken) - Delete a token for a particular workspace
* [setFeatureFlags](#setfeatureflags) - Set workspace feature flags
* [getFeatureFlags](#getfeatureflags) - Get workspace feature flags

## getAll

Returns a list of workspaces a user has access too

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.getAll();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGetAll } from "speakeasy/funcs/workspacesGetAll.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGetAll(speakeasy);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Workspace[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## get

Get information about a particular workspace by context.

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.get();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGet } from "speakeasy/funcs/workspacesGet.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGet(speakeasy);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkspaceAndOrganization](../../models/components/workspaceandorganization.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## create

Creates a workspace

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.create({
    createdAt: new Date("2024-06-17T07:14:55.338Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-11-30T17:06:07.804Z"),
    verified: true,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesCreate } from "speakeasy/funcs/workspacesCreate.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesCreate(speakeasy, {
    createdAt: new Date("2024-06-17T07:14:55.338Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-11-30T17:06:07.804Z"),
    verified: true,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Workspace](../../models/components/workspace.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Workspace](../../models/components/workspace.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getByID

Get information about a particular workspace.

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.getByID({
    workspaceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGetByID } from "speakeasy/funcs/workspacesGetByID.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGetByID(speakeasy, {
    workspaceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceRequest](../../models/operations/getworkspacerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Workspace](../../models/components/workspace.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## update

Update information about a particular workspace.

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.workspaces.update({
    workspaceId: "<id>",
    workspace: {
      createdAt: new Date("2025-07-28T19:04:48.565Z"),
      id: "<id>",
      name: "<value>",
      organizationId: "<id>",
      slug: "<value>",
      updatedAt: new Date("2024-10-16T10:52:42.015Z"),
      verified: true,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesUpdate } from "speakeasy/funcs/workspacesUpdate.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesUpdate(speakeasy, {
    workspaceId: "<id>",
    workspace: {
      createdAt: new Date("2025-07-28T19:04:48.565Z"),
      id: "<id>",
      name: "<value>",
      organizationId: "<id>",
      slug: "<value>",
      updatedAt: new Date("2024-10-16T10:52:42.015Z"),
      verified: true,
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateWorkspaceDetailsRequest](../../models/operations/updateworkspacedetailsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getSettings

Get settings about a particular workspace.

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.getSettings({
    workspaceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGetSettings } from "speakeasy/funcs/workspacesGetSettings.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGetSettings(speakeasy, {
    workspaceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceSettingsRequest](../../models/operations/getworkspacesettingsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkspaceSettings](../../models/components/workspacesettings.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## updateSettings

Update settings about a particular workspace.

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.workspaces.updateSettings({
    workspaceId: "<id>",
    workspaceSettings: {
      workspaceId: "<id>",
      webhookUrl: "https://last-suspension.info/",
      createdAt: new Date("2024-12-28T06:46:35.807Z"),
      updatedAt: new Date("2025-02-03T10:37:56.725Z"),
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesUpdateSettings } from "speakeasy/funcs/workspacesUpdateSettings.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesUpdateSettings(speakeasy, {
    workspaceId: "<id>",
    workspaceSettings: {
      workspaceId: "<id>",
      webhookUrl: "https://last-suspension.info/",
      createdAt: new Date("2024-12-28T06:46:35.807Z"),
      updatedAt: new Date("2025-02-03T10:37:56.725Z"),
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateWorkspaceSettingsRequest](../../models/operations/updateworkspacesettingsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getTeam

Get team members for a particular workspace

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.getTeam({
    workspaceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGetTeam } from "speakeasy/funcs/workspacesGetTeam.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGetTeam(speakeasy, {
    workspaceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceTeamRequest](../../models/operations/getworkspaceteamrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkspaceTeamResponse](../../models/components/workspaceteamresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## grantAccess

Grant a user access to a particular workspace

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.grantAccess({
    workspaceId: "<id>",
    email: "Lucinda.Batz8@hotmail.com",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGrantAccess } from "speakeasy/funcs/workspacesGrantAccess.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGrantAccess(speakeasy, {
    workspaceId: "<id>",
    email: "Lucinda.Batz8@hotmail.com",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GrantUserAccessToWorkspaceRequest](../../models/operations/grantuseraccesstoworkspacerequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkspaceInviteResponse](../../models/components/workspaceinviteresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## revokeAccess

Revoke a user's access to a particular workspace

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.workspaces.revokeAccess({
    workspaceId: "<id>",
    userId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesRevokeAccess } from "speakeasy/funcs/workspacesRevokeAccess.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesRevokeAccess(speakeasy, {
    workspaceId: "<id>",
    userId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.RevokeUserAccessToWorkspaceRequest](../../models/operations/revokeuseraccesstoworkspacerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getTokens

Get tokens for a particular workspace

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.getTokens({
    workspaceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGetTokens } from "speakeasy/funcs/workspacesGetTokens.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGetTokens(speakeasy, {
    workspaceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceTokensRequest](../../models/operations/getworkspacetokensrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkspaceToken[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## createToken

Create a token for a particular workspace

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.workspaces.createToken({
    workspaceId: "<id>",
    workspaceToken: {
      id: "<id>",
      name: "<value>",
      workspaceId: "<id>",
      alg: "<value>",
      key: "<key>",
      createdAt: new Date("2023-08-16T02:33:00.784Z"),
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesCreateToken } from "speakeasy/funcs/workspacesCreateToken.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesCreateToken(speakeasy, {
    workspaceId: "<id>",
    workspaceToken: {
      id: "<id>",
      name: "<value>",
      workspaceId: "<id>",
      alg: "<value>",
      key: "<key>",
      createdAt: new Date("2023-08-16T02:33:00.784Z"),
    },
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
| `request`                                                                                                                                                                      | [operations.CreateWorkspaceTokenRequest](../../models/operations/createworkspacetokenrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteToken

Delete a token for a particular workspace

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  await speakeasy.workspaces.deleteToken({
    workspaceId: "<id>",
    tokenID: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesDeleteToken } from "speakeasy/funcs/workspacesDeleteToken.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesDeleteToken(speakeasy, {
    workspaceId: "<id>",
    tokenID: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteWorkspaceTokenRequest](../../models/operations/deleteworkspacetokenrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## setFeatureFlags

Set workspace feature flags

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.setFeatureFlags({
    featureFlags: [
      "skip_schema_registry",
      "webhooks",
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesSetFeatureFlags } from "speakeasy/funcs/workspacesSetFeatureFlags.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesSetFeatureFlags(speakeasy, {
    featureFlags: [
      "skip_schema_registry",
      "webhooks",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.WorkspaceFeatureFlagRequest](../../models/components/workspacefeatureflagrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkspaceFeatureFlagResponse](../../models/components/workspacefeatureflagresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 5XX              | application/json |
| errors.APIError  | 4XX              | \*/\*            |

## getFeatureFlags

Get workspace feature flags

### Example Usage

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.workspaces.getFeatureFlags({
    workspaceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyCore } from "speakeasy/core.js";
import { workspacesGetFeatureFlags } from "speakeasy/funcs/workspacesGetFeatureFlags.js";

// Use `SpeakeasyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasy = new SpeakeasyCore();

async function run() {
  const res = await workspacesGetFeatureFlags(speakeasy, {
    workspaceId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceFeatureFlagsRequest](../../models/operations/getworkspacefeatureflagsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkspaceFeatureFlagResponse](../../models/components/workspacefeatureflagresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 5XX              | application/json |
| errors.APIError  | 4XX              | \*/\*            |