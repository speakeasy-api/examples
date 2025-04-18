/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateDatabaseGlobals = {
  tenantId?: string | undefined;
};

export type CreateDatabaseRequest = {
  /**
   * Tenant ID to associate with the new database
   */
  tenantId?: string | undefined;
  createDatabasePayload: components.CreateDatabasePayload;
};

/** @internal */
export const CreateDatabaseGlobals$inboundSchema: z.ZodType<
  CreateDatabaseGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  tenant_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "tenant_id": "tenantId",
  });
});

/** @internal */
export type CreateDatabaseGlobals$Outbound = {
  tenant_id?: string | undefined;
};

/** @internal */
export const CreateDatabaseGlobals$outboundSchema: z.ZodType<
  CreateDatabaseGlobals$Outbound,
  z.ZodTypeDef,
  CreateDatabaseGlobals
> = z.object({
  tenantId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    tenantId: "tenant_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatabaseGlobals$ {
  /** @deprecated use `CreateDatabaseGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateDatabaseGlobals$inboundSchema;
  /** @deprecated use `CreateDatabaseGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateDatabaseGlobals$outboundSchema;
  /** @deprecated use `CreateDatabaseGlobals$Outbound` instead. */
  export type Outbound = CreateDatabaseGlobals$Outbound;
}

export function createDatabaseGlobalsToJSON(
  createDatabaseGlobals: CreateDatabaseGlobals,
): string {
  return JSON.stringify(
    CreateDatabaseGlobals$outboundSchema.parse(createDatabaseGlobals),
  );
}

export function createDatabaseGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatabaseGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatabaseGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatabaseGlobals' from JSON`,
  );
}

/** @internal */
export const CreateDatabaseRequest$inboundSchema: z.ZodType<
  CreateDatabaseRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tenant_id: z.string().optional(),
  CreateDatabasePayload: components.CreateDatabasePayload$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "tenant_id": "tenantId",
    "CreateDatabasePayload": "createDatabasePayload",
  });
});

/** @internal */
export type CreateDatabaseRequest$Outbound = {
  tenant_id?: string | undefined;
  CreateDatabasePayload: components.CreateDatabasePayload$Outbound;
};

/** @internal */
export const CreateDatabaseRequest$outboundSchema: z.ZodType<
  CreateDatabaseRequest$Outbound,
  z.ZodTypeDef,
  CreateDatabaseRequest
> = z.object({
  tenantId: z.string().optional(),
  createDatabasePayload: components.CreateDatabasePayload$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    tenantId: "tenant_id",
    createDatabasePayload: "CreateDatabasePayload",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatabaseRequest$ {
  /** @deprecated use `CreateDatabaseRequest$inboundSchema` instead. */
  export const inboundSchema = CreateDatabaseRequest$inboundSchema;
  /** @deprecated use `CreateDatabaseRequest$outboundSchema` instead. */
  export const outboundSchema = CreateDatabaseRequest$outboundSchema;
  /** @deprecated use `CreateDatabaseRequest$Outbound` instead. */
  export type Outbound = CreateDatabaseRequest$Outbound;
}

export function createDatabaseRequestToJSON(
  createDatabaseRequest: CreateDatabaseRequest,
): string {
  return JSON.stringify(
    CreateDatabaseRequest$outboundSchema.parse(createDatabaseRequest),
  );
}

export function createDatabaseRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatabaseRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatabaseRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatabaseRequest' from JSON`,
  );
}
