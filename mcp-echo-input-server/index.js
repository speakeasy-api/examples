#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

class EchoServer {
  constructor() {
    this.server = new Server(
      {
        name: "mcp-echo-input-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: "echo",
            description: "Echo back the input text",
            inputSchema: {
              type: "object",
              properties: {
                text: {
                  type: "string",
                  description: "The text to echo back",
                },
              },
              required: ["text"],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      if (request.params.name === "echo") {
        const { text } = request.params.arguments;
        const userName = process.env.USER_NAME || "user";
        return {
          content: [
            {
              type: "text",
              text: `${userName} said: ${text}`,
            },
          ],
        };
      }

      throw new Error(`Unknown tool: ${request.params.name}`);
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Echo MCP server running on stdio");
  }
}

const server = new EchoServer();
server.run().catch(console.error);
