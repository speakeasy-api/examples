export interface GetStationsQuery {
  /**
   * The page number to return.
   * @default 1
   * @example 1
   */
  page?: number;

  /**
   * The number of items to return per page.
   * @default 10
   * @example 10
   */
  limit?: number;

  /**
   * Latitude and longitude of the user's location to narrow results.
   * @example "52.5200,13.4050"
   */
  coordinates?: string;

  /**
   * A search term to filter stations by name or address.
   * @example "Berlin"
   */
  search?: string;

  /**
   * ISO country code to filter stations.
   * @format iso-country-code
   * @example "DE"
   */
  country?: string;
}

export interface GetTripsQuery {
  /**
   * The page number to return.
   * @default 1
   * @example 1
   */
  page?: number;

  /**
   * The number of items to return per page.
   * @default 10
   * @example 10
   */
  limit?: number;

  /**
   * The ID of the origin station.
   * @format uuid
   * @example "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e"
   */
  origin: string;

  /**
   * The ID of the destination station.
   * @format uuid
   * @example "b2e783e1-c824-4d63-b37a-d8d698862f1d"
   */
  destination: string;

  /**
   * The date and time of the trip in ISO 8601 format.
   * @format date-time
   * @example "2024-02-01T09:00:00Z"
   */
  date: string;

  /**
   * Only return trips where bicycles are known to be allowed.
   * @default false
   * @example true
   */
  bicycles?: boolean;

  /**
   * Only return trips where dogs are known to be allowed.
   * @default false
   * @example true
   */
  dogs?: boolean;
}
