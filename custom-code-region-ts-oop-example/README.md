# Example Notes

This is an example of a Speakeasy-generated TypeScript SDK that uses _Custom
Code Regions_ to add a multiple methods to the SDK client.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Global Parameters](#global-parameters)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "API": {
      "command": "npx",
      "args": [
        "-y", "--package", "API",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--tenant", "...",
        "--tenant-id", "...",
        "--database-name", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Go to `Cursor Settings > Features > MCP Servers > Add new MCP server` and use the following settings:

- Name: API
- Type: `command`
- Command:
```sh
npx -y --package API -- mcp start --api-key ... --tenant ... --tenant-id ... --database-name ... 
```

</details>

For a full list of server arguments, run:

```sh
npx -y --package API -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.auth.getIdentity();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable |
| -------- | ------ | ------- | -------------------- |
| `apiKey` | apiKey | API key | `API_API_KEY`     |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.auth.getIdentity();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [auth](docs/sdks/auth/README.md)

* [getIdentity](docs/sdks/auth/README.md#getidentity) - Retrieves the current user's identity, tenant, and databases.


### [collections](docs/sdks/collections/README.md)

* [list](docs/sdks/collections/README.md#list) - Lists all collections in the specified database.
* [create](docs/sdks/collections/README.md#create) - Creates a new collection under the specified database.
* [get](docs/sdks/collections/README.md#get) - Retrieves a collection by ID or name.
* [update](docs/sdks/collections/README.md#update) - Updates an existing collection's name or metadata.
* [delete](docs/sdks/collections/README.md#delete) - Deletes a collection in a given database.
* [countRecords](docs/sdks/collections/README.md#countrecords) - Retrieves the number of records in a collection.
* [retrieveRecords](docs/sdks/collections/README.md#retrieverecords) - Retrieves records from a collection by ID or metadata filter.
* [query](docs/sdks/collections/README.md#query) - Query a collection in a variety of ways, including vector search, metadata filtering, and full-text search
* [count](docs/sdks/collections/README.md#count) - Retrieves the total number of collections in a given database.
* [add](docs/sdks/collections/README.md#add) - Adds records to a collection.
* [deleteRecords](docs/sdks/collections/README.md#deleterecords) - Deletes records in a collection. Can filter by IDs or metadata.
* [updateById](docs/sdks/collections/README.md#updatebyid) - Updates records in a collection by ID.
* [upsert](docs/sdks/collections/README.md#upsert) - Upserts records in a collection (create if not exists, otherwise update).

### [databases](docs/sdks/databases/README.md)

* [list](docs/sdks/databases/README.md#list) - Lists all databases for a given tenant.
* [create](docs/sdks/databases/README.md#create) - Creates a new database for a given tenant.
* [get](docs/sdks/databases/README.md#get) - Retrieves a specific database by name.
* [delete](docs/sdks/databases/README.md#delete) - Deletes a specific database.

### [system](docs/sdks/system/README.md)

* [getHealthcheck](docs/sdks/system/README.md#gethealthcheck) - Health check endpoint that returns 200 if the server and executor are ready
* [getHeartbeat](docs/sdks/system/README.md#getheartbeat) - Heartbeat endpoint that returns a nanosecond timestamp of the current time. Useful for making sure the client remains connected.
* [getPreFlightChecks](docs/sdks/system/README.md#getpreflightchecks) - Pre-flight checks endpoint reporting basic readiness info.
* [reset](docs/sdks/system/README.md#reset) - Reset endpoint allowing authorized users to reset the database.
* [getVersion](docs/sdks/system/README.md#getversion) - Returns the version of the server.

### [tenants](docs/sdks/tenants/README.md)

* [create](docs/sdks/tenants/README.md#create) - Creates a new tenant.
* [get](docs/sdks/tenants/README.md#get) - Returns an existing tenant by name.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authGetIdentity`](docs/sdks/auth/README.md#getidentity) - Retrieves the current user's identity, tenant, and databases.
- [`collectionsAdd`](docs/sdks/collections/README.md#add) - Adds records to a collection.
- [`collectionsCount`](docs/sdks/collections/README.md#count) - Retrieves the total number of collections in a given database.
- [`collectionsCountRecords`](docs/sdks/collections/README.md#countrecords) - Retrieves the number of records in a collection.
- [`collectionsCreate`](docs/sdks/collections/README.md#create) - Creates a new collection under the specified database.
- [`collectionsDelete`](docs/sdks/collections/README.md#delete) - Deletes a collection in a given database.
- [`collectionsDeleteRecords`](docs/sdks/collections/README.md#deleterecords) - Deletes records in a collection. Can filter by IDs or metadata.
- [`collectionsGet`](docs/sdks/collections/README.md#get) - Retrieves a collection by ID or name.
- [`collectionsList`](docs/sdks/collections/README.md#list) - Lists all collections in the specified database.
- [`collectionsQuery`](docs/sdks/collections/README.md#query) - Query a collection in a variety of ways, including vector search, metadata filtering, and full-text search
- [`collectionsRetrieveRecords`](docs/sdks/collections/README.md#retrieverecords) - Retrieves records from a collection by ID or metadata filter.
- [`collectionsUpdate`](docs/sdks/collections/README.md#update) - Updates an existing collection's name or metadata.
- [`collectionsUpdateById`](docs/sdks/collections/README.md#updatebyid) - Updates records in a collection by ID.
- [`collectionsUpsert`](docs/sdks/collections/README.md#upsert) - Upserts records in a collection (create if not exists, otherwise update).
- [`databasesCreate`](docs/sdks/databases/README.md#create) - Creates a new database for a given tenant.
- [`databasesDelete`](docs/sdks/databases/README.md#delete) - Deletes a specific database.
- [`databasesGet`](docs/sdks/databases/README.md#get) - Retrieves a specific database by name.
- [`databasesList`](docs/sdks/databases/README.md#list) - Lists all databases for a given tenant.
- [`systemGetHealthcheck`](docs/sdks/system/README.md#gethealthcheck) - Health check endpoint that returns 200 if the server and executor are ready
- [`systemGetHeartbeat`](docs/sdks/system/README.md#getheartbeat) - Heartbeat endpoint that returns a nanosecond timestamp of the current time. Useful for making sure the client remains connected.
- [`systemGetPreFlightChecks`](docs/sdks/system/README.md#getpreflightchecks) - Pre-flight checks endpoint reporting basic readiness info.
- [`systemGetVersion`](docs/sdks/system/README.md#getversion) - Returns the version of the server.
- [`systemReset`](docs/sdks/system/README.md#reset) - Reset endpoint allowing authorized users to reset the database.
- [`tenantsCreate`](docs/sdks/tenants/README.md#create) - Creates a new tenant.
- [`tenantsGet`](docs/sdks/tenants/README.md#get) - Returns an existing tenant by name.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `tenant` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `list`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.
Global parameters can also be set via environment variable.

| Name         | Type   | Description                 | Environment          |
| ------------ | ------ | --------------------------- | -------------------- |
| tenant       | string | The tenant parameter.       | API_TENANT        |
| tenantId     | string | The tenantId parameter.     | API_TENANT_ID     |
| databaseName | string | The databaseName parameter. | API_DATABASE_NAME |

### Example

```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.databases.list({
    tenantId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { API } from "API";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.auth.getIdentity({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { API } from "API";

const API = new API({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.auth.getIdentity();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getIdentity` method may throw the following errors:

| Error Type           | Status Code | Content Type     |
| -------------------- | ----------- | ---------------- |
| errors.ErrorResponse | 500         | application/json |
| errors.APIError      | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { API } from "API";
import { ErrorResponse, SDKValidationError } from "API/models/errors";

const API = new API({
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await API.auth.getIdentity();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                            | Description                                        |
| --- | --------------------------------- | -------------------------------------------------- |
| 0   | `https://api.API.com/`         | Production server for API's API.                |
| 1   | `https://sandbox-api.API.com/` | Sandbox server for testing API's API endpoints. |

#### Example

```typescript
import { API } from "API";

const API = new API({
  serverIdx: 1,
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.auth.getIdentity();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { API } from "API";

const API = new API({
  serverURL: "https://api.API.com/",
  apiKey: process.env["API_API_KEY"] ?? "",
});

async function run() {
  const result = await API.auth.getIdentity();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { API } from "API";
import { HTTPClient } from "API/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new API({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { API } from "API";

const sdk = new API({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `API_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=API&utm_campaign=typescript)
