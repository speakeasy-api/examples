export default async function (fastify, opts) {
  fastify.get('/', {
    schema: {
      operationId: 'get-health',
      tags: [
        'Health'
      ],
      response: {
        200: {
          type: 'object',
          properties: {
            status: {
              type: 'string'
            },
            service: {
              type: 'string'
            }
          }
        }
      }
    }
  }, async function (request, reply) {
    return {
      status: 'ok',
      service: 'train-travel-api'
    }
  })
}
