import { Elysia, t } from 'elysia';
import { listStations } from '../train/data';
import {
  linksPaginationSchema,
  linksSelfSchema,
  problemSchema,
  stationSchema,
} from '../train/schemas';

const stationsCollectionSchema = t.Object({
  data: t.Array(stationSchema),
  links: t.Intersect([linksSelfSchema, linksPaginationSchema]),
});

export const stationsController = new Elysia({ prefix: '/stations' }).get(
  '/',
  ({ query }) => {
    const page = Number(query.page ?? 1);
    const limit = Number(query.limit ?? 10);
    const offset = (page - 1) * limit;
    const rows = listStations({ search: query.search, country: query.country });
    const pageData = rows.slice(offset, offset + limit);

    return {
      data: pageData,
      links: {
        self: `https://api.example.com/stations?page=${page}&limit=${limit}`,
        next:
          offset + limit < rows.length
            ? `https://api.example.com/stations?page=${page + 1}&limit=${limit}`
            : undefined,
        prev:
          page > 1
            ? `https://api.example.com/stations?page=${page - 1}&limit=${limit}`
            : undefined,
      },
    };
  },
  {
    query: t.Object({
      page: t.Optional(t.Number({ minimum: 1, default: 1 })),
      limit: t.Optional(t.Number({ minimum: 1, maximum: 100, default: 10 })),
      coordinates: t.Optional(t.String({ example: '52.5200,13.4050' })),
      search: t.Optional(t.String({ example: 'Milano Centrale' })),
      country: t.Optional(t.String({ minLength: 2, maxLength: 2, example: 'DE' })),
    }),
    detail: {
      operationId: 'get-stations',
      summary: 'Get a list of train stations',
      description:
        'Returns a paginated and searchable list of all train stations.',
      tags: ['Stations'],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: stationsCollectionSchema,
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
