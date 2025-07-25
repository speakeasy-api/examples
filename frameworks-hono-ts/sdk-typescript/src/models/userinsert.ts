/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type UserInsert = {
  name: string;
  age: number;
};

/** @internal */
export const UserInsert$inboundSchema: z.ZodType<
  UserInsert,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  age: z.number(),
});

/** @internal */
export type UserInsert$Outbound = {
  name: string;
  age: number;
};

/** @internal */
export const UserInsert$outboundSchema: z.ZodType<
  UserInsert$Outbound,
  z.ZodTypeDef,
  UserInsert
> = z.object({
  name: z.string(),
  age: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserInsert$ {
  /** @deprecated use `UserInsert$inboundSchema` instead. */
  export const inboundSchema = UserInsert$inboundSchema;
  /** @deprecated use `UserInsert$outboundSchema` instead. */
  export const outboundSchema = UserInsert$outboundSchema;
  /** @deprecated use `UserInsert$Outbound` instead. */
  export type Outbound = UserInsert$Outbound;
}

export function userInsertToJSON(userInsert: UserInsert): string {
  return JSON.stringify(UserInsert$outboundSchema.parse(userInsert));
}

export function userInsertFromJSON(
  jsonString: string,
): SafeParseResult<UserInsert, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserInsert$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserInsert' from JSON`,
  );
}
