<div align="center">
 <a href="https://www.speakeasy.com/" target="_blank">
  <img width="1500" height="500" alt="Speakeasy" src="https://github.com/user-attachments/assets/0e56055b-02a3-4476-9130-4be299e5a39c" />
 </a>
 <br />
 <br />
  <div>
   <a href="https://speakeasy.com/docs/create-client-sdks/" target="_blank"><b>Docs Quickstart</b></a>&nbsp;&nbsp;//&nbsp;&nbsp;<a href="https://go.speakeasy.com/slack" target="_blank"><b>Join us on Slack</b></a>
  </div>
 <br />
</div>

<h2>Speakeasy Fastify Train Travel Example</h2>

This example Fastify app demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications and SDKs using a train travel domain.

This project was bootstrapped with [Fastify CLI](https://www.npmjs.com/package/fastify-cli).

## Prerequisites

Install [Node.js](https://nodejs.org/) and [Fastify CLI](https://github.com/fastify/fastify-cli).

To generate SDKs, install the Speakeasy CLI.

## Dependencies

Current npm dependencies in this example:

- `fastify@^5.8.0`
- `@fastify/swagger@^9.7.0`
- `@scalar/fastify-api-reference@^1.25.11`
- `@fastify/autoload@^6.3.0`
- `@fastify/sensible@^6.0.0`
- `fastify-plugin@^5.1.0`
- `fastify-cli@^8.0`
- `standard@^17.1.0` (dev dependency)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/speakeasy-api/examples.git
```

2. Navigate into the directory:

```bash
cd frameworks-fastify
```

3. Install dependencies:

```bash
npm install
```

4. Install Speakeasy CLI:

```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Running the application

Start the server:

```bash
npm run start
```

For development mode with file watching:

```bash
npm run dev
```

Open Scalar API docs:

```bash
open http://localhost:3000/reference/
```

## Working with OpenAPI

Generate `openapi.json` from route schemas:

```bash
npm run openapi
```

Generate a TypeScript SDK:

```bash
npm run sdk
```

Generate an SDK in another language:

```bash
speakeasy generate sdk \
  --schema openapi.json \
  --lang typescript \
  --out ./sdk
```

## License

This project is licensed under the terms of the Apache 2.0 license.
