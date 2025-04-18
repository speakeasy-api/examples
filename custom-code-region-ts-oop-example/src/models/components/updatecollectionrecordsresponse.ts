/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateCollectionRecordsResponse = {};

/** @internal */
export const UpdateCollectionRecordsResponse$inboundSchema: z.ZodType<
  UpdateCollectionRecordsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UpdateCollectionRecordsResponse$Outbound = {};

/** @internal */
export const UpdateCollectionRecordsResponse$outboundSchema: z.ZodType<
  UpdateCollectionRecordsResponse$Outbound,
  z.ZodTypeDef,
  UpdateCollectionRecordsResponse
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCollectionRecordsResponse$ {
  /** @deprecated use `UpdateCollectionRecordsResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateCollectionRecordsResponse$inboundSchema;
  /** @deprecated use `UpdateCollectionRecordsResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateCollectionRecordsResponse$outboundSchema;
  /** @deprecated use `UpdateCollectionRecordsResponse$Outbound` instead. */
  export type Outbound = UpdateCollectionRecordsResponse$Outbound;
}

export function updateCollectionRecordsResponseToJSON(
  updateCollectionRecordsResponse: UpdateCollectionRecordsResponse,
): string {
  return JSON.stringify(
    UpdateCollectionRecordsResponse$outboundSchema.parse(
      updateCollectionRecordsResponse,
    ),
  );
}

export function updateCollectionRecordsResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCollectionRecordsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCollectionRecordsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCollectionRecordsResponse' from JSON`,
  );
}
