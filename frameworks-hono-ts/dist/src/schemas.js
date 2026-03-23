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
export function createMessageObjectSchema(exampleMessage = "Hello World") {
    return z
        .object({
        message: z.string(),
    })
        .describe("Message response")
        .meta({ ref: "createMessageObject" });
}
export function createErrorSchema() {
    return z
        .object({
        success: z.boolean(),
        error: z.object({
            issues: z.array(z.object({
                code: z.string(),
                path: z.array(z.union([z.string(), z.number()])),
                message: z.string().optional(),
            })),
            name: z.string(),
        }),
    })
        .describe("Error response")
        .meta({ ref: "createError" });
}
