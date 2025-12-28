export interface Station {
  /**
   * Unique identifier for the station.
   * @format uuid
   * @example "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e"
   */
  id: string;

  /**
   * The name of the station.
   * @example "Berlin Hauptbahnhof"
   */
  name: string;

  /**
   * The address of the station.
   * @example "Invalidenstraße 10557 Berlin, Germany"
   */
  address: string;

  /**
   * ISO 3166-1 alpha-2 country code for the station.
   * @format iso-country-code
   * @example "DE"
   */
  country_code: string;

  /**
   * Timezone in IANA Time Zone Database format.
   * @example "Europe/Berlin"
   */
  timezone: string;
}
