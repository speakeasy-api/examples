# Elysia Train Travel OpenAPI example

This Elysia app demonstrates Speakeasy-focused OpenAPI practices using the Train Travel domain from the Bump example API.

The sample includes resource-style endpoints for:

- `GET /stations`
- `GET /trips`
- `GET /bookings`
- `POST /bookings`
- `GET /bookings/{bookingId}`
- `DELETE /bookings/{bookingId}`
- `POST /bookings/{bookingId}/payment`

The OpenAPI output is generated from route metadata using `@elysia/openapi` and exported to YAML for SDK generation.

## Prerequisites

- Bun
- Speakeasy CLI (optional, for SDK generation)

## Install

```bash
bun install
```

## Run the server

```bash
bun run dev
```

Scalar UI is available at `http://localhost:3000/openapi`.

## Generate OpenAPI YAML

Keep the server running, then run:

```bash
bun run generate:openapi
```

This writes `openapi.yaml` in the project root.

## Generate SDKs with Speakeasy

```bash
speakeasy quickstart
```

## License

Apache 2.0
