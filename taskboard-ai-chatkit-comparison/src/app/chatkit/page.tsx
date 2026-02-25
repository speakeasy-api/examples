"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { TaskBoard } from "@/components/task-board";
import { FloatingChatPanel } from "@/components/floating-chat-panel";

let ChatKitComponent: React.ComponentType<{ control: unknown; className?: string }> | null = null;
let useChatKitHook: ((opts: unknown) => { control: unknown }) | null = null;

try {
  // Dynamic import to handle cases where the package may not work without setup
  const mod = require("@openai/chatkit-react");
  ChatKitComponent = mod.ChatKit;
  useChatKitHook = mod.useChatKit;
} catch {
  // Package not available or not properly set up
}

const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID;

function ChatKitPanelInner() {
  const [sessionError, setSessionError] = useState<string | null>(null);

  // Only create a session when the SDK asks (getClientSecret). No pre-flight POST
  // so we avoid creating an extra session on every panel open.
  const getClientSecret = useMemo(() => {
    return async (currentSecret: string | null) => {
      if (currentSecret) {
        console.log("[ChatKit] Reusing existing session");
        return currentSecret;
      }
      console.log("[ChatKit] Creating session, workflowId:", WORKFLOW_ID ? `${WORKFLOW_ID.slice(0, 12)}...` : "missing");
      const response = await fetch("/api/chatkit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workflow: { id: WORKFLOW_ID } }),
      });

      const payload = await response.json();
      if (!response.ok) {
        console.error("[ChatKit] Session error:", response.status, payload);
        const msg = payload.error ?? "Failed to create session";
        setSessionError(msg);
        throw new Error(msg);
      }
      setSessionError(null);
      if (!payload.client_secret) {
        console.error("[ChatKit] No client_secret in response:", payload);
        throw new Error("Missing client secret in response");
      }
      console.log("[ChatKit] Session created successfully");
      return payload.client_secret;
    };
  }, []);

  // No onClientTool: all tools are provided by the agent (workflow / MCP).
  const chatkit = useChatKitHook({
    api: { getClientSecret },
  });

  if (sessionError) {
    return (
      <div className="p-4 text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 rounded-md border border-amber-200 dark:border-amber-800">
        <p className="font-medium mb-1">Cannot start chat</p>
        <p className="text-xs">{sessionError}</p>
        <p className="text-xs mt-2 text-muted-foreground">
          Create a workflow in the OpenAI Agent Builder and set NEXT_PUBLIC_CHATKIT_WORKFLOW_ID in .env.
        </p>
      </div>
    );
  }

  return (
    <ChatKitComponent
      control={chatkit.control}
      className="h-full min-h-[300px] w-full"
    />
  );
}

function ChatKitPanel() {
  if (!useChatKitHook || !ChatKitComponent) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        ChatKit React component not available.
      </div>
    );
  }
  return <ChatKitPanelInner />;
}

function ChatKitSetupGuide() {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-3">ChatKit Setup Required</h3>
      <div className="text-sm text-muted-foreground space-y-3">
        <p>
          OpenAI ChatKit requires a workflow ID from the Agent Builder
          dashboard. All tools are provided by the agent (workflow / MCP); this app does not register client-side tools.
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Go to the OpenAI Agent Builder dashboard</li>
          <li>Create a workflow whose agent has the tools you need (e.g. via MCP or server-side tools)</li>
          <li>
            Copy the workflow ID (starts with <code>wf_</code>)
          </li>
          <li>
            Add to your <code>.env</code> file:
            <pre className="mt-1 p-2 bg-muted rounded text-xs">
              NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_...
            </pre>
          </li>
          <li>Restart the dev server</li>
        </ol>
        <p className="text-xs">
          Note: ChatKit uses OpenAI&apos;s managed infrastructure to handle chat
          sessions, threading, and streaming.
        </p>
      </div>
    </div>
  );
}

export default function ChatKitPage() {
  const hasWorkflowId = !!WORKFLOW_ID;

  return (
    <>
      <Script
        src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
        strategy="afterInteractive"
      />
      <main className="min-h-screen bg-background">
        <div className="p-6">
          <div className="mb-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              &larr; Back to demos
            </Link>
            <h1 className="text-2xl font-bold mt-1">OpenAI ChatKit Demo</h1>
            <p className="text-sm text-muted-foreground">
              AI task management powered by OpenAI ChatKit. Open the chat from
              the button in the corner.
            </p>
          </div>
          <TaskBoard />
        </div>

        {hasWorkflowId ? (
          <FloatingChatPanel title="ChatKit Assistant">
            <ChatKitPanel />
          </FloatingChatPanel>
        ) : (
          <div className="fixed bottom-6 right-6 z-40 w-80 rounded-lg border bg-muted/30 p-4 shadow-lg">
            <ChatKitSetupGuide />
          </div>
        )}
      </main>
    </>
  );
}
