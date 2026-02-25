# Requiring Tools: CopilotKit and Gram

How to make tools required (or constrain which tools are available) in **CopilotKit** and **Gram Elements**. ChatKit tools are defined entirely in the agent workflow/MCP, so “requiring” is done in the OpenAI Agent Builder, not in this app.

---

## CopilotKit

CopilotKit doesn’t let you force the LLM to call a specific tool; you can only **expose** tools, **require parameters** inside a tool, and **guide** the agent via instructions.

### 1. Required parameters inside a tool

For each `useCopilotAction`, mark arguments as required in the `parameters` array:

```tsx
useCopilotAction({
  name: "createTask",
  description: "Create a new task on the Kanban board.",
  parameters: [
    { name: "title", type: "string", description: "Title of the task", required: true },
    { name: "description", type: "string", description: "Optional description", required: false },
    { name: "status", type: "string", description: "Status column", required: false },
    // ...
  ],
  handler: async ({ title, ... }) => { /* ... */ },
});
```

- **`required: true`** → the agent is instructed that this parameter is mandatory.
- **`required: false`** (or omitted) → optional.

Your existing actions in `src/app/copilotkit/copilot-actions.tsx` already use `required: true` for `title` and `taskId` where appropriate.

### 2. Keep tools available to the agent

- **`available: 'enabled'`** (default) → tool can be called by the agent. Don’t change this if you want the tool to be used.
- **`available: 'disabled'`** → tool is never called (use only for render-only actions).
- **`available: 'remote'`** → only for remote/Cloud agents.

So for “required” tools, don’t set `available: 'disabled'`.

### 3. Instruct the agent to use the tools

Use the sidebar **instructions** (and optionally **additional instructions**) so the agent is told to use your actions:

**In `CopilotSidebar` (e.g. `src/app/copilotkit/page.tsx`):**

```tsx
<CopilotSidebar
  instructions={`You are a helpful task management assistant. You can help users create, update, and manage tasks on their Kanban board.

When the user asks to create a task, you MUST use the createTask action with at least a title.
When the user asks to update a task (e.g. change status), you MUST use the updateTask action with the task ID and the new fields.
When the user asks to list tasks or show the board, you MUST use the listTasks action first to get current data.
When the user asks to create a project or link tasks, use createProject or createRelationship as appropriate.

Always use these tools rather than describing what you would do; do not say "I would create a task" without calling the action.`}
  labels={{ title: "CopilotKit Assistant", initial: "Hi! I can help you manage your tasks. Try asking me to create a task, list tasks, or update a task status." }}
>
```

**Optional: stage-based instructions with `useCopilotAdditionalInstructions`**

To push the agent to call a specific tool in a given “stage”:

```tsx
import { useCopilotAdditionalInstructions } from "@copilotkit/react-core";

useCopilotAdditionalInstructions({
  available: someCondition ? "enabled" : "disabled",
  instructions: `
    CURRENT STATE: You are collecting task details.
    Say a short prompt, then MUST call the createTask action with the provided details.
  `,
}, [someCondition]);
```

**Summary (CopilotKit):** Require **parameters** with `required: true`, keep tools **available** with `available: 'enabled'`, and **require** usage via clear **instructions** (and optionally `useCopilotAdditionalInstructions`).

---

## Gram Elements

Tools in Gram come from your **MCP** (and optionally **frontend tools**). You can’t force the model to call a tool, but you can **restrict which tools are exposed** and **which require approval**.

### 1. Restrict to specific tools (whitelist): `toolsToInclude`

Only the listed MCP tool names are exposed to the chat. Tool names must match the names in your Gram toolset/MCP.

```tsx
const config = {
  projectSlug: PROJECT_SLUG,
  mcp: MCP_URL,
  api: { sessionFn: async () => getSession() },
  tools: {
    toolsRequiringApproval: [],
    // Only these MCP tools are available in the chat
    toolsToInclude: [
      "createTask",
      "updateTask",
      "listTasks",
      "createProject",
      "createRelationship",
    ],
  },
};
```

- Omit `toolsToInclude` → all tools from the MCP are available.
- Set `toolsToInclude` to an array → only those tools are available (effectively “requiring” that the agent chooses from this set).

You can also use a function:

```tsx
toolsToInclude: ({ toolName }) => ["createTask", "updateTask", "listTasks", "createProject", "createRelationship"].includes(toolName),
```

### 2. Require approval for specific tools: `toolsRequiringApproval`

Tools in this list trigger a user-approval step before execution. Useful for dangerous or sensitive tools.

```tsx
tools: {
  toolsRequiringApproval: ["deleteTask", "createRelationship"],
  // Or dynamically:
  toolsRequiringApproval: ({ toolName }) => toolName.startsWith("delete"),
}
```

- **`toolsRequiringApproval: []`** (what you have now) → no tools require approval; all run without prompting.
- Add tool names (or a function) to **require** approval for those tools only.

### 3. System prompt

Use `systemPrompt` in the Gram config to tell the agent to use the available tools:

```tsx
const config = {
  projectSlug: PROJECT_SLUG,
  mcp: MCP_URL,
  systemPrompt: `You are a task management assistant. When the user asks to create, update, or list tasks, you MUST use the createTask, updateTask, or listTasks tools. Use createProject and createRelationship when the user asks for projects or task links.`,
  tools: {
    toolsRequiringApproval: [],
    toolsToInclude: ["createTask", "updateTask", "listTasks", "createProject", "createRelationship"],
  },
  // ...
};
```

**Summary (Gram):** “Require” tools by **limiting** what’s exposed (`toolsToInclude`), **requiring approval** where needed (`toolsRequiringApproval`), and **guiding** the agent with `systemPrompt`. Tool definitions and names come from your MCP / Gram project.

---

## Quick reference

| Goal | CopilotKit | Gram |
|------|------------|------|
| Require a **parameter** inside a tool | `parameters: [{ name: "x", required: true }]` | Define in MCP/tool schema |
| Make tool **available** to the agent | `available: 'enabled'` (default) | Expose via MCP; optionally restrict with `toolsToInclude` |
| **Restrict** to only certain tools | N/A (all registered actions are available) | `toolsToInclude: ["toolA", "toolB"]` |
| **Require approval** before running a tool | N/A | `toolsRequiringApproval: ["toolA"]` |
| **Instruct** agent to use tools | `instructions` on sidebar + optional `useCopilotAdditionalInstructions` | `systemPrompt` in config |
