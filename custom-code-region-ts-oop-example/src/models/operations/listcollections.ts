/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCollectionsGlobals = {
  tenantId?: string | undefined;
  databaseName?: string | undefined;
};

export type ListCollectionsRequest = {
  /**
   * Tenant ID
   */
  tenantId?: string | undefined;
  /**
   * Database name to list collections from
   */
  databaseName?: string | undefined;
  /**
   * Limit for pagination
   */
  limit?: number | undefined;
  /**
   * Offset for pagination
   */
  offset?: number | undefined;
};

/** @internal */
export const ListCollectionsGlobals$inboundSchema: z.ZodType<
  ListCollectionsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  tenant_id: z.string().optional(),
  database_name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "tenant_id": "tenantId",
    "database_name": "databaseName",
  });
});

/** @internal */
export type ListCollectionsGlobals$Outbound = {
  tenant_id?: string | undefined;
  database_name?: string | undefined;
};

/** @internal */
export const ListCollectionsGlobals$outboundSchema: z.ZodType<
  ListCollectionsGlobals$Outbound,
  z.ZodTypeDef,
  ListCollectionsGlobals
> = z.object({
  tenantId: z.string().optional(),
  databaseName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    tenantId: "tenant_id",
    databaseName: "database_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCollectionsGlobals$ {
  /** @deprecated use `ListCollectionsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListCollectionsGlobals$inboundSchema;
  /** @deprecated use `ListCollectionsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListCollectionsGlobals$outboundSchema;
  /** @deprecated use `ListCollectionsGlobals$Outbound` instead. */
  export type Outbound = ListCollectionsGlobals$Outbound;
}

export function listCollectionsGlobalsToJSON(
  listCollectionsGlobals: ListCollectionsGlobals,
): string {
  return JSON.stringify(
    ListCollectionsGlobals$outboundSchema.parse(listCollectionsGlobals),
  );
}

export function listCollectionsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListCollectionsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCollectionsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCollectionsGlobals' from JSON`,
  );
}

/** @internal */
export const ListCollectionsRequest$inboundSchema: z.ZodType<
  ListCollectionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tenant_id: z.string().optional(),
  database_name: z.string().optional(),
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "tenant_id": "tenantId",
    "database_name": "databaseName",
  });
});

/** @internal */
export type ListCollectionsRequest$Outbound = {
  tenant_id?: string | undefined;
  database_name?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
};

/** @internal */
export const ListCollectionsRequest$outboundSchema: z.ZodType<
  ListCollectionsRequest$Outbound,
  z.ZodTypeDef,
  ListCollectionsRequest
> = z.object({
  tenantId: z.string().optional(),
  databaseName: z.string().optional(),
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    tenantId: "tenant_id",
    databaseName: "database_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCollectionsRequest$ {
  /** @deprecated use `ListCollectionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCollectionsRequest$inboundSchema;
  /** @deprecated use `ListCollectionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListCollectionsRequest$outboundSchema;
  /** @deprecated use `ListCollectionsRequest$Outbound` instead. */
  export type Outbound = ListCollectionsRequest$Outbound;
}

export function listCollectionsRequestToJSON(
  listCollectionsRequest: ListCollectionsRequest,
): string {
  return JSON.stringify(
    ListCollectionsRequest$outboundSchema.parse(listCollectionsRequest),
  );
}

export function listCollectionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCollectionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCollectionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCollectionsRequest' from JSON`,
  );
}
