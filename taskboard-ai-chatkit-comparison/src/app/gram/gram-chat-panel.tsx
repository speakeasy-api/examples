"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PROJECT_SLUG = process.env.NEXT_PUBLIC_GRAM_PROJECT_SLUG!;
const MCP_URL = process.env.NEXT_PUBLIC_GRAM_MCP_URL!;

/**
 * Load Gram Elements via dynamic import so the bundler can resolve
 * the package and the runtime can load it.
 */
async function loadGramElements() {
  return import("@gram-ai/elements");
}

export default function GramChatPanel() {
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);

  const getSession = useCallback(async () => {
    const response = await fetch("/api/gram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error ?? "Failed to create Gram session");
    }
    return data.client_token;
  }, []);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    loadGramElements()
      .then(() => {
        setLoaded(true);
      })
      .catch((err: Error) => {
        console.error("Failed to load Gram Elements:", err);
        setError(
          `Failed to load Gram Elements: ${err.message}. Check the README for setup instructions.`
        );
      });
  }, []);

  if (error) {
    return (
      <div className="p-4 text-sm text-red-500">
        <p className="font-medium mb-2">Gram Elements Error</p>
        <p className="text-xs">{error}</p>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Loading Gram Elements...
      </div>
    );
  }

  return <GramChatInner getSession={getSession} />;
}

function GramChatInner({ getSession }: { getSession: () => Promise<string> }) {
  const [Components, setComponents] = useState<{
    Provider: React.ComponentType<{
      config: Record<string, unknown>;
      getSession?: () => Promise<string>;
      children: React.ReactNode;
    }>;
    Chat: React.ComponentType;
  } | null>(null);

  useEffect(() => {
    loadGramElements().then((mod: Record<string, unknown>) => {
      setComponents({
        Provider: mod.GramElementsProvider as typeof Components extends null
          ? never
          : NonNullable<typeof Components>["Provider"],
        Chat: mod.Chat as React.ComponentType,
      });
    });
  }, []);

  if (!Components) return null;

  const { Provider, Chat } = Components;

  const config = {
    projectSlug: PROJECT_SLUG,
    mcp: MCP_URL,
    variant: "standalone",
    // Required: session fetcher so auth loads and "Session is loading" doesn't stick
    api: {
      sessionFn: async (_init: { projectSlug: string }) => getSession(),
    },
    welcome: {
      title: "Gram Assistant",
      subtitle:
        "I can help you manage tasks. Try asking me to create, update, or list tasks.",
    },
    composer: {
      placeholder: "Ask me to manage your tasks...",
    },
    // Mutating tools require user approval before running; listTasks does not
    tools: {
      toolsRequiringApproval: [
        "createTask",
        "updateTask",
        "createProject",
        "createRelationship",
      ],
    },
  };

  return (
    <Provider config={config}>
      <Chat />
    </Provider>
  );
}
