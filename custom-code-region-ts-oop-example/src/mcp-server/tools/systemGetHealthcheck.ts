/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { systemGetHealthcheck } from "../../funcs/systemGetHealthcheck.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$systemGetHealthcheck: ToolDefinition = {
  name: "system_get-healthcheck",
  description:
    `Health check endpoint that returns 200 if the server and executor are ready`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await systemGetHealthcheck(
      client,
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
