import { IsBoolean, IsDateString, IsOptional, IsUUID } from 'class-validator';

export class TripsQueryDto {
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
   * Desired departure date in ISO 8601.
   * @example '2026-05-21T09:00:00Z'
   */
  @IsDateString()
  readonly date!: string;

  /**
   * Only include trips that allow bicycles.
   * @example true
   */
  @IsOptional()
  @IsBoolean()
  readonly bicycles?: boolean;

  /**
   * Only include trips that allow dogs.
   * @example false
   */
  @IsOptional()
  @IsBoolean()
  readonly dogs?: boolean;
}
