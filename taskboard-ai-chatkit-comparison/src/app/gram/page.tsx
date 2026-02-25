"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { TaskBoard } from "@/components/task-board";
import { FloatingChatPanel } from "@/components/floating-chat-panel";

const PROJECT_SLUG = process.env.NEXT_PUBLIC_GRAM_PROJECT_SLUG;
const MCP_URL = process.env.NEXT_PUBLIC_GRAM_MCP_URL;

const GramChatPanel = dynamic(() => import("./gram-chat-panel"), {
  ssr: false,
  loading: () => (
    <div className="p-4 text-sm text-muted-foreground">Loading Gram chat...</div>
  ),
});

function GramSetupGuide() {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-3">Gram Elements Setup Required</h3>
      <div className="text-sm text-muted-foreground space-y-3">
        <p>
          Gram Elements requires a project on getgram.ai with MCP tools
          configured.
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Create an account at getgram.ai</li>
          <li>
            Create a project and upload your OpenAPI spec or configure MCP tools
          </li>
          <li>Get your project slug and MCP URL</li>
          <li>
            Set the <code>GRAM_API_KEY</code> environment variable
          </li>
          <li>
            Add to your <code>.env</code> file:
            <pre className="mt-1 p-2 bg-muted rounded text-xs break-all">
{`NEXT_PUBLIC_GRAM_PROJECT_SLUG=your-slug
NEXT_PUBLIC_GRAM_MCP_URL=https://app.getgram.ai/mcp/your-slug`}
            </pre>
          </li>
          <li>Restart the dev server</li>
        </ol>
        <p className="text-xs">
          Gram Elements uses MCP (Model Context Protocol) to connect AI to your
          API tools.
        </p>
      </div>
    </div>
  );
}

export default function GramPage() {
  const hasConfig = !!PROJECT_SLUG && !!MCP_URL;

  return (
    <main className="min-h-screen bg-background">
      <div className="p-6">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Back to demos
          </Link>
          <h1 className="text-2xl font-bold mt-1">Gram Elements Demo</h1>
          <p className="text-sm text-muted-foreground">
            AI task management powered by Gram Elements + MCP. Open the chat
            from the button in the corner.
          </p>
        </div>
        <TaskBoard />
      </div>

      {hasConfig ? (
        <FloatingChatPanel title="Gram Assistant">
          <GramChatPanel />
        </FloatingChatPanel>
      ) : (
        <div className="fixed bottom-6 right-6 z-40 w-80 rounded-lg border bg-muted/30 p-4 shadow-lg">
          <GramSetupGuide />
        </div>
      )}
    </main>
  );
}
