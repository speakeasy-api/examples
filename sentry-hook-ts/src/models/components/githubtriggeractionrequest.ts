/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A request to trigger an action on a GitHub target
 */
export type GithubTriggerActionRequest = {
  /**
   * The GitHub organization name
   */
  org: string;
  /**
   * The GitHub repository name
   */
  repoName: string;
  /**
   * The target name for the action
   */
  targetName?: string | undefined;
  /**
   * The generation lock ID
   */
  genLockId: string;
  /**
   * A version to override the SDK too in workflow dispatch
   */
  setVersion?: string | undefined;
  /**
   * Force an SDK generation
   */
  force?: boolean | undefined;
};

/** @internal */
export const GithubTriggerActionRequest$inboundSchema: z.ZodType<
  GithubTriggerActionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  org: z.string(),
  repo_name: z.string(),
  target_name: z.string().optional(),
  gen_lock_id: z.string(),
  set_version: z.string().optional(),
  force: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "repo_name": "repoName",
    "target_name": "targetName",
    "gen_lock_id": "genLockId",
    "set_version": "setVersion",
  });
});

/** @internal */
export type GithubTriggerActionRequest$Outbound = {
  org: string;
  repo_name: string;
  target_name?: string | undefined;
  gen_lock_id: string;
  set_version?: string | undefined;
  force?: boolean | undefined;
};

/** @internal */
export const GithubTriggerActionRequest$outboundSchema: z.ZodType<
  GithubTriggerActionRequest$Outbound,
  z.ZodTypeDef,
  GithubTriggerActionRequest
> = z.object({
  org: z.string(),
  repoName: z.string(),
  targetName: z.string().optional(),
  genLockId: z.string(),
  setVersion: z.string().optional(),
  force: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    repoName: "repo_name",
    targetName: "target_name",
    genLockId: "gen_lock_id",
    setVersion: "set_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubTriggerActionRequest$ {
  /** @deprecated use `GithubTriggerActionRequest$inboundSchema` instead. */
  export const inboundSchema = GithubTriggerActionRequest$inboundSchema;
  /** @deprecated use `GithubTriggerActionRequest$outboundSchema` instead. */
  export const outboundSchema = GithubTriggerActionRequest$outboundSchema;
  /** @deprecated use `GithubTriggerActionRequest$Outbound` instead. */
  export type Outbound = GithubTriggerActionRequest$Outbound;
}

export function githubTriggerActionRequestToJSON(
  githubTriggerActionRequest: GithubTriggerActionRequest,
): string {
  return JSON.stringify(
    GithubTriggerActionRequest$outboundSchema.parse(githubTriggerActionRequest),
  );
}

export function githubTriggerActionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GithubTriggerActionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GithubTriggerActionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GithubTriggerActionRequest' from JSON`,
  );
}
