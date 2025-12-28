/**
 * Payment source types
 */
export enum PaymentSourceType {
  CARD = "card",
  BANK_ACCOUNT = "bank_account",
}

/**
 * Payment status
 */
export enum PaymentStatus {
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

/**
 * Currency codes
 */
export enum Currency {
  BAM = "bam",
  BGN = "bgn",
  CHF = "chf",
  EUR = "eur",
  GBP = "gbp",
  NOK = "nok",
  SEK = "sek",
  TRY = "try",
}

/**
 * Card payment source
 */
export interface CardSource {
  /**
   * Type identifier for card payment
   * @example "card"
   */
  object: "card";

  /**
   * Cardholder's full name as it appears on the card.
   * @example "Francis Bourgeois"
   */
  name: string;

  /**
   * The card number, as a string without any separators.
   * @example "4242424242424242"
   */
  number: string;

  /**
   * Card security code, 3 or 4 digits usually found on the back of the card.
   * @minLength 3
   * @maxLength 4
   * @example "123"
   */
  cvc: string;

  /**
   * Two-digit number representing the card's expiration month.
   * @isInt
   * @minimum 1
   * @maximum 12
   * @example 12
   */
  exp_month: number;

  /**
   * Four-digit number representing the card's expiration year.
   * @isInt
   * @example 2025
   */
  exp_year: number;

  /**
   * First line of the cardholder's address.
   * @example "123 Fake Street"
   */
  address_line1?: string;

  /**
   * Second line of the cardholder's address.
   * @example "4th Floor"
   */
  address_line2?: string;

  /**
   * City of the cardholder's address.
   * @example "London"
   */
  address_city?: string;

  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   * @example "gb"
   */
  address_country: string;

  /**
   * Postal code of the cardholder's address.
   * @example "N12 9XX"
   */
  address_post_code?: string;
}

/**
 * Bank account payment source
 */
export interface BankAccountSource {
  /**
   * Type identifier for bank account payment
   * @example "bank_account"
   */
  object: "bank_account";

  /**
   * Account holder's full name.
   * @example "Francis Bourgeois"
   */
  name: string;

  /**
   * The account number for the bank account, in string form. Must be a current account.
   * @example "00012345"
   */
  number: string;

  /**
   * The sort code for the bank account, in string form. Must be a six-digit number.
   * @example "000123"
   */
  sort_code: string;

  /**
   * The type of entity that holds the account.
   * @example "individual"
   */
  account_type: "individual" | "company";

  /**
   * The name of the bank associated with the routing number.
   * @example "Starling Bank"
   */
  bank_name: string;

  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   * @example "gb"
   */
  country: string;
}

/**
 * Payment source union type
 */
export type PaymentSource = CardSource | BankAccountSource;

/**
 * A payment for a booking.
 */
export interface BookingPayment {
  /**
   * Unique identifier for the payment.
   * @format uuid
   * @example "2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a"
   * @readonly
   */
  id?: string;

  /**
   * Amount intended to be collected by this payment.
   * A positive decimal figure describing the amount to be collected.
   * @minimum 0
   * @example 49.99
   */
  amount: number;

  /**
   * Three-letter ISO currency code, in lowercase.
   * @example "gbp"
   */
  currency: Currency;

  /**
   * The payment source to take the payment from.
   * This can be a card or a bank account.
   */
  source: PaymentSource;

  /**
   * The status of the payment.
   * @example "succeeded"
   * @readonly
   */
  status?: PaymentStatus;
}
