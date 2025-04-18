/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const Include = {
  Distances: "distances",
  Documents: "documents",
  Embeddings: "embeddings",
  Metadatas: "metadatas",
  Uris: "uris",
} as const;
export type Include = ClosedEnum<typeof Include>;

/** @internal */
export const Include$inboundSchema: z.ZodNativeEnum<typeof Include> = z
  .nativeEnum(Include);

/** @internal */
export const Include$outboundSchema: z.ZodNativeEnum<typeof Include> =
  Include$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Include$ {
  /** @deprecated use `Include$inboundSchema` instead. */
  export const inboundSchema = Include$inboundSchema;
  /** @deprecated use `Include$outboundSchema` instead. */
  export const outboundSchema = Include$outboundSchema;
}
