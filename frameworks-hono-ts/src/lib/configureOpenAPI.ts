import type { OpenAPIHono } from '@hono/zod-openapi';
import { Scalar } from '@scalar/hono-api-reference'
import packageJson from '../../package.json';

export const openAPIObjectConfig = {
  openapi: '3.1.0',
  externalDocs: {
    description: 'Find out more about Users API',
    url: 'www.example.com',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Development server',
    },
  ],
  'x-speakeasy-retries': {
    strategy: 'backoff',
    backoff: {
      initialInterval: 500,
      maxInterval: 60000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ['5XX'],
    retryConnectionErrors: true,
  },
  tags: [{
    name: 'Users',
    description: 'Users operations',
    externalDocs: {
      description: 'Find more info here',
      url: 'https://example.com',
    },
  }],
  info: {
    version: packageJson.version,
    title: 'Users API',
  },  
};

export default function configureOpenAPI(app: OpenAPIHono) {
  app.doc31('/doc', openAPIObjectConfig),
    app.get(
    '/ui',
    Scalar({     
      url: '/doc',
      pageTitle: 'Users Management API',
    }),
  );
}