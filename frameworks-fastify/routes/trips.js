const TRIPS = [
  {
    id: "ea399ba1-6d95-433f-92d1-83f67b775594",
    origin: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    destination: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    departure_time: "2024-02-01T10:00:00Z",
    arrival_time: "2024-02-01T16:00:00Z",
    price: 50,
    operator: "Deutsche Bahn",
    bicycles_allowed: true,
    dogs_allowed: true,
  },
  {
    id: "4d67459c-af07-40bb-bb12-178dbb88e09f",
    origin: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    destination: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    departure_time: "2024-02-01T12:00:00Z",
    arrival_time: "2024-02-01T18:00:00Z",
    price: 50,
    operator: "SNCF",
    bicycles_allowed: true,
    dogs_allowed: true,
  },
];

export default async function (fastify, opts) {
  fastify.get(
    "/trips",
    {
      schema: {
        operationId: "get-trips",
        tags: ["Trips"],
        querystring: {
          type: "object",
          required: ["origin", "destination", "date"],
          properties: {
            page: { type: "integer", minimum: 1, default: 1 },
            limit: { type: "integer", minimum: 1, maximum: 100, default: 10 },
            origin: { type: "string", format: "uuid" },
            destination: { type: "string", format: "uuid" },
            date: { type: "string", format: "date-time" },
            bicycles: { type: "boolean", default: false },
            dogs: { type: "boolean", default: false },
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
                    items: { $ref: "Trip" },
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
      const {
        origin,
        destination,
        bicycles = false,
        dogs = false,
        page = 1,
        date,
      } = request.query;

      let data = TRIPS.filter(
        (trip) => trip.origin === origin && trip.destination === destination
      );
      if (bicycles) {
        data = data.filter((trip) => trip.bicycles_allowed);
      }
      if (dogs) {
        data = data.filter((trip) => trip.dogs_allowed);
      }

      return {
        data: data.map((trip) => ({
          ...trip,
          links: {
            self: `https://api.example.com/trips/${trip.id}`,
            origin: `https://api.example.com/stations/${trip.origin}`,
            destination: `https://api.example.com/stations/${trip.destination}`,
          },
        })),
        links: {
          self: `https://api.example.com/trips?origin=${origin}&destination=${destination}&date=${date}&page=${page}`,
          next: `https://api.example.com/trips?origin=${origin}&destination=${destination}&date=${date}&page=${Number(page) + 1}`,
          prev:
            Number(page) > 1
              ? `https://api.example.com/trips?origin=${origin}&destination=${destination}&date=${date}&page=${Number(page) - 1}`
              : null,
        },
      };
    }
  );
}
