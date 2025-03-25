/**
 * A utility type representing the result of an operation that might succeed or fail.
 *
 * @template T The type of the value in case of success
 * @template E The type of the error in case of failure
 */
declare type Result<T, E = Error> =
  | { ok: true; data: T; error?: never }
  | { ok: false; data?: never; error: E };
