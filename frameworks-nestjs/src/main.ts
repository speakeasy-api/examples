import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { writeFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { apiReference } from '@scalar/nestjs-api-reference';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      errorHttpStatusCode: 400,
    }),
  );

  const config = new DocumentBuilder()
    .setOpenAPIVersion('3.2.0')
    .setTitle('Train Travel API')
    .setDescription(
      'Find stations, discover trips, and create bookings across Europe.',
    )
    .setVersion('1.2.1')
    .addTag(
      'Resources',
      'Top-level navigation tag for related resources',
      undefined,
      { kind: 'nav' },
    )
    .addTag('Stations', 'Find and filter train stations', undefined, {
      parent: 'Resources',
    })
    .addTag('Trips', 'Timetables and routes for train trips', undefined, {
      parent: 'Resources',
    })
    .addTag('Bookings', 'Create and manage trip bookings', undefined, {
      parent: 'Resources',
    })
    .addServer('https://api.example.com', 'Production server')
    .addServer('http://localhost:3000', 'Local development server')
    .setContact(
      'Train Support',
      'https://example.com/support',
      'support@example.com',
    )
    .setLicense(
      'CC-BY-NC-SA-4.0',
      'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Bearer token authentication',
      },
      'BearerAuth',
    )
    .addExtension('x-speakeasy-retries', {
      strategy: 'backoff',
      backoff: {
        initialInterval: 500,
        maxInterval: 60000,
        maxElapsedTime: 3600000,
        exponent: 1.5,
      },
      statusCodes: ['5XX'],
      retryConnectionErrors: true,
    })
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);

  writeFileSync('openapi.yaml', yaml.dump(document, { noRefs: true }));

  SwaggerModule.setup('api-json', app, document);
  app.use(
    '/api',
    apiReference({
      spec: {
        content: document,
      },
    }),
  );

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  if (process.env.GENERATE_OPENAPI_ONLY === 'true') {
    await app.close();
    return;
  }

  await app.listen(3000);
}

bootstrap();
