# State Management: CopilotKit, ChatKit, Gram

How state is managed in each of the three frameworks in this repo, and how the app state (tasks, projects) fits in.

---

## Overview

| Framework    | UI ↔ Agent shared state | Chat/session state     | App state (tasks, etc.) in this repo      |
|-------------|--------------------------|------------------------|-------------------------------------------|
| **CopilotKit** | Yes (readable + actions) | Runtime / Cloud        | React + SWR; exposed to agent via hooks   |
| **ChatKit**    | No                       | OpenAI (session/thread) | Not shared with agent (agent has own tools) |
| **Gram**       | No                       | Gram + session API     | Separate; agent uses MCP/backend          |

---

## 1. CopilotKit — Shared state (UI ↔ Agent)

CopilotKit is built for **agent-native** apps: the UI and agent share state in both directions.

### Exposing app state to the agent: `useCopilotReadable`

Any React state (or derived data) can be made visible to the Copilot so it can reason about the current UI/data:

```tsx
import { useCopilotReadable } from "@copilotkit/react-core";

// Inside a component that has access to tasks/projects
useCopilotReadable({
  description: "The current list of tasks on the Kanban board",
  value: tasks,
});

useCopilotReadable({
  description: "The current list of projects",
  value: projects,
});
```

- **Description** tells the AI what the data is.
- **Value** can be any serializable data (objects, arrays, or `JSON.stringify(tasks)`).
- Optional: **parentId** for hierarchical context; **categories** to filter which contexts the AI sees.

**In this repo:** `src/app/copilotkit/copilot-actions.tsx` uses `useTasks()` and `useProjects()` (SWR-backed), then passes `tasks` and `projects` into `useCopilotReadable`. The agent sees the current board when answering or calling actions.

### Agent changing app state: `useCopilotAction`

Actions are the reverse direction: the agent invokes a handler that runs in your app and can update state (e.g. call your API and then revalidate):

```tsx
import { useCopilotAction } from "@copilotkit/react-core";

useCopilotAction({
  name: "createTask",
  description: "Create a new task on the Kanban board.",
  parameters: [/* ... */],
  handler: async ({ title, description, status, ... }) => {
    await createTask({ title, description, status, ... }); // e.g. from useTasks()
    return { success: true, message: "Task created." };
  },
});
```

- **Handler** runs in the client (or can call your backend). After it runs, CopilotKit can send the result back to the agent for follow-up.
- App state is updated via your own code (e.g. `createTask` → API → `mutate()` in SWR).

### Where state lives

- **Chat/messages/threads:** Managed by CopilotKit runtime (or Copilot Cloud). You don’t hold message state yourself.
- **App state (tasks, projects):** In this repo: **React + SWR** (`src/hooks/use-tasks.ts`) plus your REST API. CopilotKit only **reads** it (readable) and **triggers updates** (actions); it doesn’t own the store.

**Docs:** [useCopilotReadable](https://docs.copilotkit.ai/reference/hooks/useCopilotReadable), [useCopilotAction](https://docs.copilotkit.ai/reference/hooks/useCopilotAction).

---

## 2. OpenAI ChatKit — No shared state with agent

ChatKit does **not** expose your app state to the agent or provide a built-in “readable” mechanism. The agent runs in OpenAI’s backend (workflow/MCP); your app only provides session auth and, optionally, client-side tool execution.

### Session and thread state

- **Session:** Created via your backend calling OpenAI’s `chatkit/sessions` API. Your app passes a **client secret** to the ChatKit SDK via `getClientSecret` in `useChatKit`.
- **Threads/messages:** Stored and managed by OpenAI. You can react to `onThreadChange`, `onThreadLoadStart`, etc., but you don’t hold the message list in React.

```tsx
const { control } = useChatKit({
  api: { getClientSecret },  // you provide; SDK uses for session
  onThreadChange: ({ threadId }) => { /* optional: persist threadId */ },
});
```

### UI state in your app

Anything you need for the chat UI (loading, errors, etc.) is plain **React state**:

```tsx
const [sessionError, setSessionError] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState(false);
// ...
onError: ({ error }) => setError(error.message),
onResponseStart: () => setIsLoading(true),
onResponseEnd: () => setIsLoading(false),
```

### App state (tasks, board)

- **Not** sent to the agent as context. The agent has only what its workflow/MCP defines.
- In this repo we use **no client-side tools** (`onClientTool` was removed). So task data is not passed from the app to the agent; the agent uses only its own server-side/MCP tools.

**Summary:** ChatKit state = **session/thread on OpenAI’s side** + **your React state for UI**. No shared “app state → agent” layer.

---

## 3. Gram Elements — No shared state with agent

Gram is a **UI component**; it doesn’t manage or share application state with the agent. Chat/session state lives in Gram’s layer; your app state is separate.

### Session state

- Session is created via your backend calling Gram’s API (e.g. `https://app.getgram.ai/rpc/chatSessions.create`) with `Gram-Key` and `Gram-Project`.
- The Gram SDK / assistant-ui uses that session for messages and threads. You don’t store messages in React.

### UI state in your app

In this repo, `gram-chat-panel.tsx` uses local React state for loading and errors:

```tsx
const [error, setError] = useState<string | null>(null);
const [loaded, setLoaded] = useState(false);
```

### App state (tasks, board)

- Stored and fetched the same way as elsewhere (e.g. REST API, SWR if you add it). **Not** automatically exposed to the Gram agent.
- The agent gets context and tools from **MCP / your backend**. To give it task data, you’d do that in the agent or MCP layer, not via a Gram “readable” API (Gram doesn’t have one).

**Summary:** Gram state = **session/messages in Gram/assistant-ui** + **your React state for UI**. App state is separate; agent context is via MCP/backend only.

---

## 4. This repo: where app state lives

- **Tasks, projects, relationships:** Fetched and mutated via `src/lib/api-client.ts` and `src/hooks/use-tasks.ts` (SWR for CopilotKit page; could be used elsewhere).
- **CopilotKit:** That data is exposed to the agent with `useCopilotReadable` and updated via `useCopilotAction` handlers that call the same API/mutate.
- **ChatKit / Gram:** The same API and data exist for the **board UI**, but they are **not** pushed into the chat agents; those agents rely on their own workflow/MCP and tools.

---

## Quick reference

| Need                         | CopilotKit              | ChatKit           | Gram              |
|-----------------------------|-------------------------|-------------------|-------------------|
| Give agent current app data | `useCopilotReadable`    | N/A (agent-side)  | N/A (MCP/backend) |
| Agent triggers app updates  | `useCopilotAction`      | Server/MCP tools  | MCP/backend tools |
| Chat/session state          | Runtime / Cloud         | OpenAI            | Gram + your API   |
| Your UI state (loading, etc.) | React (e.g. useState)   | React             | React             |
