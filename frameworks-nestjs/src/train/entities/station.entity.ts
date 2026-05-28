import { IsString, IsUUID } from 'class-validator';

export class Station {
  /**
   * Unique identifier for the station.
   * @example 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e'
   */
  @IsUUID()
  readonly id!: string;

  /**
   * Human-readable station name.
   * @example 'Berlin Hauptbahnhof'
   */
  @IsString()
  readonly name!: string;

  /**
   * Full street address.
   * @example 'Invalidenstraße 10557 Berlin, Germany'
   */
  @IsString()
  readonly address!: string;

  /**
   * ISO country code.
   * @example 'DE'
   */
  @IsString()
  readonly country_code!: string;

  /**
   * IANA timezone.
   * @example 'Europe/Berlin'
   */
  @IsString()
  readonly timezone!: string;
}
