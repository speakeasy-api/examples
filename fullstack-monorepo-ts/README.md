# Speakeasy Monorepo Example

This example includes a monorepo setup with a shared sdk and two applications
that use the shared sdk.

## Speakeasy SDK

A SDK that's used by both the frontend and backend applications. It demonstrates:

- 👬 Generating an SDK in `dual` mode (CommonJS and ESM)
- ✍️ Hand writing an OpenAPI spec that defines SDK behavior

## Express Backend (Common JS)

A simple express backend that uses the Speakeasy SDK types. It demonstrates:

- 📼 Uses the CommonJS distribution of the SDK
- ✅ Demonstrates using the SDK's types in a backend environment

## React Frontend (ESM)

A simple React frontend that uses the Speakeasy SDK types. It demonstrates:

- 📀 Uses the ESM distribution of the SDK
- 🧑‍💻 Demonstrates using the SDK in a web app
- 🧪 Shows how to use the generated SDK types for Testing using [MSW]

[MSW]: https://mswjs.io/

# Usage


