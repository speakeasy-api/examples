// Following Zod v4 migration guide: https://github.com/colinhacks/zod/issues/4371
// Using dual import strategy for incremental Zod v4 adoption

// Import Zod v3 compatible instance for zod-openapi
import { z as z3 } from "zod"; 
// Import Zod v4 for new features and future migration
import { z as z4 } from "zod/v4"; 

import * as yaml from "yaml";

import {
  extendZodWithOpenApi,
  ZodOpenApiOperationObject,
  createDocument
} from "zod-openapi";

// Extend the Zod v3 compatible instance for zod-openapi
extendZodWithOpenApi(z3);

// Schemas defined with z3 for current zod-openapi compatibility


// Step 10: Burger ID Schema with path parameter metadata
const BurgerIdSchema = z3
  .number()
  .min(1)
  .openapi({
    ref: "BurgerId",
    description: "The unique identifier of the burger.",
    example: 1,
    param: {
      in: "path",
      name: "id",
    },
  });

// Step 6: Burger Schema with metadata
const burgerSchema = z3.object({
  id: BurgerIdSchema,
  name: z3.string().min(1).max(50).openapi({
    description: "The name of the burger.",
    example: "Veggie Burger",
  }),
  description: z3.string().max(255).optional().openapi({
    description: "The description of the burger.",
    example: "A delicious bean burger with avocado.",
  }),
});

burgerSchema.openapi({
  ref: "Burger",
  description: "A burger served at the restaurant.",
});

// Step 12: Create Schema for new burgers
const burgerCreateSchema = burgerSchema.omit({ id: true }).openapi({
  ref: "BurgerCreate",
  description: "A burger to create.",
});

// Adding Order schemas for a more complete example
const OrderIdSchema = z3
  .number()
  .min(1)
  .openapi({
    ref: "OrderId",
    description: "The unique identifier of the order.",
    example: 1,
    param: {
      in: "path",
      name: "id",
    },
  });

const orderStatusEnum = z3.enum([
  "pending",
  "in_progress",
  "ready",
  "delivered",
]);

const orderSchema = z3.object({
  id: OrderIdSchema,
  burger_ids: z3
    .array(BurgerIdSchema)
    .nonempty()
    .openapi({
      description: "The burgers in the order.",
      example: [1, 2],
    }),
  time: z3.string().datetime().openapi({
    description: "The time the order was placed.",
    example: "2021-01-01T00:00:00.000Z",
  }),
  table: z3.number().min(1).openapi({
    description: "The table the order is for.",
    example: 1,
  }),
  status: orderStatusEnum.openapi({
    description: "The status of the order.",
    example: "pending",
  }),
  note: z3.string().optional().openapi({
    description: "A note for the order.",
    example: "No onions.",
  }),
}).openapi({
  ref: "Order",
  description: "An order placed at the restaurant.",
});

const orderCreateSchema = orderSchema.omit({ id: true }).openapi({
  ref: "OrderCreate",
  description: "An order to create.",
});

// Example: Demonstrating how z4 can be used for new features internally
// These schemas are NOT processed by zod-openapi in this example
const internalV4Schemas = {
  userProfile: z4.object({
    username: z4.string().min(3),
    email: z4.string().email(), // Using Zod v4 .email()
    preferences: z4.object({
      darkMode: z4.boolean(),
      notifications: z4.enum(["all", "mentions", "none"])
    }).optional(),
  }),
  strictObjectExample: z4.strictObject({ // Using Zod v4 .strictObject()
    id: z4.string().uuid(),
    value: z4.number(),
  })
};

// API Operations defined with z3 objects for compatibility
// Step 13: Define API Operations
const createBurger: ZodOpenApiOperationObject = {
  operationId: "createBurger",
  summary: "Create a new burger",
  description: "Creates a new burger in the database.",
  tags: ["burgers"],
  requestBody: {
    description: "The burger to create.",
    content: {
      "application/json": {
        schema: burgerCreateSchema,
      },
    },
  },
  responses: {
    "201": {
      description: "The burger was created successfully.",
      content: {
        "application/json": {
          schema: burgerSchema,
        },
      },
    },
  },
};

const getBurger: ZodOpenApiOperationObject = {
  operationId: "getBurger",
  summary: "Get a burger",
  description: "Gets a burger from the database.",
  tags: ["burgers"],
  requestParams: {
    path: z3.object({ id: BurgerIdSchema }),
  },
  responses: {
    "200": {
      description: "The burger was retrieved successfully.",
      content: {
        "application/json": {
          schema: burgerSchema,
        },
      },
    },
  },
};

const listBurgers: ZodOpenApiOperationObject = {
  operationId: "listBurgers",
  summary: "List burgers",
  description: "Lists all burgers in the database.",
  tags: ["burgers"],
  responses: {
    "200": {
      description: "The burgers were retrieved successfully.",
      content: {
        "application/json": {
          schema: z3.array(burgerSchema),
        },
      },
    },
  },
};

// Order operations
const createOrder: ZodOpenApiOperationObject = {
  operationId: "createOrder",
  summary: "Create a new order",
  description: "Creates a new order in the database.",
  tags: ["orders"],
  requestBody: {
    description: "The order to create.",
    content: {
      "application/json": {
        schema: orderCreateSchema,
      },
    },
  },
  responses: {
    "201": {
      description: "The order was created successfully.",
      content: {
        "application/json": {
          schema: orderSchema,
        },
      },
    },
  },
};

const getOrder: ZodOpenApiOperationObject = {
  operationId: "getOrder",
  summary: "Get an order",
  description: "Gets an order from the database.",
  tags: ["orders"],
  requestParams: {
    path: z3.object({ id: OrderIdSchema }),
  },
  responses: {
    "200": {
      description: "The order was retrieved successfully.",
      content: {
        "application/json": {
          schema: orderSchema,
        },
      },
    },
  },
};

// Step 14: Webhook Definition
const createBurgerWebhook: ZodOpenApiOperationObject = {
  operationId: "createBurgerWebhook",
  summary: "New burger webhook",
  description: "A webhook that is called when a new burger is created.",
  tags: ["burgers"],
  requestBody: {
    description: "The burger that was created.",
    content: {
      "application/json": {
        schema: burgerSchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The webhook was processed successfully.",
    },
  },
};

// Step 8 & 15: Generate OpenAPI Document
const document = createDocument({
  openapi: "3.1.0",
  info: {
    title: "Burger Restaurant API",
    description: "An API for managing burgers and orders at a restaurant.",
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://example.com",
      description: "The production server.",
    },
  ],
  paths: {
    "/burgers": {
      post: createBurger,
      get: listBurgers,
    },
    "/burgers/{id}": {
      get: getBurger,
    },
    "/orders": {
      post: createOrder,
    },
    "/orders/{id}": {
      get: getOrder,
    },
  },
  webhooks: {
    "/burgers": {
      post: createBurgerWebhook,
    },
  },
  components: {
    schemas: {
      burgerSchema,
      burgerCreateSchema,
      BurgerIdSchema,
      orderSchema,
      orderCreateSchema,
      OrderIdSchema,
    },
  },
  // Adding Speakeasy extensions for better SDK generation
  "x-speakeasy-retries": {
    strategy: "backoff",
    backoff: {
      initialInterval: 500,
      maxInterval: 60000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ["5XX"],
    retryConnectionErrors: true,
  },
});

console.log(yaml.stringify(document));

