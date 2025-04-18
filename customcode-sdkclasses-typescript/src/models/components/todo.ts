/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

/** @internal */
export const Todo$inboundSchema: z.ZodType<Todo, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    completed: z.boolean(),
  });

/** @internal */
export type Todo$Outbound = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

/** @internal */
export const Todo$outboundSchema: z.ZodType<Todo$Outbound, z.ZodTypeDef, Todo> =
  z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    completed: z.boolean(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Todo$ {
  /** @deprecated use `Todo$inboundSchema` instead. */
  export const inboundSchema = Todo$inboundSchema;
  /** @deprecated use `Todo$outboundSchema` instead. */
  export const outboundSchema = Todo$outboundSchema;
  /** @deprecated use `Todo$Outbound` instead. */
  export type Outbound = Todo$Outbound;
}

export function todoToJSON(todo: Todo): string {
  return JSON.stringify(Todo$outboundSchema.parse(todo));
}

export function todoFromJSON(
  jsonString: string,
): SafeParseResult<Todo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Todo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Todo' from JSON`,
  );
}
