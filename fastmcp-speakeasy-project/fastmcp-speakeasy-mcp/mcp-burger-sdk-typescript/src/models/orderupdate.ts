/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  OrderStatus,
  OrderStatus$inboundSchema,
  OrderStatus$outboundSchema,
} from "./orderstatus.js";

/**
 * Fields to update an order
 */
export type OrderUpdate = {
  /**
   * List of burger ids in the order
   */
  burgerIds?: Array<number> | undefined;
  /**
   * Note for the order
   */
  note?: string | undefined;
  /**
   * Status of the order
   */
  status?: OrderStatus | undefined;
  /**
   * Table number for the order
   */
  table?: number | undefined;
};

/** @internal */
export const OrderUpdate$inboundSchema: z.ZodType<
  OrderUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  burger_ids: z.array(z.number().int()).optional(),
  note: z.string().optional(),
  status: OrderStatus$inboundSchema.optional(),
  table: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "burger_ids": "burgerIds",
  });
});

/** @internal */
export type OrderUpdate$Outbound = {
  burger_ids?: Array<number> | undefined;
  note?: string | undefined;
  status?: string | undefined;
  table?: number | undefined;
};

/** @internal */
export const OrderUpdate$outboundSchema: z.ZodType<
  OrderUpdate$Outbound,
  z.ZodTypeDef,
  OrderUpdate
> = z.object({
  burgerIds: z.array(z.number().int()).optional(),
  note: z.string().optional(),
  status: OrderStatus$outboundSchema.optional(),
  table: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    burgerIds: "burger_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderUpdate$ {
  /** @deprecated use `OrderUpdate$inboundSchema` instead. */
  export const inboundSchema = OrderUpdate$inboundSchema;
  /** @deprecated use `OrderUpdate$outboundSchema` instead. */
  export const outboundSchema = OrderUpdate$outboundSchema;
  /** @deprecated use `OrderUpdate$Outbound` instead. */
  export type Outbound = OrderUpdate$Outbound;
}

export function orderUpdateToJSON(orderUpdate: OrderUpdate): string {
  return JSON.stringify(OrderUpdate$outboundSchema.parse(orderUpdate));
}

export function orderUpdateFromJSON(
  jsonString: string,
): SafeParseResult<OrderUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderUpdate' from JSON`,
  );
}
