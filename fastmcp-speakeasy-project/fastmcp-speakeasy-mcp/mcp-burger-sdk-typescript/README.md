# mcp-burger-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *mcp-burger-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=mcp-burger-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/ritza-rzx/ritza). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

APItizing Burgers API: A simple API to manage burgers and orders

This API is used to manage burgers and orders in a restaurant
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [mcp-burger-sdk](#mcp-burger-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
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

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "McpBurgerSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "mcp-burger-sdk",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "McpBurgerSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "mcp-burger-sdk",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package mcp-burger-sdk -- mcp start --help
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
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK();

async function run() {
  const result = await mcpBurgerSDK.webhookOrderStatusChanged({
    burgerIds: [
      1,
      2,
    ],
    id: 1,
    note: "No onions",
    status: "DELIVERED",
    table: 1,
    time: new Date("2021-01-01T12:00:00"),
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable   |
| -------- | ------ | ------- | ---------------------- |
| `apiKey` | apiKey | API key | `MCPBURGERSDK_API_KEY` |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [burger](docs/sdks/burger/README.md)

* [listBurgers](docs/sdks/burger/README.md#listburgers) - List Burgers
* [createBurger](docs/sdks/burger/README.md#createburger) - Create Burger
* [deleteBurger](docs/sdks/burger/README.md#deleteburger) - Delete Burger
* [readBurger](docs/sdks/burger/README.md#readburger) - Read Burger
* [updateBurger](docs/sdks/burger/README.md#updateburger) - Update Burger


### [order](docs/sdks/order/README.md)

* [listOrders](docs/sdks/order/README.md#listorders) - List Orders
* [createOrder](docs/sdks/order/README.md#createorder) - Create Order
* [readOrder](docs/sdks/order/README.md#readorder) - Read Order
* [updateOrder](docs/sdks/order/README.md#updateorder) - Update Order

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

- [`burgerCreateBurger`](docs/sdks/burger/README.md#createburger) - Create Burger
- [`burgerDeleteBurger`](docs/sdks/burger/README.md#deleteburger) - Delete Burger
- [`burgerListBurgers`](docs/sdks/burger/README.md#listburgers) - List Burgers
- [`burgerReadBurger`](docs/sdks/burger/README.md#readburger) - Read Burger
- [`burgerUpdateBurger`](docs/sdks/burger/README.md#updateburger) - Update Burger
- [`orderCreateOrder`](docs/sdks/order/README.md#createorder) - Create Order
- [`orderListOrders`](docs/sdks/order/README.md#listorders) - List Orders
- [`orderReadOrder`](docs/sdks/order/README.md#readorder) - Read Order
- [`orderUpdateOrder`](docs/sdks/order/README.md#updateorder) - Update Order

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.listBurgers({
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

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
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
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.listBurgers();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

This table shows properties which are common on error classes. For full details see [error classes](#error-classes).

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.name`        | `string`   | Error class name eg `APIError`                                                          |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP status code eg `404`                                                               |
| `error.contentType` | `string`   | HTTP content type eg `application/json`                                                 |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response. Access to headers and more.                                          |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";
import * as errors from "mcp-burger-sdk/models/errors";

const mcpBurgerSDK = new McpBurgerSDK({
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await mcpBurgerSDK.burger.createBurger({
      description: "A classic cheeseburger",
      name: "Cheeseburger",
    });

    console.log(result);
  } catch (error) {
    // Depending on the method different errors may be thrown
    if (error instanceof errors.HTTPValidationError) {
      console.log(error.message);
      console.log(error.data$.detail); // ValidationError[]
    }

    // Fallback error class, if no other more specific error class is matched
    if (error instanceof errors.APIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.rawResponse.headers);
    }
  }
}

run();

```

### Error Classes
* `APIError`: The fallback error class, if no other more specific error class is matched.
* `SDKValidationError`: Type mismatch between the data returned from the server and the structure expected by the SDK. This can also be thrown for invalid method arguments. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.
* Network errors:
    * `ConnectionError`: HTTP client was unable to make a request to a server.
    * `RequestTimeoutError`: HTTP request timed out due to an AbortSignal signal.
    * `RequestAbortedError`: HTTP request was aborted by the client.
    * `InvalidRequestError`: Any input used to create a request is invalid.
    * `UnexpectedClientError`: Unrecognised or unexpected error.
* Less common errors, applicable to a subset of methods:
    * [`HTTPValidationError`](docs/models/errors/httpvalidationerror.md): Validation Error. Status code `422`. Applicable to 7 of 9 methods.*
    * [`ResponseMessageError`](docs/models/errors/responsemessageerror.md): A response message. Status code `404`. Applicable to 5 of 9 methods.*


\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const mcpBurgerSDK = new McpBurgerSDK({
  serverURL: "http://127.0.0.1:8000",
  apiKey: process.env["MCPBURGERSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await mcpBurgerSDK.burger.listBurgers();

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
import { McpBurgerSDK } from "mcp-burger-sdk";
import { HTTPClient } from "mcp-burger-sdk/lib/http";

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

const sdk = new McpBurgerSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { McpBurgerSDK } from "mcp-burger-sdk";

const sdk = new McpBurgerSDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `MCPBURGERSDK_DEBUG` to true.
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=mcp-burger-sdk&utm_campaign=typescript)
