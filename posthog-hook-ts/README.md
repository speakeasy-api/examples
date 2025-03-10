# speakeasy

Example SDK showcasing using [SDK hooks](https://www.speakeasy.com/docs/customize/code/sdk-hooks) to capture telemetry data from the SDK and send it to PostHog.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=speakeasy&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/sagar-demo/sagar-demo). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Speakeasy API: The Subscriptions API manages subscriptions for CLI and registry events

For more information about the API: [The Speakeasy Platform Documentation](/docs)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
- [speakeasy](#speakeasy)
  - [Summary](#summary)
  - [Table of Contents](#table-of-contents)
  - [SDK Installation](#sdk-installation)
    - [NPM](#npm)
    - [PNPM](#pnpm)
    - [Bun](#bun)
    - [Yarn](#yarn)
    - [Model Context Protocol (MCP) Server](#model-context-protocol-mcp-server)
  - [Requirements](#requirements)
  - [SDK Example Usage](#sdk-example-usage)
    - [Example](#example)
  - [Authentication](#authentication)
    - [Per-Client Security Schemes](#per-client-security-schemes)
  - [Available Resources and Operations](#available-resources-and-operations)
    - [artifacts](#artifacts)
    - [auth](#auth)
    - [codeSamples](#codesamples)
    - [events](#events)
    - [github](#github)
    - [organizations](#organizations)
    - [reports](#reports)
    - [schemaStore](#schemastore)
    - [shortURLs](#shorturls)
    - [subscriptions](#subscriptions)
    - [suggest](#suggest)
    - [workspaces](#workspaces)
  - [Standalone functions](#standalone-functions)
  - [Global Parameters](#global-parameters)
    - [Available Globals](#available-globals)
    - [Example](#example-1)
  - [File uploads](#file-uploads)
  - [Retries](#retries)
  - [Error Handling](#error-handling)
  - [Server Selection](#server-selection)
    - [Select Server by Name](#select-server-by-name)
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
    "Speakeasy": {
      "command": "npx",
      "args": [
        "-y", "--package", "speakeasy",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--workspace-identifier", "...",
        "--bearer", "...",
        "--workspace-id", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Go to `Cursor Settings > Features > MCP Servers > Add new MCP server` and use the following settings:

- Name: Speakeasy
- Type: `command`
- Command:
```sh
npx -y --package speakeasy -- mcp start --api-key ... --workspace-identifier ... --bearer ... --workspace-id ... 
```

</details>

For a full list of server arguments, run:

```sh
npx -y --package speakeasy -- mcp start --help
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
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.auth.validateApiKey();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name                  | Type   | Scheme      | Environment Variable             |
| --------------------- | ------ | ----------- | -------------------------------- |
| `apiKey`              | apiKey | API key     | `SPEAKEASY_API_KEY`              |
| `workspaceIdentifier` | apiKey | API key     | `SPEAKEASY_WORKSPACE_IDENTIFIER` |
| `bearer`              | http   | HTTP Bearer | `SPEAKEASY_BEARER`               |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy({
  security: {
    apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await speakeasy.auth.validateApiKey();

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

### [artifacts](docs/sdks/artifacts/README.md)

* [preflight](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints
* [getNamespaces](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
* [setArchived](docs/sdks/artifacts/README.md#setarchived) - Set whether a namespace is archived
* [getRevisions](docs/sdks/artifacts/README.md#getrevisions)
* [getTags](docs/sdks/artifacts/README.md#gettags)
* [postTags](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
* [setVisibility](docs/sdks/artifacts/README.md#setvisibility) - Set visibility of a namespace with an existing metadata entry
* [listRemoteSources](docs/sdks/artifacts/README.md#listremotesources) - Get remote sources attached to a particular namespace
* [createRemoteSource](docs/sdks/artifacts/README.md#createremotesource) - Configure a new remote source
* [getManifest](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
* [getBlob](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest

### [auth](docs/sdks/auth/README.md)

* [validateApiKey](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.
* [getUser](docs/sdks/auth/README.md#getuser) - Get information about the current user.
* [getAccessToken](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
* [getAccess](docs/sdks/auth/README.md#getaccess) - Get access allowances for a particular workspace

### [codeSamples](docs/sdks/codesamples/README.md)

* [get](docs/sdks/codesamples/README.md#get) - Retrieve usage snippets
* [generateCodeSamplePreview](docs/sdks/codesamples/README.md#generatecodesamplepreview) - Generate Code Sample previews from a file and configuration parameters.
* [generateCodeSamplePreviewAsync](docs/sdks/codesamples/README.md#generatecodesamplepreviewasync) - Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
* [getCodeSamplePreviewAsync](docs/sdks/codesamples/README.md#getcodesamplepreviewasync) - Poll for the result of an asynchronous Code Sample preview generation.

### [events](docs/sdks/events/README.md)

* [search](docs/sdks/events/README.md#search) - Search events for a particular workspace by any field
* [post](docs/sdks/events/README.md#post) - Post events for a specific workspace
* [getEventsByTarget](docs/sdks/events/README.md#geteventsbytarget) - Load recent events for a particular workspace
* [getTargets](docs/sdks/events/README.md#gettargets) - Load targets for a particular workspace
* [getTargetsDeprecated](docs/sdks/events/README.md#gettargetsdeprecated) - Load targets for a particular workspace

### [github](docs/sdks/github/README.md)

* [getSetup](docs/sdks/github/README.md#getsetup)
* [checkAccess](docs/sdks/github/README.md#checkaccess)
* [linkGithub](docs/sdks/github/README.md#linkgithub)
* [checkPublishingPRs](docs/sdks/github/README.md#checkpublishingprs)
* [checkPublishingSecrets](docs/sdks/github/README.md#checkpublishingsecrets)
* [storePublishingSecrets](docs/sdks/github/README.md#storepublishingsecrets)
* [configureCodeSamples](docs/sdks/github/README.md#configurecodesamples)
* [configureMintlifyRepo](docs/sdks/github/README.md#configuremintlifyrepo)
* [configureTarget](docs/sdks/github/README.md#configuretarget)
* [triggerAction](docs/sdks/github/README.md#triggeraction)
* [getAction](docs/sdks/github/README.md#getaction)

### [organizations](docs/sdks/organizations/README.md)

* [getAll](docs/sdks/organizations/README.md#getall) - Get organizations for a user
* [create](docs/sdks/organizations/README.md#create) - Create an organization
* [get](docs/sdks/organizations/README.md#get) - Get organization
* [createFreeTrial](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
* [getUsage](docs/sdks/organizations/README.md#getusage) - Get billing usage summary for a particular organization
* [createBillingAddOns](docs/sdks/organizations/README.md#createbillingaddons) - Create billing add ons
* [getBillingAddOns](docs/sdks/organizations/README.md#getbillingaddons) - Get billing add ons
* [deleteBillingAddOn](docs/sdks/organizations/README.md#deletebillingaddon) - Delete billing add ons

### [reports](docs/sdks/reports/README.md)

* [uploadReport](docs/sdks/reports/README.md#uploadreport) - Upload a report.
* [getLintingReportSignedUrl](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
* [getChangesReportSignedUrl](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.

### [schemaStore](docs/sdks/schemastore/README.md)

* [createSchemaStoreItem](docs/sdks/schemastore/README.md#createschemastoreitem) - Create a schema in the schema store

### [shortURLs](docs/sdks/shorturls/README.md)

* [create](docs/sdks/shorturls/README.md#create) - Shorten a URL.


### [subscriptions](docs/sdks/subscriptions/README.md)

* [ignoreSubscriptionNamespace](docs/sdks/subscriptions/README.md#ignoresubscriptionnamespace) - Ignored a namespace for a subscription
* [activateSubscriptionNamespace](docs/sdks/subscriptions/README.md#activatesubscriptionnamespace) - Activate an ignored namespace for a subscription

### [suggest](docs/sdks/suggest/README.md)

* [suggestOpenAPI](docs/sdks/suggest/README.md#suggestopenapi) - (DEPRECATED) Generate suggestions for improving an OpenAPI document.
* [suggest](docs/sdks/suggest/README.md#suggest) - Generate suggestions for improving an OpenAPI document.
* [suggestItems](docs/sdks/suggest/README.md#suggestitems) - Generate generic suggestions for a list of items.
* [suggestOpenAPIRegistry](docs/sdks/suggest/README.md#suggestopenapiregistry) - Generate suggestions for improving an OpenAPI document stored in the registry.

### [workspaces](docs/sdks/workspaces/README.md)

* [getAll](docs/sdks/workspaces/README.md#getall) - Get workspaces for a user
* [get](docs/sdks/workspaces/README.md#get) - Get workspace by context
* [create](docs/sdks/workspaces/README.md#create) - Create a workspace
* [getByID](docs/sdks/workspaces/README.md#getbyid) - Get workspace
* [update](docs/sdks/workspaces/README.md#update) - Update workspace details
* [getSettings](docs/sdks/workspaces/README.md#getsettings) - Get workspace settings
* [updateSettings](docs/sdks/workspaces/README.md#updatesettings) - Update workspace settings
* [getTeam](docs/sdks/workspaces/README.md#getteam) - Get team members for a particular workspace
* [grantAccess](docs/sdks/workspaces/README.md#grantaccess) - Grant a user access to a particular workspace
* [revokeAccess](docs/sdks/workspaces/README.md#revokeaccess) - Revoke a user's access to a particular workspace
* [getTokens](docs/sdks/workspaces/README.md#gettokens) - Get tokens for a particular workspace
* [createToken](docs/sdks/workspaces/README.md#createtoken) - Create a token for a particular workspace
* [deleteToken](docs/sdks/workspaces/README.md#deletetoken) - Delete a token for a particular workspace
* [setFeatureFlags](docs/sdks/workspaces/README.md#setfeatureflags) - Set workspace feature flags
* [getFeatureFlags](docs/sdks/workspaces/README.md#getfeatureflags) - Get workspace feature flags

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

- [`artifactsCreateRemoteSource`](docs/sdks/artifacts/README.md#createremotesource) - Configure a new remote source
- [`artifactsGetBlob`](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest
- [`artifactsGetManifest`](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
- [`artifactsGetNamespaces`](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
- [`artifactsGetRevisions`](docs/sdks/artifacts/README.md#getrevisions)
- [`artifactsGetTags`](docs/sdks/artifacts/README.md#gettags)
- [`artifactsListRemoteSources`](docs/sdks/artifacts/README.md#listremotesources) - Get remote sources attached to a particular namespace
- [`artifactsPostTags`](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
- [`artifactsPreflight`](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints
- [`artifactsSetArchived`](docs/sdks/artifacts/README.md#setarchived) - Set whether a namespace is archived
- [`artifactsSetVisibility`](docs/sdks/artifacts/README.md#setvisibility) - Set visibility of a namespace with an existing metadata entry
- [`authGetAccess`](docs/sdks/auth/README.md#getaccess) - Get access allowances for a particular workspace
- [`authGetAccessToken`](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
- [`authGetUser`](docs/sdks/auth/README.md#getuser) - Get information about the current user.
- [`authValidateApiKey`](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.
- [`codeSamplesGenerateCodeSamplePreview`](docs/sdks/codesamples/README.md#generatecodesamplepreview) - Generate Code Sample previews from a file and configuration parameters.
- [`codeSamplesGenerateCodeSamplePreviewAsync`](docs/sdks/codesamples/README.md#generatecodesamplepreviewasync) - Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
- [`codeSamplesGet`](docs/sdks/codesamples/README.md#get) - Retrieve usage snippets
- [`codeSamplesGetCodeSamplePreviewAsync`](docs/sdks/codesamples/README.md#getcodesamplepreviewasync) - Poll for the result of an asynchronous Code Sample preview generation.
- [`eventsGetEventsByTarget`](docs/sdks/events/README.md#geteventsbytarget) - Load recent events for a particular workspace
- [`eventsGetTargets`](docs/sdks/events/README.md#gettargets) - Load targets for a particular workspace
- [`eventsGetTargetsDeprecated`](docs/sdks/events/README.md#gettargetsdeprecated) - Load targets for a particular workspace
- [`eventsPost`](docs/sdks/events/README.md#post) - Post events for a specific workspace
- [`eventsSearch`](docs/sdks/events/README.md#search) - Search events for a particular workspace by any field
- [`githubCheckAccess`](docs/sdks/github/README.md#checkaccess)
- [`githubCheckPublishingPRs`](docs/sdks/github/README.md#checkpublishingprs)
- [`githubCheckPublishingSecrets`](docs/sdks/github/README.md#checkpublishingsecrets)
- [`githubConfigureCodeSamples`](docs/sdks/github/README.md#configurecodesamples)
- [`githubConfigureMintlifyRepo`](docs/sdks/github/README.md#configuremintlifyrepo)
- [`githubConfigureTarget`](docs/sdks/github/README.md#configuretarget)
- [`githubGetAction`](docs/sdks/github/README.md#getaction)
- [`githubGetSetup`](docs/sdks/github/README.md#getsetup)
- [`githubLinkGithub`](docs/sdks/github/README.md#linkgithub)
- [`githubStorePublishingSecrets`](docs/sdks/github/README.md#storepublishingsecrets)
- [`githubTriggerAction`](docs/sdks/github/README.md#triggeraction)
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create an organization
- [`organizationsCreateBillingAddOns`](docs/sdks/organizations/README.md#createbillingaddons) - Create billing add ons
- [`organizationsCreateFreeTrial`](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
- [`organizationsDeleteBillingAddOn`](docs/sdks/organizations/README.md#deletebillingaddon) - Delete billing add ons
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get organization
- [`organizationsGetAll`](docs/sdks/organizations/README.md#getall) - Get organizations for a user
- [`organizationsGetBillingAddOns`](docs/sdks/organizations/README.md#getbillingaddons) - Get billing add ons
- [`organizationsGetUsage`](docs/sdks/organizations/README.md#getusage) - Get billing usage summary for a particular organization
- [`reportsGetChangesReportSignedUrl`](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.
- [`reportsGetLintingReportSignedUrl`](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
- [`reportsUploadReport`](docs/sdks/reports/README.md#uploadreport) - Upload a report.
- [`schemaStoreCreateSchemaStoreItem`](docs/sdks/schemastore/README.md#createschemastoreitem) - Create a schema in the schema store
- [`shortURLsCreate`](docs/sdks/shorturls/README.md#create) - Shorten a URL.
- [`subscriptionsActivateSubscriptionNamespace`](docs/sdks/subscriptions/README.md#activatesubscriptionnamespace) - Activate an ignored namespace for a subscription
- [`subscriptionsIgnoreSubscriptionNamespace`](docs/sdks/subscriptions/README.md#ignoresubscriptionnamespace) - Ignored a namespace for a subscription
- [`suggestSuggest`](docs/sdks/suggest/README.md#suggest) - Generate suggestions for improving an OpenAPI document.
- [`suggestSuggestItems`](docs/sdks/suggest/README.md#suggestitems) - Generate generic suggestions for a list of items.
- [`suggestSuggestOpenAPI`](docs/sdks/suggest/README.md#suggestopenapi) - (DEPRECATED) Generate suggestions for improving an OpenAPI document.
- [`suggestSuggestOpenAPIRegistry`](docs/sdks/suggest/README.md#suggestopenapiregistry) - Generate suggestions for improving an OpenAPI document stored in the registry.
- [`workspacesCreate`](docs/sdks/workspaces/README.md#create) - Create a workspace
- [`workspacesCreateToken`](docs/sdks/workspaces/README.md#createtoken) - Create a token for a particular workspace
- [`workspacesDeleteToken`](docs/sdks/workspaces/README.md#deletetoken) - Delete a token for a particular workspace
- [`workspacesGet`](docs/sdks/workspaces/README.md#get) - Get workspace by context
- [`workspacesGetAll`](docs/sdks/workspaces/README.md#getall) - Get workspaces for a user
- [`workspacesGetByID`](docs/sdks/workspaces/README.md#getbyid) - Get workspace
- [`workspacesGetFeatureFlags`](docs/sdks/workspaces/README.md#getfeatureflags) - Get workspace feature flags
- [`workspacesGetSettings`](docs/sdks/workspaces/README.md#getsettings) - Get workspace settings
- [`workspacesGetTeam`](docs/sdks/workspaces/README.md#getteam) - Get team members for a particular workspace
- [`workspacesGetTokens`](docs/sdks/workspaces/README.md#gettokens) - Get tokens for a particular workspace
- [`workspacesGrantAccess`](docs/sdks/workspaces/README.md#grantaccess) - Grant a user access to a particular workspace
- [`workspacesRevokeAccess`](docs/sdks/workspaces/README.md#revokeaccess) - Revoke a user's access to a particular workspace
- [`workspacesSetFeatureFlags`](docs/sdks/workspaces/README.md#setfeatureflags) - Set workspace feature flags
- [`workspacesUpdate`](docs/sdks/workspaces/README.md#update) - Update workspace details
- [`workspacesUpdateSettings`](docs/sdks/workspaces/README.md#updatesettings) - Update workspace settings

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspace_id` to `"<id>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getAccessToken`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.
Global parameters can also be set via environment variable.

| Name        | Type   | Description                | Environment            |
| ----------- | ------ | -------------------------- | ---------------------- |
| workspaceId | string | The workspaceId parameter. | SPEAKEASY_WORKSPACE_ID |

### Example

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.auth.getAccessToken({
    workspaceId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.codeSamples.generateCodeSamplePreview({
    language: "<value>",
    schemaFile: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy();

async function run() {
  const result = await speakeasy.auth.validateApiKey({
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
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy({
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
  const result = await speakeasy.auth.validateApiKey();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `validateApiKey` method may throw the following errors:

| Error Type      | Status Code | Content Type     |
| --------------- | ----------- | ---------------- |
| errors.ErrorT   | 4XX         | application/json |
| errors.APIError | 5XX         | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Speakeasy } from "speakeasy";
import { ErrorT, SDKValidationError } from "speakeasy/models/errors";

const speakeasy = new Speakeasy();

async function run() {
  let result;
  try {
    result = await speakeasy.auth.validateApiKey();

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
      case (err instanceof ErrorT): {
        // Handle err.data$: ErrorTData
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

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name   | Server                              | Description |
| ------ | ----------------------------------- | ----------- |
| `prod` | `https://api.prod.speakeasyapi.dev` |             |

#### Example

```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy({
  server: "prod",
});

async function run() {
  const result = await speakeasy.auth.validateApiKey();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Speakeasy } from "speakeasy";

const speakeasy = new Speakeasy({
  serverURL: "https://api.prod.speakeasyapi.dev",
});

async function run() {
  const result = await speakeasy.auth.validateApiKey();

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
import { Speakeasy } from "speakeasy";
import { HTTPClient } from "speakeasy/lib/http";

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

const sdk = new Speakeasy({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Speakeasy } from "speakeasy";

const sdk = new Speakeasy({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SPEAKEASY_DEBUG` to true.
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=speakeasy&utm_campaign=typescript)
