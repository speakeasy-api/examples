import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateBookingDto {
  /**
   * Identifier of the trip to book.
   * @example 'ea399ba1-6d95-433f-92d1-83f67b775594'
   */
  @IsUUID()
  readonly trip_id!: string;

  /**
   * Passenger full name.
   * @example 'John Doe'
   */
  @IsString()
  readonly passenger_name!: string;

  /**
   * Whether the traveler has a bicycle.
   * @example true
   */
  @IsBoolean()
  readonly has_bicycle!: boolean;

  /**
   * Whether the traveler has a dog.
   * @example false
   */
  @IsBoolean()
  readonly has_dog!: boolean;
}
