import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class Trip {
  /**
   * Unique trip identifier.
   * @example 'ea399ba1-6d95-433f-92d1-83f67b775594'
   */
  @IsUUID()
  readonly id!: string;

  /**
   * Origin station ID.
   * @example 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e'
   */
  @IsUUID()
  readonly origin!: string;

  /**
   * Destination station ID.
   * @example 'b2e783e1-c824-4d63-b37a-d8d698862f1d'
   */
  @IsUUID()
  readonly destination!: string;

  /**
   * Departure time in ISO 8601.
   * @example '2026-05-21T10:00:00Z'
   */
  @IsDateString()
  readonly departure_time!: string;

  /**
   * Arrival time in ISO 8601.
   * @example '2026-05-21T16:00:00Z'
   */
  @IsDateString()
  readonly arrival_time!: string;

  /**
   * Train operator.
   * @example 'Deutsche Bahn'
   */
  @IsString()
  readonly operator!: string;

  /**
   * Ticket price.
   * @example 50
   */
  @IsNumber()
  readonly price!: number;

  /**
   * Indicates if bicycles are allowed.
   * @example true
   */
  @IsBoolean()
  readonly bicycles_allowed!: boolean;

  /**
   * Indicates if dogs are allowed.
   * @example true
   */
  @IsBoolean()
  readonly dogs_allowed!: boolean;
}
