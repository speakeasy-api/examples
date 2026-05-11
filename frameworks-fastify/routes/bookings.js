const BOOKINGS = [
  {
    id: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    trip_id: "ea399ba1-6d95-433f-92d1-83f67b775594",
    passenger_name: "John Doe",
    has_bicycle: true,
    has_dog: true,
  },
];

function bookingToResource(booking) {
  return {
    ...booking,
    links: {
      self: `https://api.example.com/bookings/${booking.id}`,
    },
  };
}

export default async function (fastify, opts) {
  fastify.get(
    "/bookings",
    {
      schema: {
        operationId: "get-bookings",
        tags: ["Bookings"],
        querystring: {
          type: "object",
          properties: {
            page: { type: "integer", minimum: 1, default: 1 },
            limit: { type: "integer", minimum: 1, maximum: 100, default: 10 },
          },
        },
        response: {
          200: {
            allOf: [
              { $ref: "Wrapper-Collection" },
              {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: { $ref: "Booking" },
                  },
                  links: {
                    allOf: [
                      { $ref: "Links-Self" },
                      { $ref: "Links-Pagination" },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
    async function (request, reply) {
      const { page = 1 } = request.query;

      return {
        data: BOOKINGS,
        links: {
          self: `https://api.example.com/bookings?page=${page}`,
          next: `https://api.example.com/bookings?page=${Number(page) + 1}`,
          prev:
            Number(page) > 1
              ? `https://api.example.com/bookings?page=${Number(page) - 1}`
              : null,
        },
      };
    }
  );

  fastify.post(
    "/bookings",
    {
      schema: {
        operationId: "create-booking",
        tags: ["Bookings"],
        security: [{ OAuth2: ["write"] }],
        body: {
          type: "object",
          required: ["trip_id", "passenger_name"],
          properties: {
            trip_id: { type: "string", format: "uuid" },
            passenger_name: { type: "string" },
            has_bicycle: { type: "boolean", default: false },
            has_dog: { type: "boolean", default: false },
          },
        },
        response: {
          201: {
            allOf: [
              { $ref: "Booking" },
              { properties: { links: { $ref: "Links-Self" } } },
            ],
          },
        },
      },
    },
    async function (request, reply) {
      const booking = {
        id: crypto.randomUUID(),
        trip_id: request.body.trip_id,
        passenger_name: request.body.passenger_name,
        has_bicycle: Boolean(request.body.has_bicycle),
        has_dog: Boolean(request.body.has_dog),
      };

      BOOKINGS.push(booking);
      return reply.code(201).send(bookingToResource(booking));
    }
  );

  fastify.get(
    "/bookings/:bookingId",
    {
      schema: {
        operationId: "get-booking",
        tags: ["Bookings"],
        params: {
          type: "object",
          required: ["bookingId"],
          properties: {
            bookingId: { type: "string", format: "uuid" },
          },
        },
        response: {
          200: {
            allOf: [
              { $ref: "Booking" },
              { properties: { links: { $ref: "Links-Self" } } },
            ],
          },
        },
      },
    },
    async function (request, reply) {
      const { bookingId } = request.params;
      const booking = BOOKINGS.find((item) => item.id === bookingId);

      if (!booking) {
        return reply.notFound("Booking not found");
      }

      return bookingToResource(booking);
    }
  );

  fastify.delete(
    "/bookings/:bookingId",
    {
      schema: {
        operationId: "delete-booking",
        tags: ["Bookings"],
        security: [{ OAuth2: ["write"] }],
        params: {
          type: "object",
          required: ["bookingId"],
          properties: {
            bookingId: { type: "string", format: "uuid" },
          },
        },
        response: {
          204: {
            type: "null",
          },
        },
      },
    },
    async function (request, reply) {
      const { bookingId } = request.params;
      const bookingIndex = BOOKINGS.findIndex((item) => item.id === bookingId);

      if (bookingIndex === -1) {
        return reply.notFound("Booking not found");
      }

      BOOKINGS.splice(bookingIndex, 1);
      return reply.code(204).send();
    }
  );

  fastify.post(
    "/bookings/:bookingId/payment",
    {
      schema: {
        operationId: "create-booking-payment",
        tags: ["Payments"],
        params: {
          type: "object",
          required: ["bookingId"],
          properties: {
            bookingId: { type: "string", format: "uuid" },
          },
        },
        body: {
          type: "object",
          required: ["amount", "currency", "source"],
          properties: {
            amount: { type: "number", exclusiveMinimum: 0 },
            currency: {
              type: "string",
              enum: ["bam", "bgn", "chf", "eur", "gbp", "nok", "sek", "try"],
            },
            source: {
              oneOf: [
                { $ref: "BookingPaymentSourceCard" },
                { $ref: "BookingPaymentSourceBankAccount" },
              ],
            },
          },
        },
        response: {
          200: {
            $ref: "BookingPayment",
          },
        },
      },
    },
    async function (request, reply) {
      const { bookingId } = request.params;
      const booking = BOOKINGS.find((item) => item.id === bookingId);

      if (!booking) {
        return reply.notFound("Booking not found");
      }

      return {
        id: crypto.randomUUID(),
        amount: request.body.amount,
        currency: request.body.currency,
        source:
          request.body.source.object === "card"
            ? {
                ...request.body.source,
                number: `************${request.body.source.number.slice(-4)}`,
              }
            : {
                ...request.body.source,
                number: `*********${request.body.source.number.slice(-4)}`,
              },
        status: "succeeded",
        links: {
          booking: `https://api.example.com/bookings/${bookingId}`,
        },
      };
    }
  );
}
