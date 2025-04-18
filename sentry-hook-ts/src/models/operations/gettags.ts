/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTagsRequest = {
  namespaceName: string;
};

/** @internal */
export const GetTagsRequest$inboundSchema: z.ZodType<
  GetTagsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespace_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
  });
});

/** @internal */
export type GetTagsRequest$Outbound = {
  namespace_name: string;
};

/** @internal */
export const GetTagsRequest$outboundSchema: z.ZodType<
  GetTagsRequest$Outbound,
  z.ZodTypeDef,
  GetTagsRequest
> = z.object({
  namespaceName: z.string(),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTagsRequest$ {
  /** @deprecated use `GetTagsRequest$inboundSchema` instead. */
  export const inboundSchema = GetTagsRequest$inboundSchema;
  /** @deprecated use `GetTagsRequest$outboundSchema` instead. */
  export const outboundSchema = GetTagsRequest$outboundSchema;
  /** @deprecated use `GetTagsRequest$Outbound` instead. */
  export type Outbound = GetTagsRequest$Outbound;
}

export function getTagsRequestToJSON(getTagsRequest: GetTagsRequest): string {
  return JSON.stringify(GetTagsRequest$outboundSchema.parse(getTagsRequest));
}

export function getTagsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTagsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTagsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTagsRequest' from JSON`,
  );
}
