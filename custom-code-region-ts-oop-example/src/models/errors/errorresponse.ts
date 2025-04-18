/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ErrorResponseData = {
  error: string;
  message: string;
};

export class ErrorResponse extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: ErrorResponseData;

  constructor(err: ErrorResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ErrorResponse";
  }
}

/** @internal */
export const ErrorResponse$inboundSchema: z.ZodType<
  ErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
  message: z.string(),
})
  .transform((v) => {
    return new ErrorResponse(v);
  });

/** @internal */
export type ErrorResponse$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ErrorResponse$outboundSchema: z.ZodType<
  ErrorResponse$Outbound,
  z.ZodTypeDef,
  ErrorResponse
> = z.instanceof(ErrorResponse)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorResponse$ {
  /** @deprecated use `ErrorResponse$inboundSchema` instead. */
  export const inboundSchema = ErrorResponse$inboundSchema;
  /** @deprecated use `ErrorResponse$outboundSchema` instead. */
  export const outboundSchema = ErrorResponse$outboundSchema;
  /** @deprecated use `ErrorResponse$Outbound` instead. */
  export type Outbound = ErrorResponse$Outbound;
}
