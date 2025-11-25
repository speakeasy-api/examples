import * as yaml from "yaml";
import zod from "zod";
import { ZodOpenApiOperationObject, createDocument } from "zod-openapi";

// Step 1: Burger ID Schema with path parameter metadata
const BurgerIdSchema = zod.number().min(1).meta({
  description: "The unique identifier of the burger.",
  example: 1,
  readOnly: true,
});

// Step 2: Burger Schema with metadata
const burgerSchema = zod
  .object({
    id: BurgerIdSchema,
    name: zod.string().min(1).max(50).meta({
      description: "The name of the burger.",
      example: "Veggie Burger",
    }),
    description: zod.string().max(255).optional().meta({
      description: "The description of the burger.",
      example: "A delicious bean burger with avocado.",
    }),
  })
  .meta({
    description: "A burger served at the restaurant.",
  });

// Step 3: Adding Order schemas for a more complete example
const OrderIdSchema = zod.number().min(1).meta({
  description: "The unique identifier of the order.",
  example: 1,
  readOnly: true,
});

const orderStatusEnum = zod.enum([
  "pending",
  "in_progress",
  "ready",
  "delivered",
]);

const orderSchema = zod
  .object({
    id: OrderIdSchema,
    burger_ids: zod
      .array(BurgerIdSchema)
      .nonempty()
      .meta({
        description: "The burgers in the order.",
        example: [1, 2],
      }),
    time: zod.iso.datetime().meta({
      description: "The time the order was placed.",
      example: "2021-01-01T00:00:00.000Z",
    }),
    table: zod.number().min(1).meta({
      description: "The table the order is for.",
      example: 1,
    }),
    status: orderStatusEnum.meta({
      description: "The status of the order.",
      example: "pending",
    }),
    note: zod.string().optional().meta({
      description: "A note for the order.",
      example: "No onions.",
    }),
  })
  .meta({
    description: "An order placed at the restaurant.",
  });

// API Operations defined with zod objects for compatibility
// Step 4: Define API Operations
const createBurger: ZodOpenApiOperationObject = {
  operationId: "createBurger",
  summary: "Create a new burger",
  description: "Creates a new burger in the database.",
  tags: ["burgers"],
  requestBody: {
    description: "The burger to create.",
    content: {
      "application/json": {
        schema: burgerSchema,
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
    path: zod.object({ id: BurgerIdSchema }),
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
          schema: zod.array(burgerSchema),
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
        schema: orderSchema,
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
    path: zod.object({ id: OrderIdSchema }),
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

// Step 5: Webhook Definition
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

// Step 6: Generate OpenAPI Document
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
      BurgerIdSchema,
      orderSchema,
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
