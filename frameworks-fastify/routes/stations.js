const STATIONS = [
  {
    id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
    name: 'Berlin Hauptbahnhof',
    address: 'Invalidenstrasse 10557 Berlin, Germany',
    country_code: 'DE',
    timezone: 'Europe/Berlin'
  },
  {
    id: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
    name: 'Paris Gare du Nord',
    address: '18 Rue de Dunkerque 75010 Paris, France',
    country_code: 'FR',
    timezone: 'Europe/Paris'
  }
]

export default async function (fastify, opts) {
  fastify.get('/stations', {
    schema: {
      operationId: 'get-stations',
      tags: ['Stations'],
      querystring: {
        type: 'object',
        properties: {
          page: { type: 'integer', minimum: 1, default: 1 },
          limit: { type: 'integer', minimum: 1, maximum: 100, default: 10 },
          coordinates: { type: 'string' },
          search: { type: 'string' },
          country: { type: 'string' }
        }
      },
      response: {
        200: {
          allOf: [
            { $ref: 'Wrapper-Collection' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: { $ref: 'Station' }
                },
                links: {
                  allOf: [{ $ref: 'Links-Self' }, { $ref: 'Links-Pagination' }]
                }
              }
            }
          ]
        }
      }
    }
  }, async function (request, reply) {
    const { search, country, page = 1 } = request.query

    let data = STATIONS
    if (search) {
      const needle = search.toLowerCase()
      data = data.filter(station => station.name.toLowerCase().includes(needle) || station.address.toLowerCase().includes(needle))
    }
    if (country) {
      data = data.filter(station => station.country_code.toLowerCase() === country.toLowerCase())
    }

    return {
      data,
      links: {
        self: `https://api.example.com/stations?page=${page}`,
        next: `https://api.example.com/stations?page=${Number(page) + 1}`,
        prev: Number(page) > 1 ? `https://api.example.com/stations?page=${Number(page) - 1}` : null
      }
    }
  })
}
