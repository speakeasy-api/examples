import fp from "fastify-plugin";

// Schemas are JSON Schema and are not actually OpenAPI schemas but will be converted
// by fastify/swagger when generating the OpenAPI document. They are added as
// Fastify schemas and can be referenced in route definitions with `$ref: "SchemaName#"`.
// https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/#validation

export default fp(async (fastify) => {
  fastify.addSchema({
    $id: "Wrapper-Collection",
    description:
      "A generic wrapper for collection responses with data and pagination links.",
    type: "object",
    properties: {
      data: {
        description: "Array of resource objects.",
        type: "array",
        items: { type: "object" },
      },
      links: {
        description: "Hypermedia links for pagination.",
        type: "object",
        readOnly: true,
      },
    },
  });

  fastify.addSchema({
    $id: "Links-Self",
    description: "Link to the current resource.",
    type: "object",
    properties: {
      self: { type: "string", format: "uri" },
    },
  });

  fastify.addSchema({
    $id: "Links-Pagination",
    description: "Links to the next and previous pages.",
    type: "object",
    properties: {
      next: { type: "string", format: "uri" },
      prev: { type: "string", format: "uri" },
    },
  });

  fastify.addSchema({
    $id: "Station",
    description: "A train station.",
    type: "object",
    required: ["id", "name", "address", "country_code"],
    properties: {
      id: { type: "string", format: "uuid" },
      name: { type: "string" },
      address: { type: "string" },
      country_code: { type: "string" },
      timezone: { type: "string" },
    },
  });

  fastify.addSchema({
    $id: "Trip",
    description: "A train trip.",
    type: "object",
    properties: {
      id: { type: "string", format: "uuid" },
      origin: { type: "string", format: "uuid" },
      destination: { type: "string", format: "uuid" },
      departure_time: { type: "string", format: "date-time" },
      arrival_time: { type: "string", format: "date-time" },
      operator: { type: "string" },
      price: { type: "number" },
      bicycles_allowed: { type: "boolean" },
      dogs_allowed: { type: "boolean" },
      links: {
        type: "object",
        properties: {
          self: { type: "string", format: "uri" },
          origin: { type: "string", format: "uri" },
          destination: { type: "string", format: "uri" },
        },
      },
    },
  });

  fastify.addSchema({
    $id: "Booking",
    description: "A booking for a train trip.",
    type: "object",
    required: ["trip_id", "passenger_name"],
    properties: {
      id: { type: "string", format: "uuid", readOnly: true },
      trip_id: { type: "string", format: "uuid" },
      passenger_name: { type: "string" },
      has_bicycle: { type: "boolean" },
      has_dog: { type: "boolean" },
    },
  });

  fastify.addSchema({
    $id: "BookingPaymentSourceCard",
    title: "Card",
    description: "A card to take payment from.",
    type: "object",
    required: [
      "name",
      "number",
      "cvc",
      "exp_month",
      "exp_year",
      "address_country",
    ],
    properties: {
      object: { type: "string", const: "card" },
      name: { type: "string" },
      number: { type: "string" },
      cvc: { type: "string", minLength: 3, maxLength: 4, writeOnly: true },
      exp_month: { type: "integer" },
      exp_year: { type: "integer" },
      address_line1: { type: "string", writeOnly: true },
      address_line2: { type: "string", writeOnly: true },
      address_city: { type: "string" },
      address_country: { type: "string" },
      address_post_code: { type: "string" },
    },
  });

  fastify.addSchema({
    $id: "BookingPaymentSourceBankAccount",
    title: "Bank Account",
    description: "A bank account to take payment from.",
    type: "object",
    required: ["name", "number", "account_type", "bank_name", "country"],
    properties: {
      object: { type: "string", const: "bank_account" },
      name: { type: "string" },
      number: { type: "string" },
      sort_code: { type: "string" },
      account_type: { type: "string", enum: ["individual", "company"] },
      bank_name: { type: "string" },
      country: { type: "string" },
    },
  });

  fastify.addSchema({
    $id: "BookingPayment",
    description: "A payment for a booking.",
    type: "object",
    properties: {
      id: { type: "string", format: "uuid", readOnly: true },
      amount: { type: "number", exclusiveMinimum: 0 },
      currency: {
        type: "string",
        enum: ["bam", "bgn", "chf", "eur", "gbp", "nok", "sek", "try"],
      },
      source: {
        oneOf: [
          { $ref: "BookingPaymentSourceCard" },
          { $ref: "BookingPaymentSourceBankAccount" },
        ],
      },
      status: {
        type: "string",
        enum: ["pending", "succeeded", "failed"],
        readOnly: true,
      },
    },
  });
});
