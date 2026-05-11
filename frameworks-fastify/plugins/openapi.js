import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import scalar from "@scalar/fastify-api-reference";

/**
 * A Fastify plugin for serving OpenAPI from an API, colocating the API
 * description with the API code.
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp(async (fastify) => {
  await fastify.register(swagger, {
    // Use `openapi` key to specify an OpenAPI v3 document
    openapi: {
      openapi: "3.1.2",
      info: {
        title: "Train Travel API",
        description: "API for finding and booking train trips across Europe.",
        contact: {
          name: "Train Support",
          url: "https://example.com/support",
          email: "support@example.com",
        },
        license: {
          name: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
          url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        },
        version: "1.2.1",
      },
      tags: [
        {
          name: "Stations",
          description: "Find and filter train stations across Europe.",
        },
        {
          name: "Trips",
          description:
            "Timetables and routes for train trips between stations.",
        },
        {
          name: "Bookings",
          description: "Create and manage bookings for train trips.",
        },
        {
          name: "Payments",
          description: "Pay for bookings and view payment status.",
        },
        {
          name: "Health",
          description: "Service health and diagnostics endpoints.",
        },
      ],
      /**
       * Speakeasy OpenAPI extension to add retries to generated SDKs
       * @see https://speakeasyapi.dev/docs/customize-sdks/retries/
       */
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
      security: [{ OAuth2: ["read"] }],
      components: {
        securitySchemes: {
          OAuth2: {
            type: "oauth2",
            description: "OAuth 2.0 authorization code flow.",
            flows: {
              authorizationCode: {
                authorizationUrl: "https://example.com/oauth/authorize",
                tokenUrl: "https://example.com/oauth/token",
                scopes: {
                  read: "Read access",
                  write: "Write access",
                },
              },
            },
          },
        },
      },
      // Speakeasy requires at least one server in the OpenAPI document
      servers: [
        {
          url: "https://api.example.com",
          description: "Production",
        },
      ],
    },
    refResolver: {
      /**
       * This function is called to generate keys for references found in the schema.
       * @see https://github.com/fastify/fastify-swagger#managing-your-refs
       */
      buildLocalReference(json, baseUri, fragment, i) {
        return json.$id || `id-${i}`;
      },
    },
  });

  await fastify.register(scalar, {
    routePrefix: "/reference",
  });
});
