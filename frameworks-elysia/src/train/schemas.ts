import { t } from "elysia";

export const stationSchema = t.Object(
  {
    id: t.String({
      format: "uuid",
      example: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    }),
    name: t.String({ example: "Berlin Hauptbahnhof" }),
    address: t.String({ example: "Invalidenstrasse 10557 Berlin, Germany" }),
    country_code: t.String({ example: "DE" }),
    timezone: t.String({ example: "Europe/Berlin" }),
  },
  {
    description: "A train station.",
  }
);

export const tripSchema = t.Object(
  {
    id: t.String({
      format: "uuid",
      example: "ea399ba1-6d95-433f-92d1-83f67b775594",
    }),
    origin: t.String({
      format: "uuid",
      example: "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
    }),
    destination: t.String({
      format: "uuid",
      example: "b2e783e1-c824-4d63-b37a-d8d698862f1d",
    }),
    departure_time: t.String({
      format: "date-time",
      example: "2024-02-01T10:00:00Z",
    }),
    arrival_time: t.String({
      format: "date-time",
      example: "2024-02-01T16:00:00Z",
    }),
    operator: t.String({ example: "Deutsche Bahn" }),
    price: t.Number({ example: 50 }),
    bicycles_allowed: t.Boolean({ example: true }),
    dogs_allowed: t.Boolean({ example: true }),
  },
  {
    description: "A train trip.",
  }
);

export const bookingSchema = t.Object(
  {
    id: t.String({
      format: "uuid",
      example: "1725ff48-ab45-4bb5-9d02-88745177dedb",
    }),
    trip_id: t.String({
      format: "uuid",
      example: "ea399ba1-6d95-433f-92d1-83f67b775594",
    }),
    passenger_name: t.String({ example: "John Doe" }),
    has_bicycle: t.Boolean({ example: true }),
    has_dog: t.Boolean({ example: false }),
  },
  {
    description: "A booking for a train trip.",
  }
);

export const createBookingRequestSchema = t.Object(
  {
    trip_id: t.String({
      format: "uuid",
      example: "ea399ba1-6d95-433f-92d1-83f67b775594",
    }),
    passenger_name: t.String({ example: "John Doe" }),
    has_bicycle: t.Optional(t.Boolean({ example: true })),
    has_dog: t.Optional(t.Boolean({ example: false })),
  },
  {
    description: "Booking details.",
    example: {
      trip_id: "ea399ba1-6d95-433f-92d1-83f67b775594",
      passenger_name: "John Doe",
      has_bicycle: true,
      has_dog: false,
    },
  }
);

export const cardPaymentSourceSchema = t.Object({
  object: t.Literal("card"),
  name: t.String({ example: "J. Doe" }),
  number: t.String({ example: "4242424242424242" }),
  cvc: t.String({ minLength: 3, maxLength: 4, example: "123" }),
  exp_month: t.Number({ example: 12 }),
  exp_year: t.Number({ example: 2025 }),
  address_country: t.String({ example: "gb" }),
  address_post_code: t.Optional(t.String({ example: "N12 9XX" })),
});

export const bankPaymentSourceSchema = t.Object({
  object: t.Literal("bank_account"),
  name: t.String({ example: "J. Doe" }),
  number: t.String({ example: "00012345" }),
  sort_code: t.Optional(t.String({ example: "000123" })),
  account_type: t.Union([t.Literal("individual"), t.Literal("company")]),
  bank_name: t.String({ example: "Starling Bank" }),
  country: t.String({ example: "gb" }),
});

export const bookingPaymentRequestSchema = t.Object({
  amount: t.Number({ exclusiveMinimum: 0, example: 49.99 }),
  currency: t.Union([
    t.Literal("bam"),
    t.Literal("bgn"),
    t.Literal("chf"),
    t.Literal("eur"),
    t.Literal("gbp"),
    t.Literal("nok"),
    t.Literal("sek"),
  ]),
  promo_code: t.Optional(
    t.Union([t.String({ example: "SUMMER20" }), t.Null()])
  ),
  source: t.Union([cardPaymentSourceSchema, bankPaymentSourceSchema]),
});

export const bookingPaymentSchema = t.Object({
  id: t.String({
    format: "uuid",
    example: "2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
  }),
  amount: t.Number({ example: 49.99 }),
  currency: t.String({ example: "gbp" }),
  source: t.Union([cardPaymentSourceSchema, bankPaymentSourceSchema]),
  status: t.Union([
    t.Literal("pending"),
    t.Literal("succeeded"),
    t.Literal("failed"),
  ]),
});

export const linksSelfSchema = t.Object({
  self: t.String({
    format: "uri",
    example:
      "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb",
  }),
});

export const linksPaginationSchema = t.Object({
  next: t.Optional(
    t.String({
      format: "uri",
      example: "https://api.example.com/bookings?page=2",
    })
  ),
  prev: t.Optional(
    t.String({
      format: "uri",
      example: "https://api.example.com/bookings?page=1",
    })
  ),
});

export const problemSchema = t.Object({
  type: t.String({ example: "https://example.com/errors/not-found" }),
  title: t.String({ example: "Not Found" }),
  status: t.Number({ example: 404 }),
  detail: t.String({ example: "The requested resource was not found." }),
});

export type Station = typeof stationSchema.static;
export type Trip = typeof tripSchema.static;
export type Booking = typeof bookingSchema.static;
export type CreateBookingRequest = typeof createBookingRequestSchema.static;
export type BookingPayment = typeof bookingPaymentSchema.static;
export type BookingPaymentRequest = typeof bookingPaymentRequestSchema.static;
