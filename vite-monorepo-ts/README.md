# Speakeasy Monorepo Example

This repo demonstrates how to use Speakeasy SDKs in a monorepo containing a Vite
app. This is a worked example of the guidance found on the following page
relating to linked dependencies:

https://vitejs.dev/guide/dep-pre-bundling

The SDK is generated in [`./packages/monorepo-sdk`](./packages/monorepo-sdk) and the Vite app is in [`./apps/console`](./apps/console). Take a look at the [`vite.config.js`](./apps/console/vite.config.ts) for the required config options.

## Running

```
pnpm i
pnpm dev
```

Visit the URL and note how the SDK is used to fetch a UUID.
