import { z } from "zod";

export const UserSelectSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    age: z.number(),
  })
  .describe("User object")
  .meta({ ref: "UserSelect" });

export const UserInsertSchema = z
  .object({
    name: z.string(),
    age: z.number(),
  })
  .describe("User creation data")
  .meta({ ref: "UserInsert" });

export const patchUserSchema = UserInsertSchema.partial()
  .describe("User update data")
  .meta({ ref: "patchUser" });

export const idParamsSchema = z.object({
  id: z.string().min(3),
});

export const ErrorSchema = z
  .object({
    message: z.string(),
  })
  .describe("Error response")
  .meta({ ref: "Error" });
