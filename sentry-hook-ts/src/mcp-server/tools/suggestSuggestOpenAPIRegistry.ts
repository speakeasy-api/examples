/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { suggestSuggestOpenAPIRegistry } from "../../funcs/suggestSuggestOpenAPIRegistry.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SuggestOpenAPIRegistryRequest$inboundSchema,
};

export const tool$suggestSuggestOpenAPIRegistry: ToolDefinition<typeof args> = {
  name: "suggest_suggest-open-API-registry",
  description:
    `Generate suggestions for improving an OpenAPI document stored in the registry.

Get suggestions from an LLM model for improving an OpenAPI document stored in the registry.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await suggestSuggestOpenAPIRegistry(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
