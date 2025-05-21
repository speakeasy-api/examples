import type { z } from '@hono/zod-openapi';
import type { RouteConfig, RouteHandler } from '@hono/zod-openapi';

// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
export type ZodSchema = z.ZodUnion | z.AnyZodObject | z.ZodArray<z.AnyZodObject>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R>;