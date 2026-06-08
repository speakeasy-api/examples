import { Elysia } from "elysia";
import { stationsController } from "./controllers/stations";
import { tripsController } from "./controllers/trips";
import { bookingsController } from "./controllers/bookings";
import { openapi } from "@elysia/openapi";
import packageJson from "../package.json";
import { cors } from "@elysiajs/cors";

export const createApp = () =>
  new Elysia()
    .onError(({ error, code }) => {
      if (code === "NOT_FOUND") {
        return {
          type: "https://example.com/errors/not-found",
          title: "Not Found",
          status: 404,
          detail: "The requested resource was not found.",
        };
      }

      console.error(error);
    })
    .use(
      cors({
        origin: "http://localhost:5173",
      })
    )
    .use(stationsController)
    .use(tripsController)
    .use(bookingsController)
    .use(
      openapi({
        documentation: {
          info: {
            title: "Train Travel API",
            description:
              "API for finding and booking train trips across Europe.",
            version: packageJson.version,
            contact: {
              name: "Train Support",
              url: "https://example.com/support",
              email: "support@example.com",
            },
          },
          servers: [
            {
              url: "https://api.example.com",
              description: "Production",
            },
            {
              url: "http://localhost:3000",
              description: "Development server",
            },
          ],
          security: [
            {
              OAuth2: ["read"],
            },
          ],
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
              name: "Stations",
              description:
                "Find and filter train stations across Europe, including their location and local timezone.",
            },
            {
              name: "Trips",
              description:
                "Timetables and routes for train trips between stations, including pricing and availability.",
            },
            {
              name: "Bookings",
              description:
                "Create and manage bookings for train trips, including passenger details and optional extras.",
            },
            {
              name: "Payments",
              description:
                "Pay for bookings using a card or bank account, and view payment status and history.",
            },
          ],
        },
      })
    );

export type App = ReturnType<typeof createApp>;
