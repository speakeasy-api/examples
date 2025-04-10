/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type User = {
  /**
   * Unique identifier for the user.
   */
  id: string;
  /**
   * Email address of the user.
   */
  email: string;
  /**
   * Indicates whether the email address has been verified.
   */
  emailVerified: boolean;
  /**
   * GitHub handle of the user.
   */
  githubHandle?: string | null | undefined;
  /**
   * Display name of the user.
   */
  displayName: string;
  /**
   * URL of the user's photo.
   */
  photoUrl?: string | null | undefined;
  /**
   * Identifier of the default workspace.
   */
  defaultWorkspaceId?: string | null | undefined;
  /**
   * Indicates whether the user has been confirmed.
   */
  confirmed: boolean;
  /**
   * Indicates whether the user has been whitelisted.
   */
  whitelisted: boolean;
  /**
   * Timestamp of the last login.
   */
  lastLoginAt?: Date | null | undefined;
  /**
   * Indicates whether the user is an admin.
   */
  admin: boolean;
  /**
   * Timestamp of the user's creation.
   */
  createdAt: Date;
  /**
   * Timestamp of the user's last update.
   */
  updatedAt: Date;
  /**
   * Indicates whether the user is internal.
   */
  internal?: boolean | undefined;
  /**
   * Hash used for pylon identity verification returned on v1/user.
   */
  pylonIdentityHash?: string | undefined;
  /**
   * Indicates whether the user has created an API key. Not always populated
   */
  hasCreatedApiKey?: boolean | undefined;
};

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean(),
    github_handle: z.nullable(z.string()).optional(),
    display_name: z.string(),
    photo_url: z.nullable(z.string()).optional(),
    default_workspace_id: z.nullable(z.string()).optional(),
    confirmed: z.boolean(),
    whitelisted: z.boolean(),
    last_login_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    admin: z.boolean(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    updated_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    internal: z.boolean().optional(),
    pylon_identity_hash: z.string().optional(),
    has_created_api_key: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "email_verified": "emailVerified",
      "github_handle": "githubHandle",
      "display_name": "displayName",
      "photo_url": "photoUrl",
      "default_workspace_id": "defaultWorkspaceId",
      "last_login_at": "lastLoginAt",
      "created_at": "createdAt",
      "updated_at": "updatedAt",
      "pylon_identity_hash": "pylonIdentityHash",
      "has_created_api_key": "hasCreatedApiKey",
    });
  });

/** @internal */
export type User$Outbound = {
  id: string;
  email: string;
  email_verified: boolean;
  github_handle?: string | null | undefined;
  display_name: string;
  photo_url?: string | null | undefined;
  default_workspace_id?: string | null | undefined;
  confirmed: boolean;
  whitelisted: boolean;
  last_login_at?: string | null | undefined;
  admin: boolean;
  created_at: string;
  updated_at: string;
  internal?: boolean | undefined;
  pylon_identity_hash?: string | undefined;
  has_created_api_key?: boolean | undefined;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> =
  z.object({
    id: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    githubHandle: z.nullable(z.string()).optional(),
    displayName: z.string(),
    photoUrl: z.nullable(z.string()).optional(),
    defaultWorkspaceId: z.nullable(z.string()).optional(),
    confirmed: z.boolean(),
    whitelisted: z.boolean(),
    lastLoginAt: z.nullable(z.date().transform(v => v.toISOString()))
      .optional(),
    admin: z.boolean(),
    createdAt: z.date().transform(v => v.toISOString()),
    updatedAt: z.date().transform(v => v.toISOString()),
    internal: z.boolean().optional(),
    pylonIdentityHash: z.string().optional(),
    hasCreatedApiKey: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      emailVerified: "email_verified",
      githubHandle: "github_handle",
      displayName: "display_name",
      photoUrl: "photo_url",
      defaultWorkspaceId: "default_workspace_id",
      lastLoginAt: "last_login_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      pylonIdentityHash: "pylon_identity_hash",
      hasCreatedApiKey: "has_created_api_key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
  /** @deprecated use `User$inboundSchema` instead. */
  export const inboundSchema = User$inboundSchema;
  /** @deprecated use `User$outboundSchema` instead. */
  export const outboundSchema = User$outboundSchema;
  /** @deprecated use `User$Outbound` instead. */
  export type Outbound = User$Outbound;
}

export function userToJSON(user: User): string {
  return JSON.stringify(User$outboundSchema.parse(user));
}

export function userFromJSON(
  jsonString: string,
): SafeParseResult<User, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => User$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'User' from JSON`,
  );
}
