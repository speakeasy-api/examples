import { Elysia, t } from "elysia";
import {
  createBooking,
  createBookingPayment,
  deleteBooking,
  findBooking,
  hasTrip,
  listBookings,
} from "../train/data";
import {
  bookingPaymentRequestSchema,
  bookingPaymentSchema,
  bookingSchema,
  createBookingRequestSchema,
  linksPaginationSchema,
  linksSelfSchema,
  problemSchema,
} from "../train/schemas";

const bookingWithLinksSchema = t.Intersect([
  bookingSchema,
  t.Object({
    links: linksSelfSchema,
  }),
]);

const bookingsCollectionSchema = t.Object({
  data: t.Array(bookingSchema),
  links: t.Intersect([linksSelfSchema, linksPaginationSchema]),
});

const paymentWithLinkSchema = t.Intersect([
  bookingPaymentSchema,
  t.Object({
    links: t.Object({
      booking: t.String({
        format: "uri",
        example:
          "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
      }),
    }),
  }),
]);

export const bookingsController = new Elysia({ prefix: "/bookings" })
  .get(
    "/",
    ({ query }) => {
      const page = Number(query.page ?? 1);
      const limit = Number(query.limit ?? 10);
      const offset = (page - 1) * limit;
      const rows = listBookings();
      const pageData = rows.slice(offset, offset + limit);

      return {
        data: pageData,
        links: {
          self: `https://api.example.com/bookings?page=${page}&limit=${limit}`,
          next:
            offset + limit < rows.length
              ? `https://api.example.com/bookings?page=${page + 1}&limit=${limit}`
              : undefined,
          prev:
            page > 1
              ? `https://api.example.com/bookings?page=${page - 1}&limit=${limit}`
              : undefined,
        },
      };
    },
    {
      query: t.Object({
        page: t.Optional(t.Number({ minimum: 1, default: 1 })),
        limit: t.Optional(t.Number({ minimum: 1, maximum: 100, default: 10 })),
      }),
      detail: {
        operationId: "get-bookings",
        summary: "List existing bookings",
        description:
          "Returns a list of all trip bookings by the authenticated user.",
        tags: ["Bookings"],
        responses: {
          200: {
            description: "A list of bookings",
            content: {
              "application/json": {
                schema: bookingsCollectionSchema,
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/problem+json": {
                schema: problemSchema,
              },
            },
          },
          500: {
            description: "Internal Server Error",
            content: {
              "application/problem+json": {
                schema: problemSchema,
              },
            },
          },
        },
      },
    }
  )
  .post(
    "/",
    ({ body, set, error }) => {
      if (!hasTrip(body.trip_id)) {
        return error(404, {
          type: "https://example.com/errors/not-found",
          title: "Not Found",
          status: 404,
          detail: "Trip not found.",
        });
      }

      const booking = createBooking(body);

      set.status = 201;

      return {
        ...booking,
        links: {
          self: `https://api.example.com/bookings/${booking.id}`,
        },
      };
    },
    {
      type: "json",
      body: createBookingRequestSchema,
      detail: {
        operationId: "create-booking",
        summary: "Create a booking",
        description:
          "A booking is a temporary hold on a trip. It is not confirmed until payment is processed.",
        tags: ["Bookings"],
        security: [
          {
            OAuth2: ["write"],
          },
        ],
        "x-speakeasy-retries": {
          strategy: "backoff",
          backoff: {
            initialInterval: 300,
            maxInterval: 40000,
            maxElapsedTime: 3000000,
            exponent: 1.2,
          },
          statusCodes: ["5XX"],
          retryConnectionErrors: true,
        },
        responses: {
          201: {
            description: "Booking successful",
            content: {
              "application/json": {
                schema: bookingWithLinksSchema,
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/problem+json": {
                schema: problemSchema,
              },
            },
          },
          409: {
            description: "Conflict",
            content: {
              "application/problem+json": {
                schema: problemSchema,
              },
            },
          },
        },
      },
    }
  )
  .get(
    "/:bookingId",
    ({ params, error }) => {
      const booking = findBooking(params.bookingId);

      if (!booking) {
        return error(404, {
          type: "https://example.com/errors/not-found",
          title: "Not Found",
          status: 404,
          detail: "The requested resource was not found.",
        });
      }

      return {
        ...booking,
        links: {
          self: `https://api.example.com/bookings/${booking.id}`,
        },
      };
    },
    {
      params: t.Object({
        bookingId: t.String({
          format: "uuid",
          example: "1725ff48-ab45-4bb5-9d02-88745177dedb",
        }),
      }),
      detail: {
        operationId: "get-booking",
        summary: "Get a booking",
        description: "Returns the details of a specific booking.",
        tags: ["Bookings"],
        responses: {
          200: {
            description: "The booking details",
            content: {
              "application/json": {
                schema: bookingWithLinksSchema,
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/problem+json": {
                schema: problemSchema,
              },
            },
          },
        },
      },
    }
  )
  .delete(
    "/:bookingId",
    ({ params, set, error }) => {
      const removed = deleteBooking(params.bookingId);

      if (!removed) {
        return error(404, {
          type: "https://example.com/errors/not-found",
          title: "Not Found",
          status: 404,
          detail: "The requested resource was not found.",
        });
      }

      set.status = 204;
      return "";
    },
    {
      params: t.Object({
        bookingId: t.String({
          format: "uuid",
          example: "1725ff48-ab45-4bb5-9d02-88745177dedb",
        }),
      }),
      detail: {
        operationId: "delete-booking",
        summary: "Delete a booking",
        description: "Deletes a booking, cancelling the hold on the trip.",
        tags: ["Bookings"],
        security: [
          {
            OAuth2: ["write"],
          },
        ],
        responses: {
          204: {
            description: "Booking deleted",
          },
          404: {
            description: "Not Found",
            content: {
              "application/problem+json": {
                schema: problemSchema,
              },
            },
          },
        },
      },
    }
  )
  .post(
    "/:bookingId/payment",
    ({ params, body, error }) => {
      const booking = findBooking(params.bookingId);

      if (!booking) {
        return error(404, {
          type: "https://example.com/errors/not-found",
          title: "Not Found",
          status: 404,
          detail: "The requested resource was not found.",
        });
      }

      const payment = createBookingPayment(params.bookingId, body);

      return {
        ...payment,
        links: {
          booking: `https://api.example.com/bookings/${booking.id}`,
        },
      };
    },
    {
      type: "json",
      params: t.Object({
        bookingId: t.String({
          format: "uuid",
          example: "1725ff48-ab45-4bb5-9d02-88745177dedb",
        }),
      }),
      body: bookingPaymentRequestSchema,
      detail: {
        operationId: "create-booking-payment",
        summary: "Pay for a booking",
        description:
          "A payment attempt confirms the booking and enables ticket retrieval.",
        tags: ["Payments"],
        responses: {
          200: {
            description: "Payment successful",
            content: {
              "application/json": {
                schema: paymentWithLinkSchema,
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/problem+json": {
                schema: problemSchema,
              },
            },
          },
        },
      },
    }
  );
