import "@typespec/http";
import "@typespec/openapi";
import "@typespec/openapi3";

using Http;
using OpenAPI;

/**
 * API for finding and booking train trips across Europe.
 *
 */
@service(#{ title: "Train Travel API" })
@info(#{
  version: "1.2.1",
  contact: #{
    name: "Train Support",
    url: "https://example.com/support",
    email: "support@example.com",
  },
  license: #{
    name: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
  },
})
@server("https://api.example.com", "Production")
@tagMetadata(
  "Stations",
  #{
    description: "Find and filter train stations across Europe, including their location and local timezone.",
  }
)
@tagMetadata(
  "Trips",
  #{
    description: "Timetables and routes for train trips between stations, including pricing and availability.",
  }
)
@tagMetadata(
  "Bookings",
  #{
    description: "Create and manage bookings for train trips, including passenger details and optional extras.",
  }
)
@tagMetadata(
  "Payments",
  #{
    description: "Pay for bookings using a card or bank account, and view payment status and history. **Warning:** Bookings usually expire within 1 hour so you'll need to make your payment before the expiry date.",
  }
)
namespace TrainTravelAPI;

/** A train station. */
model Station {
  /** Unique identifier for the station. */
  @format("uuid")
  @example("efdbb9d1-02c2-4bc3-afb7-6788d8782b1e")
  id: string;

  /** The name of the station */
  @example("Berlin Hauptbahnhof")
  name: string;

  /** The address of the station. */
  @example("Invalidenstraße 10557 Berlin, Germany")
  address: string;

  /** The country code of the station. */
  @format("iso-country-code")
  @example("de")
  @example("fr")
  country_code: string;

  /** The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones). */
  @example("Europe/Berlin")
  timezone?: string;
}

/** Hypermedia links for resources. */
namespace Links {
  /** The link to the current resource. */
  model Self {
    self?: url;
  }

  /** The link to the destination station resource. */
  model Destination {
    destination?: url;
  }

  /** The link to the origin station resource. */
  model Origin {
    origin?: url;
  }

  /** Links to the next and previous pages of a paginated response. */
  model Pagination {
    next?: url;
    prev?: url;
  }

  /** The link to the booking resource. */
  model Booking {
    booking?: url;
  }
}

/** A problem detail object as defined in RFC 9457. */
model Problem {
  /** A URI reference that identifies the problem type */
  type?: string;

  /** A short, human-readable summary of the problem type */
  title?: string;

  /** A human-readable explanation specific to this occurrence of the problem */
  detail?: string;

  /** A URI reference that identifies the specific occurrence of the problem */
  instance?: string;

  /** The HTTP status code */
  status?: integer;
}

/** A train trip. */
model Trip {
  /** Unique identifier for the trip */
  @format("uuid")
  @example("4f4e4e1-c824-4d63-b37a-d8d698862f1d")
  id?: string;

  /** The starting station of the trip */
  @example("efdbb9d1-02c2-4bc3-afb7-6788d8782b1e")
  origin?: string;

  /** The destination station of the trip */
  @example("b2e783e1-c824-4d63-b37a-d8d698862f1d")
  destination?: string;

  /** The date and time when the trip departs */
  departure_time?: utcDateTime;

  /** The date and time when the trip arrives */
  arrival_time?: utcDateTime;

  /** The name of the operator of the trip */
  @example("Deutsche Bahn")
  operator?: string;

  /** The cost of the trip */
  @example(50)
  price?: numeric;

  /** Indicates whether bicycles are allowed on the trip */
  bicycles_allowed?: boolean;

  /** Indicates whether dogs are allowed on the trip */
  dogs_allowed?: boolean;
}

/** A booking for a train trip. */
model Booking {
  /** Unique identifier for the booking */
  @format("uuid")
  @example("3f3e3e1-c824-4d63-b37a-d8d698862f1d")
  id?: string;

  /** Identifier of the booked trip */
  @format("uuid")
  @example("4f4e4e1-c824-4d63-b37a-d8d698862f1d")
  trip_id?: string;

  /** Name of the passenger */
  @example("John Doe")
  passenger_name?: string;

  /** Indicates whether the passenger has a bicycle. */
  has_bicycle?: boolean;

  /** Indicates whether the passenger has a dog. */
  has_dog?: boolean;
}

/** This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS). */
model `Wrapper-Collection` {
  /** The wrapper for a collection is an array of objects. */
  data?: {}[];

  /** A set of hypermedia links which serve as controls for the client. */
  links?: {};
}

/** Card payment source details. */
model CardPaymentSource {
  object?: "card";

  @example("J. Doe")
  name: string;

  @example("4242424242424242")
  number: string;

  @minLength(3)
  @maxLength(4)
  @example("123")
  cvc: string;

  @example(12)
  exp_month: int64;

  @example(2025)
  exp_year: int64;

  @example("123 Fake Street")
  address_line1?: string;

  @example("4th Floor")
  address_line2?: string;

  @example("London")
  address_city?: string;

  @example("de")
  @example("fr")
  address_country: string;

  @example("N12 9XX")
  address_post_code?: string;
}

/** Bank account payment source details. */
model BankAccountPaymentSource {
  object?: "bank_account";

  @example("J. Doe")
  name: string;

  @example("00012345")
  number: string;

  @example("000123")
  sort_code?: string;

  @example("individual")
  account_type: "individual" | "company";

  @example("Starling Bank")
  bank_name: string;

  @example("de")
  @example("fr")
  country: string;
}

/** A payment source used for booking payments. Can be either a card or a bank account. */
@oneOf
union BookingPaymentSource {
  CardPaymentSource,
  BankAccountPaymentSource,
}

/** A payment for a booking. */
model BookingPayment {
  /** Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects. */
  @format("uuid")
  @example("2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a")
  id?: string;

  /** Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected. */
  @example(49.99)
  amount?: numeric;

  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. */
  @example("gbp")
  currency?: "bam" | "bgn" | "chf" | "eur" | "gbp" | "nok" | "sek" | "try";

  /** The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking. */
  source?: BookingPaymentSource;

  /** The status of the payment, one of `pending`, `succeeded`, or `failed`. */
  @example("succeeded")
  status?: "pending" | "succeeded" | "failed";
}

/** Returns a paginated and searchable list of all train stations. */
@tag("Stations")
@route("/stations")
@get
@summary("Get a list of train stations")
@operationId("get-stations")
op `get-stations`(
  ...Parameters.page,
  ...Parameters.limit,

  /**
   * The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location.
   *
   */
  @query coordinates?: string,

  /**
   * A search term to filter the list of stations by name or address.
   *
   */
  @query search?: string,

  /** Filter stations by country code */
  @format("iso-country-code") @query country?: string,
):
  | {
      @body body: {
        data?: Station[];
        links?: Links.Self & Links.Pagination;
      };
    }
  | {
      @statusCode statusCode: 400;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;
      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/**
 * Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.
 *
 */
@tag("Trips")
@route("/trips")
@get
@summary("Get available train trips")
@operationId("get-trips")
op `get-trips`(
  ...Parameters.page,
  ...Parameters.limit,

  /** The ID of the origin station */
  @format("uuid") @query origin: string,

  /** The ID of the destination station */
  @format("uuid") @query destination: string,

  /** The date and time of the trip in ISO 8601 format in origin station's timezone. */
  @query date: utcDateTime,

  /** Only return trips where bicycles are known to be allowed */
  @query bicycles?: boolean,

  /** Only return trips where dogs are known to be allowed */
  @query dogs?: boolean,
):
  | {
      @body body: {
        data?: Trip[];
        links?: Links.Self & Links.Pagination;
      };
    }
  | {
      @statusCode statusCode: 400;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;
      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** Returns a list of all trip bookings by the authenticated user. */
@tag("Bookings")
@route("/bookings")
@get
@summary("List existing bookings")
@operationId("get-bookings")
op `get-bookings`(...Parameters.page, ...Parameters.limit):
  | {
      @body body: {
        data?: Booking[];
        links?: Links.Self & Links.Pagination;
      };
    }
  | {
      @statusCode statusCode: 400;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;
      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** A booking is a temporary hold on a trip. It is not confirmed until the payment is processed. */
@tag("Bookings")
@route("/bookings")
@post
@summary("Create a booking")
@operationId("create-booking")
op `create-booking`(
  /** Booking details */
  @body body: Booking,
):
  | {
      @statusCode statusCode: 201;
      @body body: Booking & {
        links?: Links.Self;
      };
    }
  | {
      @statusCode statusCode: 400;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 404;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 409;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;
      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** Deletes a booking, cancelling the hold on the trip. */
@tag("Bookings")
@route("/bookings/{bookingId}")
@delete
@summary("Delete a booking")
@operationId("delete-booking")
op `delete-booking`(
  /** The ID of the booking to retrieve. */
  @format("uuid") @path bookingId: string,
):
  | NoContentResponse
  | {
      @statusCode statusCode: 400;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 404;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;
      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** Returns the details of a specific booking. */
@tag("Bookings")
@route("/bookings/{bookingId}")
@get
@summary("Get a booking")
@operationId("get-booking")
op `get-booking`(
  /** The ID of the booking to retrieve. */
  @format("uuid") @path bookingId: string,
):
  | {
      @body body: Booking & {
        links?: Links.Self;
      };
    }
  | {
      @statusCode statusCode: 400;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 404;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;
      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets. */
@tag("Payments")
@route("/bookings/{bookingId}/payment")
@post
@summary("Pay for a Booking")
@operationId("create-booking-payment")
op `create-booking-payment`(
  /** The ID of the booking to pay for. */
  @format("uuid") @path bookingId: string,

  /** Payment details */
  @body body: BookingPayment,
):
  | {
      @body body: BookingPayment & {
        links?: Links.Booking;
      };
    }
  | {
      @statusCode statusCode: 400;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;
      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;
      @header contentType: "application/problem+json";
      @body body: Problem;
    };

namespace Parameters {
  model page {
    /** The page number to return */
    @minValue(1) @query page?: integer = 1;
  }
  model limit {
    /** The number of items to return per page */
    @minValue(1)
    @maxValue(100)
    @query
    limit?: integer = 10;
  }
}
