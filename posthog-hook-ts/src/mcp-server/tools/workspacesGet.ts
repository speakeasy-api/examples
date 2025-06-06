/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesGet } from "../../funcs/workspacesGet.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$workspacesGet: ToolDefinition = {
  name: "workspaces_get",
  description: `Get workspace by context

Get information about a particular workspace by context.`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await workspacesGet(
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
