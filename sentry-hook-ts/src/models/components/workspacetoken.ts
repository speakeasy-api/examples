/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A workspace token
 */
export type WorkspaceToken = {
  id: string;
  name: string;
  workspaceId: string;
  alg: string;
  key: string;
  lastUsed?: Date | null | undefined;
  createdAt: Date;
  createdBy?: string | null | undefined;
  email?: string | null | undefined;
};

/** @internal */
export const WorkspaceToken$inboundSchema: z.ZodType<
  WorkspaceToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  workspace_id: z.string(),
  alg: z.string(),
  key: z.string(),
  last_used: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  created_by: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "last_used": "lastUsed",
    "created_at": "createdAt",
    "created_by": "createdBy",
  });
});

/** @internal */
export type WorkspaceToken$Outbound = {
  id: string;
  name: string;
  workspace_id: string;
  alg: string;
  key: string;
  last_used?: string | null | undefined;
  created_at: string;
  created_by?: string | null | undefined;
  email?: string | null | undefined;
};

/** @internal */
export const WorkspaceToken$outboundSchema: z.ZodType<
  WorkspaceToken$Outbound,
  z.ZodTypeDef,
  WorkspaceToken
> = z.object({
  id: z.string(),
  name: z.string(),
  workspaceId: z.string(),
  alg: z.string(),
  key: z.string(),
  lastUsed: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  createdBy: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    lastUsed: "last_used",
    createdAt: "created_at",
    createdBy: "created_by",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceToken$ {
  /** @deprecated use `WorkspaceToken$inboundSchema` instead. */
  export const inboundSchema = WorkspaceToken$inboundSchema;
  /** @deprecated use `WorkspaceToken$outboundSchema` instead. */
  export const outboundSchema = WorkspaceToken$outboundSchema;
  /** @deprecated use `WorkspaceToken$Outbound` instead. */
  export type Outbound = WorkspaceToken$Outbound;
}

export function workspaceTokenToJSON(workspaceToken: WorkspaceToken): string {
  return JSON.stringify(WorkspaceToken$outboundSchema.parse(workspaceToken));
}

export function workspaceTokenFromJSON(
  jsonString: string,
): SafeParseResult<WorkspaceToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkspaceToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkspaceToken' from JSON`,
  );
}
