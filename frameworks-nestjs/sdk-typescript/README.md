# sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />

<!-- Start Summary [summary] -->
## Summary

Train Travel API: Find stations, discover trips, and create bookings across Europe.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
- [sdk](#sdk)
  - [Summary](#summary)
  - [Table of Contents](#table-of-contents)
  - [SDK Installation](#sdk-installation)
    - [NPM](#npm)
    - [PNPM](#pnpm)
    - [Bun](#bun)
    - [Yarn](#yarn)
  - [Requirements](#requirements)
  - [SDK Example Usage](#sdk-example-usage)
    - [Example](#example)
  - [Authentication](#authentication)
    - [Per-Client Security Schemes](#per-client-security-schemes)
    - [Per-Operation Security Schemes](#per-operation-security-schemes)
  - [Available Resources and Operations](#available-resources-and-operations)
    - [Resources.Bookings](#resourcesbookings)
    - [Resources.Stations](#resourcesstations)
    - [Resources.Trips](#resourcestrips)
  - [Standalone functions](#standalone-functions)
  - [Retries](#retries)
  - [Error Handling](#error-handling)
    - [Example](#example-1)
    - [Error Classes](#error-classes)
  - [Server Selection](#server-selection)
    - [Select Server by Index](#select-server-by-index)
      - [Example](#example-2)
    - [Override Server URL Per-Client](#override-server-url-per-client)
  - [Custom HTTP Client](#custom-http-client)
  - [Debugging](#debugging)
- [Development](#development)
  - [Maturity](#maturity)
  - [Contributions](#contributions)
    - [SDK Created by Speakeasy](#sdk-created-by-speakeasy)

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
yarn add <UNSET>
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
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.resources.stations.getStations({
    oAuth2: process.env["SDK_O_AUTH2"] ?? "",
  }, {});

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
| `oAuth2` | apiKey | API key | `SDK_O_AUTH2`        |

To authenticate with the API the `oAuth2` parameter must be set when initializing the SDK client instance. For example:


### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.resources.stations.getStations({}, {});

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Resources.Bookings](docs/sdks/bookings/README.md)

* [listBookings](docs/sdks/bookings/README.md#listbookings) - List existing bookings
* [createBooking](docs/sdks/bookings/README.md#createbooking) - Create a booking
* [getBooking](docs/sdks/bookings/README.md#getbooking) - Get a booking
* [deleteBooking](docs/sdks/bookings/README.md#deletebooking) - Delete a booking
* [createPayment](docs/sdks/bookings/README.md#createpayment) - Pay for a booking

### [Resources.Stations](docs/sdks/stations/README.md)

* [getStations](docs/sdks/stations/README.md#getstations) - Get a list of train stations

### [Resources.Trips](docs/sdks/trips/README.md)

* [getTrips](docs/sdks/trips/README.md#gettrips) - Get available train trips

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

- [`resourcesBookingsCreateBooking`](docs/sdks/bookings/README.md#createbooking) - Create a booking
- [`resourcesBookingsCreatePayment`](docs/sdks/bookings/README.md#createpayment) - Pay for a booking
- [`resourcesBookingsDeleteBooking`](docs/sdks/bookings/README.md#deletebooking) - Delete a booking
- [`resourcesBookingsGetBooking`](docs/sdks/bookings/README.md#getbooking) - Get a booking
- [`resourcesBookingsListBookings`](docs/sdks/bookings/README.md#listbookings) - List existing bookings
- [`resourcesStationsGetStations`](docs/sdks/stations/README.md#getstations) - Get a list of train stations
- [`resourcesTripsGetTrips`](docs/sdks/trips/README.md#gettrips) - Get available train trips

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.resources.stations.getStations(
    {
      oAuth2: process.env["SDK_O_AUTH2"] ?? "",
    },
    {},
    {
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
    },
  );

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
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
});

async function run() {
  const result = await sdk.resources.stations.getStations({
    oAuth2: process.env["SDK_O_AUTH2"] ?? "",
  }, {});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SDKBaseError`](./src/models/errors/sdkbaseerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { SDK } from "sdk";
import * as errors from "sdk/models/errors";

const sdk = new SDK();

async function run() {
  try {
    const result = await sdk.resources.stations.getStations({
      oAuth2: process.env["SDK_O_AUTH2"] ?? "",
    }, {});

    console.log(result);
  } catch (error) {
    if (error instanceof errors.SDKBaseError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`SDKBaseError`](./src/models/errors/sdkbaseerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SDKBaseError`](./src/models/errors/sdkbaseerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                    | Description              |
| --- | ------------------------- | ------------------------ |
| 0   | `https://api.example.com` | Production server        |
| 1   | `http://localhost:3000`   | Local development server |

#### Example

```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  serverIdx: 0,
});

async function run() {
  const result = await sdk.resources.stations.getStations({
    oAuth2: process.env["SDK_O_AUTH2"] ?? "",
  }, {});

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "sdk";

const sdk = new SDK({
  serverURL: "http://localhost:3000",
});

async function run() {
  const result = await sdk.resources.stations.getStations({
    oAuth2: process.env["SDK_O_AUTH2"] ?? "",
  }, {});

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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { SDK } from "sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

const sdk = new SDK({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "sdk";

const sdk = new SDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SDK_DEBUG` to true.
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=sdk&utm_campaign=typescript)
