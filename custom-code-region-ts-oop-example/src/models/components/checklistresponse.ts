/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChecklistResponse = {
  maxBatchSize: number;
};

/** @internal */
export const ChecklistResponse$inboundSchema: z.ZodType<
  ChecklistResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  max_batch_size: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "max_batch_size": "maxBatchSize",
  });
});

/** @internal */
export type ChecklistResponse$Outbound = {
  max_batch_size: number;
};

/** @internal */
export const ChecklistResponse$outboundSchema: z.ZodType<
  ChecklistResponse$Outbound,
  z.ZodTypeDef,
  ChecklistResponse
> = z.object({
  maxBatchSize: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    maxBatchSize: "max_batch_size",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChecklistResponse$ {
  /** @deprecated use `ChecklistResponse$inboundSchema` instead. */
  export const inboundSchema = ChecklistResponse$inboundSchema;
  /** @deprecated use `ChecklistResponse$outboundSchema` instead. */
  export const outboundSchema = ChecklistResponse$outboundSchema;
  /** @deprecated use `ChecklistResponse$Outbound` instead. */
  export type Outbound = ChecklistResponse$Outbound;
}

export function checklistResponseToJSON(
  checklistResponse: ChecklistResponse,
): string {
  return JSON.stringify(
    ChecklistResponse$outboundSchema.parse(checklistResponse),
  );
}

export function checklistResponseFromJSON(
  jsonString: string,
): SafeParseResult<ChecklistResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChecklistResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChecklistResponse' from JSON`,
  );
}
