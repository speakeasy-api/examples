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
  @format("uuid") id: string;

  /** The name of the station */
  name: string;

  /** The address of the station. */
  address: string;

  /** The country code of the station. */
  @format("iso-country-code") country_code: string;

  /** The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones). */
  timezone?: string;
}

/** The link to the current resource. */
model `Links-Self` {
  self?: url;
}

/** The link to the destination station resource. */
model `Links-Destination` {
  destination?: url;
}

/** The link to the origin station resource. */
model `Links-Origin` {
  origin?: url;
}

/** Links to the next and previous pages of a paginated response. */
model `Links-Pagination` {
  next?: url;
  prev?: url;
}

/** A problem detail object as defined in RFC 7807. */
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
  @format("uuid") id?: string;

  /** The starting station of the trip */
  origin?: string;

  /** The destination station of the trip */
  destination?: string;

  /** The date and time when the trip departs */
  departure_time?: utcDateTime;

  /** The date and time when the trip arrives */
  arrival_time?: utcDateTime;

  /** The name of the operator of the trip */
  operator?: string;

  /** The cost of the trip */
  price?: numeric;

  /** Indicates whether bicycles are allowed on the trip */
  bicycles_allowed?: boolean;

  /** Indicates whether dogs are allowed on the trip */
  dogs_allowed?: boolean;
}

/** A booking for a train trip. */
model Booking {
  /** Unique identifier for the booking */
  @format("uuid") id?: string;

  /** Identifier of the booked trip */
  @format("uuid") trip_id?: string;

  /** Name of the passenger */
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

/** A payment for a booking. */
model BookingPayment {
  /** Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects. */
  @format("uuid") id?: string;

  /** Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected. */
  amount?: numeric;

  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. */
  currency?: "bam" | "bgn" | "chf" | "eur" | "gbp" | "nok" | "sek" | "try";

  /** The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking. */
  @oneOf source?: {
    object?: "card";
    name: string;
    number: string;

    @minLength(3)
    @maxLength(4)
    cvc: string;

    exp_month: int64;
    exp_year: int64;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_country: string;
    address_post_code?: string;
  } | {
    object?: "bank_account";
    name: string;
    number: string;
    sort_code?: string;
    account_type: "individual" | "company";
    bank_name: string;
    country: string;
  };

  /** The status of the payment, one of `pending`, `succeeded`, or `failed`. */
  status?: "pending" | "succeeded" | "failed";
}

/** The link to the booking resource. */
model `Links-Booking` {
  booking?: url;
}

/** Returns a paginated and searchable list of all train stations. */
@tag("Stations")
@route("/stations")
@get
@summary("Get a list of train stations")
op `get-stations`(
  ...Parameters.page,
  ...Parameters.limit,

  /**
   * The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location.
   *
   */
  @query(#{ explode: true }) coordinates?: string,

  /**
   * A search term to filter the list of stations by name or address.
   *
   */
  @query(#{ explode: true }) search?: string,

  /** Filter stations by country code */
  @format("iso-country-code") @query(#{ explode: true }) country?: string,
):
  | {
      /**
       * The Cache-Control header communicates directives for caching mechanisms in both requests and responses.
       * It is used to specify the caching directives in responses to prevent caches from storing sensitive information.
       *
       */
      @header("Cache-Control") CacheControl?: string;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @body body: {
        data?: Station[];
        links?: `Links-Self` & `Links-Pagination`;
      };
    }
  | {
      @statusCode statusCode: 400;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

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
op `get-trips`(
  ...Parameters.page,
  ...Parameters.limit,

  /** The ID of the origin station */
  @format("uuid") @query(#{ explode: true }) origin: string,

  /** The ID of the destination station */
  @format("uuid") @query(#{ explode: true }) destination: string,

  /** The date and time of the trip in ISO 8601 format in origin station's timezone. */
  @query(#{ explode: true }) date: utcDateTime,

  /** Only return trips where bicycles are known to be allowed */
  @query(#{ explode: true }) bicycles?: boolean,

  /** Only return trips where dogs are known to be allowed */
  @query(#{ explode: true }) dogs?: boolean,
):
  | {
      /**
       * The Cache-Control header communicates directives for caching mechanisms in both requests and responses.
       * It is used to specify the caching directives in responses to prevent caches from storing sensitive information.
       *
       */
      @header("Cache-Control") CacheControl?: string;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @body body: {
        data?: Trip[];
        links?: `Links-Self` & `Links-Pagination`;
      };
    }
  | {
      @statusCode statusCode: 400;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** Returns a list of all trip bookings by the authenticated user. */
@tag("Bookings")
@route("/bookings")
@get
@summary("List existing bookings")
op `get-bookings`(...Parameters.page, ...Parameters.limit):
  | {
      /**
       * The Cache-Control header communicates directives for caching mechanisms in both requests and responses.
       * It is used to specify the caching directives in responses to prevent caches from storing sensitive information.
       *
       */
      @header("Cache-Control") CacheControl?: string;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @body body: {
        data?: Booking[];
        links?: `Links-Self` & `Links-Pagination`;
      };
    }
  | {
      @statusCode statusCode: 400;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** A booking is a temporary hold on a trip. It is not confirmed until the payment is processed. */
@tag("Bookings")
@route("/bookings")
@post
@summary("Create a booking")
op `create-booking`(
  /** Booking details */
  @body body: Booking,
):
  | {
      @statusCode statusCode: 201;
      @body body: Booking & {
        links?: `Links-Self`;
      };
    }
  | {
      @statusCode statusCode: 400;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 404;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 409;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** Deletes a booking, cancelling the hold on the trip. */
@tag("Bookings")
@route("/bookings/{bookingId}")
@delete
@summary("Delete a booking")
op `delete-booking`(
  /** The ID of the booking to retrieve. */
  @format("uuid") @path bookingId: string,
):
  | NoContentResponse
  | {
      @statusCode statusCode: 400;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 404;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** Returns the details of a specific booking. */
@tag("Bookings")
@route("/bookings/{bookingId}")
@get
@summary("Get a booking")
op `get-booking`(
  /** The ID of the booking to retrieve. */
  @format("uuid") @path bookingId: string,
):
  | {
      /**
       * The Cache-Control header communicates directives for caching mechanisms in both requests and responses.
       * It is used to specify the caching directives in responses to prevent caches from storing sensitive information.
       *
       */
      @header("Cache-Control") CacheControl?: string;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @body body: Booking & {
        links?: `Links-Self`;
      };
    }
  | {
      @statusCode statusCode: 400;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 404;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    };

/** A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets. */
@tag("Payments")
@route("/bookings/{bookingId}/payment")
@post
@summary("Pay for a Booking")
op `create-booking-payment`(
  /** The ID of the booking to pay for. */
  @format("uuid") @path bookingId: string,

  /** Payment details */
  @body body: BookingPayment,
):
  | {
      /**
       * The Cache-Control header communicates directives for caching mechanisms in both requests and responses.
       * It is used to specify the caching directives in responses to prevent caches from storing sensitive information.
       *
       */
      @header("Cache-Control") CacheControl?: string;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @body body: BookingPayment & {
        links?: `Links-Booking`;
      };
    }
  | {
      @statusCode statusCode: 400;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 401;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 403;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 429;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      /**
       * The Retry-After header indicates how long the user agent should wait before making a follow-up request.
       * The value is in seconds and can be an integer or a date in the future.
       * If the value is an integer, it indicates the number of seconds to wait.
       * If the value is a date, it indicates the time at which the user agent should make a follow-up request.
       *
       */
      @header("Retry-After") RetryAfter?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    }
  | {
      @statusCode statusCode: 500;

      /**
       * The RateLimit header communicates quota policies. It contains a `limit` to
       * convey the expiring limit, `remaining` to convey the remaining quota units,
       * and `reset` to convey the time window reset time.
       *
       */
      @header RateLimit?: string;

      @header contentType: "application/problem+json";
      @body body: Problem;
    };

namespace Parameters {
  model page {
    /** The page number to return */
    @minValue(1) @query(#{ explode: true }) page?: integer = 1;
  }
  model limit {
    /** The number of items to return per page */
    @minValue(1)
    @maxValue(100)
    @query(#{ explode: true })
    limit?: integer = 10;
  }
}
