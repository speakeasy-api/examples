# TypeSpec OpenAPI Example

This repo contains an example of how to use TypeSpec to generate an OpenAPI document, and how to use that document to create an SDK.

## Prerequisites

You'll need the TypeSpec compiler and Speakeasy CLI installed to generate the OpenAPI document and SDK.

### TypeSpec

Install the TypeSpec compiler and CLI using the following command:

```bash
npm install -g @typespec/compiler
```

Test that the CLI is installed correctly by running the following command:

```bash
tsc --version
```

### Speakeasy CLI

To create an SDK, you will need to [install the Speakeasy CLI](https://www.speakeasyapi.dev/docs/speakeasy-cli/getting-started).

On macOS, you can install the Speakeasy CLI using the following command:

```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

Authenticate with Speakeasy using the following command:

```bash
speakeasy auth login
```

## Usage

The `main.tsp` file contains the TypeSpec definitions for a simple bookstore API. You can update this file to add more endpoints or modify the existing ones.

### Generating the OpenAPI Document

To generate the OpenAPI document, run the following command:

```bash
tsp compile main.tsp --emit @typespec/openapi3
```

This will generate an OpenAPI document at [`tsp-output/@typespec/openapi3/openapi.1.0.0.yaml`](tsp-output/@typespec/openapi3/openapi.1.0.0.yaml).

### Creating the SDK

To create an SDK from the OpenAPI document, run the following command:

```bash
speakeasy generate sdk \              
    --schema tsp-output/@typespec/openapi3/openapi.1.0.0.yaml \
    --lang typescript \
    --out ./sdks/bookstore-ts
```

This will create a TypeScript SDK in the `sdks/bookstore-ts` directory.

### Using OpenAPI Overlays to Customize the SDK

While TypeSpec is in active development, you may wish to add customizations to the created SDK. You can do this using OpenAPI overlays.

The `bookstore-overlay.yaml` file contains an example overlay that adds complete examples to the `Book` and `Magazine` schemas.

To apply the overlay and create a customized SDK, run the following commands:

```bash
# Validate the overlay
speakeasy overlay validate -o bookstore-overlay.yaml

# Apply the overlay
speakeasy overlay apply -s tsp-output/@typespec/openapi3/openapi.1.0.0.yaml -o bookstore-overlay.yaml > combined-openapi.yaml

# Regenerate the SDK
speakeasy generate sdk \              
    --schema combined-openapi.yaml \
    --lang typescript \
    --out ./sdks/bookstore-ts
```

This will create a TypeScript SDK in the `sdks/bookstore-ts` directory with the customizations from the overlay applied.
