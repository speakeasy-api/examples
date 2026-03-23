import type { Hono } from "hono";
import { Scalar } from "@scalar/hono-api-reference";
import { openAPIRouteHandler } from "hono-openapi";
import packageJson from "../../package.json";

export const openAPIDocumentation = {
  info: {
    version: packageJson.version,
    title: "Users API",
  },
  externalDocs: {
    description: "Find out more about Users API",
    url: "www.example.com",
  },
  servers: [
    {
      url: "http://localhost:3000/",
      description: "Development server",
    },
  ],
  "x-speakeasy-retries": {
    strategy: "backoff",
    backoff: {
      initialInterval: 500,
      maxInterval: 60000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ["5XX"],
    retryConnectionErrors: true,
  },
  tags: [
    {
      name: "Users",
      description: "Users operations",
      externalDocs: {
        description: "Find more info here",
        url: "https://example.com",
      },
    },
  ],
};

export default function configureOpenAPI(app: Hono) {
  app.get(
    "/openapi",
    openAPIRouteHandler(app, {
      documentation: openAPIDocumentation,
    })
  );
  app.get(
    "/docs",
    Scalar({
      url: "/openapi",
      pageTitle: "Users Management API",
    })
  );
}
