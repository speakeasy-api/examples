# Speakeasy Hono OpenAPI Example

This example Hono app demonstrates Speakeasy-recommended practices for creating clear OpenAPI specifications and SDKs.

This project was bootstrapped with the [Hono Node.js starter template](https://hono.dev/docs/getting-started/basic#starter). It has three example API endpoints in `src/routes/users/users.index.ts`, which can be used to get all users, get a user by id, and create a user.

## Prerequisites

You need to have [Node.js version >= 18](https://nodejs.org/) installed on your system to run this project.

To generate an SDK, you'll also need to [install Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation) or use the Speakeasy dashboard.

Add a `.env` file containing the following environment variables to the root of the project:

```env
NODE_ENV=development
PORT=3000
```

## Installation

Install the application on your local machine.

1. Install all dependencies for the application using NPM:

    ```bash
    npm install
    ```

2. Install Speakeasy CLI:

    ```bash
    brew install speakeasy-api/homebrew-tap/speakeasy
    ```

## Running the application

Start the server:

```bash
npm run start
```

### For development

You can use the provided script to run the application in development mode. It will detect any changes in the source code and automatically restart the server.

```bash
npm run dev
```

## License

This project is licensed under the terms of the Apache 2.0 license.