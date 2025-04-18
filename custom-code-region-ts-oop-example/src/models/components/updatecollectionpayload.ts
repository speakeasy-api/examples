/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  HashMap,
  HashMap$inboundSchema,
  HashMap$Outbound,
  HashMap$outboundSchema,
} from "./hashmap.js";

export type UpdateCollectionPayload = {
  newMetadata?: { [k: string]: HashMap } | null | undefined;
  newName?: string | null | undefined;
};

/** @internal */
export const UpdateCollectionPayload$inboundSchema: z.ZodType<
  UpdateCollectionPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  new_metadata: z.nullable(z.record(HashMap$inboundSchema)).optional(),
  new_name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "new_metadata": "newMetadata",
    "new_name": "newName",
  });
});

/** @internal */
export type UpdateCollectionPayload$Outbound = {
  new_metadata?: { [k: string]: HashMap$Outbound } | null | undefined;
  new_name?: string | null | undefined;
};

/** @internal */
export const UpdateCollectionPayload$outboundSchema: z.ZodType<
  UpdateCollectionPayload$Outbound,
  z.ZodTypeDef,
  UpdateCollectionPayload
> = z.object({
  newMetadata: z.nullable(z.record(HashMap$outboundSchema)).optional(),
  newName: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    newMetadata: "new_metadata",
    newName: "new_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCollectionPayload$ {
  /** @deprecated use `UpdateCollectionPayload$inboundSchema` instead. */
  export const inboundSchema = UpdateCollectionPayload$inboundSchema;
  /** @deprecated use `UpdateCollectionPayload$outboundSchema` instead. */
  export const outboundSchema = UpdateCollectionPayload$outboundSchema;
  /** @deprecated use `UpdateCollectionPayload$Outbound` instead. */
  export type Outbound = UpdateCollectionPayload$Outbound;
}

export function updateCollectionPayloadToJSON(
  updateCollectionPayload: UpdateCollectionPayload,
): string {
  return JSON.stringify(
    UpdateCollectionPayload$outboundSchema.parse(updateCollectionPayload),
  );
}

export function updateCollectionPayloadFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCollectionPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCollectionPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCollectionPayload' from JSON`,
  );
}
