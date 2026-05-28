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

<h2>Speakeasy NestJS OpenAPI Example — Train Travel API</h2>

This example NestJS app demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications and SDKs for a Train Travel API with stations, trips, bookings, and payments.

The project uses [NestJS 11](https://nestjs.com/), [@nestjs/swagger 11](https://github.com/nestjs/swagger), and [Scalar API Reference](https://scalar.com/). The generated document is configured as OpenAPI 3.2 through the native NestJS Swagger `DocumentBuilder` API.

## Prerequisites

- Node.js >= 20
- The [NestJS CLI](https://docs.nestjs.com/cli/overview):
  ```bash
  npm install -g @nestjs/cli
  ```
- The [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation) for SDK generation:
  ```bash
  brew install speakeasy-api/homebrew-tap/speakeasy
  ```

## Installation

```bash
git clone https://github.com/speakeasy-api/nestjs-openapi-example.git
cd nestjs-openapi-example
npm install
```

## Running the server

```bash
npm run start:dev
```

Open [http://localhost:3000/api](http://localhost:3000/api) to view the Scalar API reference UI.

## Generating the OpenAPI document

Generate `openapi.yaml` without starting the long-running server:

```bash
npm run generate:openapi
```

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/stations` | List train stations |
| GET | `/trips` | List available trips |
| GET | `/bookings` | List bookings |
| POST | `/bookings` | Create a booking |
| GET | `/bookings/:bookingId` | Get a booking |
| DELETE | `/bookings/:bookingId` | Cancel a booking |
| POST | `/bookings/:bookingId/payment` | Pay for a booking |

## Generating an SDK with Speakeasy

```bash
speakeasy quickstart
```

Or generate directly:

```bash
speakeasy generate sdk --schema ./openapi.yaml --lang typescript --out ./sdk-typescript
```

## License

MIT
