# MCP Echo Input Server

A simple Model Context Protocol (MCP) server written in JavaScript that provides a single echo tool.

## Features

- Single `echo` tool that returns the input text with a "[user] said: " prefix
- Configurable user name via `USER_NAME` environment variable
- Built using the official MCP SDK
- Runs on stdio transport

## Installation

### Build

```bash
npm install
```

Add the following configuration to your `claude-desktop-config.json` file:

```json
{
  "mcpServers": {
    "echo-server-local-build": {
      "command": "node",
      "args": ["/Users/koladev/ritza-projects/mcp-echo-server/index.js"],
      "env": {
        "USER_NAME": "John"
      }
    }
  }
}

```

Reload Claude Desktop and you should see the `echo-server-local-build` server in the list of available MCP servers.

### NPM package

Add the following configuration to your `claude-desktop-config.json` file:

```json
{
  "mcpServers": {
    "echo-server": {
      "command": "npx",
      "args": ["-y", "mcp-echo-input-server"],
      "env": {
        "USER_NAME": "John"
      }
    }
  }
}
```

Reload Claude Desktop and you should see the `echo-server` server in the list of available MCP servers.

### MCPB packaging

Run the following command to install dependencies:

```bash
npm install
```

Run the following command to create a `manifest.json` file:

```bash
npx @anthropic-ai/mcpb init
```

After entering the required information, the `manifest.json` file will be created in the current directory.

You can take example on the `manifest.example.json` file.

Build the package:

```bash
npx @anthropic-ai/mcpb build
```

A file name `claude-desktop-config.json` will be created in the current directory.

Navigate to Claude Desktop, Settings -> Extensions -> Advanced Settings -> Install Extension and select the `.mcpb` file.
