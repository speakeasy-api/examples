import { Elysia, t } from 'elysia';
import { listTrips } from '../train/data';
import {
  linksPaginationSchema,
  linksSelfSchema,
  problemSchema,
  tripSchema,
} from '../train/schemas';

const tripsCollectionSchema = t.Object({
  data: t.Array(tripSchema),
  links: t.Intersect([linksSelfSchema, linksPaginationSchema]),
});

export const tripsController = new Elysia({ prefix: '/trips' }).get(
  '/',
  ({ query, error }) => {
    if (!query.origin || !query.destination || !query.date) {
      return error(400, {
        type: 'https://example.com/errors/bad-request',
        title: 'Bad Request',
        status: 400,
        detail: 'origin, destination, and date are required.',
      });
    }

    const page = Number(query.page ?? 1);
    const limit = Number(query.limit ?? 10);
    const offset = (page - 1) * limit;
    const rows = listTrips({
      origin: query.origin,
      destination: query.destination,
      bicycles: query.bicycles,
      dogs: query.dogs,
    });
    const pageData = rows.slice(offset, offset + limit);

    return {
      data: pageData,
      links: {
        self: `https://api.example.com/trips?origin=${query.origin}&destination=${query.destination}&date=${query.date}`,
        next:
          offset + limit < rows.length
            ? `https://api.example.com/trips?origin=${query.origin}&destination=${query.destination}&date=${query.date}&page=${page + 1}&limit=${limit}`
            : undefined,
        prev:
          page > 1
            ? `https://api.example.com/trips?origin=${query.origin}&destination=${query.destination}&date=${query.date}&page=${page - 1}&limit=${limit}`
            : undefined,
      },
    };
  },
  {
    query: t.Object({
      page: t.Optional(t.Number({ minimum: 1, default: 1 })),
      limit: t.Optional(t.Number({ minimum: 1, maximum: 100, default: 10 })),
      origin: t.String({ format: 'uuid', example: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e' }),
      destination: t.String({ format: 'uuid', example: 'b2e783e1-c824-4d63-b37a-d8d698862f1d' }),
      date: t.String({ format: 'date-time', example: '2024-02-01T09:00:00Z' }),
      bicycles: t.Optional(t.Boolean({ default: false })),
      dogs: t.Optional(t.Boolean({ default: false })),
    }),
    detail: {
      operationId: 'get-trips',
      summary: 'Get available train trips',
      description:
        'Returns a list of available train trips between the specified origin and destination stations on the given date.',
      tags: ['Trips'],
      responses: {
        200: {
          description: 'A list of available train trips',
          content: {
            'application/json': {
              schema: tripsCollectionSchema,
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/problem+json': {
              schema: problemSchema,
            },
          },
        },
      },
    },
  },
);
