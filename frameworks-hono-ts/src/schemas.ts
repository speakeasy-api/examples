import { z } from '@hono/zod-openapi';
import type { ZodSchema } from './lib/types';

export const UserSelectSchema = z
  .object({
    id: z.string()
      .openapi({
        example: '123',
      }),
    name: z.string()
      .openapi({
        example: 'John Doe',
      }),
    age: z.number()
      .openapi({
        example: 42,
      }),
  })
  .openapi('UserSelect');
  
export const UserInsertSchema = z
  .object({
    name: z.string()
      .openapi({
        example: 'John Doe',
      }),
    age: z.number()
      .openapi({
        example: 42,
      }),
  })
  .openapi('UserInsert');

export const patchUserSchema = 
  UserInsertSchema.partial().openapi('patchUser');

export const idParamsSchema = z.object({
  id: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      example: '423',
    })
    .openapi('idParams'),
});

export function createMessageObjectSchema(exampleMessage: string = 'Hello World') {
  return z.object({
    message: z.string(),
  })
    .openapi({
      example: {
        message: exampleMessage,
      },
    })
    .openapi('createMessageObject');
}

export function createErrorSchema<
  T extends ZodSchema,
>(schema: T) {
  const { error } = schema.safeParse(
    schema._def.typeName
    === z.ZodFirstPartyTypeKind.ZodArray
      ? []
      : {},
  );
  return z.object({
    success: z.boolean()
      .openapi({
        example: false,
      }),
    error: z
      .object({
        issues: z.array(
          z.object({
            code: z.string(),
            path: z.array(
              z.union([z.string(), z.number()]),
            ),
            message: z.string().optional(),
          }),
        ),
        name: z.string(),
      })
      .openapi({
        example: {
          issues: [{
            code: 'invalid_type',
            path: ['age'],
            message: 'Expected number, received string',
          }],
          name: 'ZodError',
        },
      }),
  }).openapi('createError');
}