export interface Trip {
  /**
   * Unique identifier for the trip.
   * @format uuid
   * @example "ea399ba1-6d95-433f-92d1-83f67b775594"
   */
  id: string;

  /**
   * The origin station ID.
   * @format uuid
   * @example "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e"
   */
  origin: string;

  /**
   * The destination station ID.
   * @format uuid
   * @example "b2e783e1-c824-4d63-b37a-d8d698862f1d"
   */
  destination: string;

  /**
   * Departure time in ISO 8601 format.
   * @format date-time
   * @example "2024-02-01T10:00:00Z"
   */
  departure_time: string;

  /**
   * Arrival time in ISO 8601 format.
   * @format date-time
   * @example "2024-02-01T16:00:00Z"
   */
  arrival_time: string;

  /**
   * The operator running the trip.
   * @example "Deutsche Bahn"
   */
  operator: string;

  /**
   * The cost of the trip.
   * @example 50
   */
  price: number;

  /**
   * Indicates whether bicycles are allowed on the trip.
   * @default false
   * @example true
   */
  bicycles_allowed?: boolean;

  /**
   * Indicates whether dogs are allowed on the trip.
   * @default false
   * @example true
   */
  dogs_allowed?: boolean;
}
