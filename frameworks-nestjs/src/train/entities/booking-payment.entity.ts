import { IsEnum, IsNumber, IsString, IsUUID } from 'class-validator';

export class BookingPayment {
  /**
   * Payment identifier.
   * @example '2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a'
   */
  @IsUUID()
  readonly id!: string;

  /**
   * Payment amount.
   * @example 49.99
   */
  @IsNumber()
  readonly amount!: number;

  /**
   * Lowercase ISO currency code.
   * @example 'eur'
   */
  @IsString()
  readonly currency!: string;

  /**
   * Payment status.
   * @example 'succeeded'
   */
  @IsEnum(['pending', 'succeeded', 'failed'])
  readonly status!: 'pending' | 'succeeded' | 'failed';
}
