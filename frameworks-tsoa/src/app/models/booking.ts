export interface Booking {
  /**
   * Unique identifier for the booking.
   * @format uuid
   * @example "3f3e3e1-c824-4d63-b37a-d8d698862f1d"
   * @readonly
   */
  id: string;

  /**
   * Identifier of the booked trip.
   * @format uuid
   * @example "4f4e4e1-c824-4d63-b37a-d8d698862f1d"
   * @pattern ^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$
   */
  trip_id: string;

  /**
   * Name of the passenger.
   * @example "John Doe"
   */
  passenger_name: string;

  /**
   * Indicates whether the passenger has a bicycle.
   * @default true
   * @example true
   */
  has_bicycle?: boolean;

  /**
   * Indicates whether the passenger has a dog.
   * @default false
   * @example false
   */
  has_dog?: boolean;
}
