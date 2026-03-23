import { resolver } from "hono-openapi";
import { z } from "zod";
import { createErrorSchema, createMessageObjectSchema, UserSelectSchema, } from "@/schemas";
export const listRoute = {
    operationId: "getUsers",
    description: "Get all users",
    tags: ["Users"],
    "x-speakeasy-retries": {
        strategy: "backoff",
        backoff: {
            initialInterval: 300,
            maxInterval: 40000,
            maxElapsedTime: 3000000,
            exponent: 1.2,
        },
        statusCodes: ["5XX"],
        retryConnectionErrors: true,
    },
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: resolver(z.array(UserSelectSchema)),
                },
            },
            description: "The list of users",
        },
    },
};
export const createRoute = {
    operationId: "createUser",
    description: "Create a user",
    tags: ["Users"],
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: resolver(UserSelectSchema),
                },
            },
            description: "The created user",
        },
        404: {
            content: {
                "application/json": {
                    schema: resolver(createMessageObjectSchema("Not Found")),
                },
            },
            description: "User not found",
        },
        422: {
            content: {
                "application/json": {
                    schema: resolver(createErrorSchema()),
                },
            },
            description: "The validation error(s)",
        },
    },
};
export const getOneRoute = {
    operationId: "getUser",
    description: "Get a user by ID",
    tags: ["Users"],
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: resolver(UserSelectSchema),
                },
            },
            description: "The requested user",
        },
        404: {
            content: {
                "application/json": {
                    schema: resolver(createMessageObjectSchema("Not Found")),
                },
            },
            description: "User not found",
        },
        422: {
            content: {
                "application/json": {
                    schema: resolver(createErrorSchema()),
                },
            },
            description: "Invalid id error",
        },
    },
};
