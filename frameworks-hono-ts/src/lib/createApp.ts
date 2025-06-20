import type { ContentfulStatusCode } from 'hono/utils/http-status';

import { config } from 'dotenv';
import { OpenAPIHono } from '@hono/zod-openapi';

config();

export function createRouter() {
  return new OpenAPIHono({ strict: false });
}

export default function createApp() {
  const app = new OpenAPIHono({ strict: false });

  app.notFound((c) => {
    return c.json({
      message: `Not Found - ${c.req.path}`,
    }, 404);
  });

  app.onError((err, c) => {
    const currentStatus = 'status' in err
      ? err.status
      : c.newResponse(null).status;
    const statusCode = currentStatus !== 'OK'
      ? (currentStatus as ContentfulStatusCode)
      : 500;

    const env = process.env.NODE_ENV;
    return c.json(
      {
        message: err.message,

        stack: env === 'production'
          ? undefined
          : err.stack,
      },
      statusCode,
    );
  });

  return app;
}
