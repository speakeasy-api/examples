/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLapRequest = {
  /**
   * The ID of the driver
   */
  driverId: string;
  /**
   * The ID of the lap record
   */
  lapId: string;
};

/** @internal */
export const GetLapRequest$inboundSchema: z.ZodType<
  GetLapRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  driver_id: z.string(),
  lap_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "driver_id": "driverId",
    "lap_id": "lapId",
  });
});

/** @internal */
export type GetLapRequest$Outbound = {
  driver_id: string;
  lap_id: string;
};

/** @internal */
export const GetLapRequest$outboundSchema: z.ZodType<
  GetLapRequest$Outbound,
  z.ZodTypeDef,
  GetLapRequest
> = z.object({
  driverId: z.string(),
  lapId: z.string(),
}).transform((v) => {
  return remap$(v, {
    driverId: "driver_id",
    lapId: "lap_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLapRequest$ {
  /** @deprecated use `GetLapRequest$inboundSchema` instead. */
  export const inboundSchema = GetLapRequest$inboundSchema;
  /** @deprecated use `GetLapRequest$outboundSchema` instead. */
  export const outboundSchema = GetLapRequest$outboundSchema;
  /** @deprecated use `GetLapRequest$Outbound` instead. */
  export type Outbound = GetLapRequest$Outbound;
}

export function getLapRequestToJSON(getLapRequest: GetLapRequest): string {
  return JSON.stringify(GetLapRequest$outboundSchema.parse(getLapRequest));
}

export function getLapRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLapRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLapRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLapRequest' from JSON`,
  );
}
