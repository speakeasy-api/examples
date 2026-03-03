"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { CopilotTaskActions } from "./copilot-actions";
import { TaskBoard } from "@/components/task-board";
import Link from "next/link";

const publicApiKey = process.env.NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY;
const agent = process.env.NEXT_PUBLIC_COPILOT_AGENT ?? "default";

export default function CopilotKitPage() {
  if (!publicApiKey) {
    return (
      <main className="min-h-screen bg-background p-6">
        <div className="mb-6">
          <p className="text-destructive">
            Copilot Cloud is not configured. Set NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY (and optionally
            NEXT_PUBLIC_COPILOT_AGENT) in .env. Get your key from{" "}
            <a
              href="https://cloud.copilotkit.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              cloud.copilotkit.ai
            </a>
            .
          </p>
        </div>
      </main>
    );
  }

  return (
    <CopilotKit
      publicApiKey={publicApiKey}
      agent={agent}
      showDevConsole={process.env.NODE_ENV === "development"}
    >
      <CopilotSidebar
        instructions={`You are a helpful task management assistant. You can help users create, update, and manage tasks on their Kanban board. You can also create projects and relationships between tasks. When listing tasks, present them in a clear, organized format. When creating or updating tasks, confirm the action was successful.`}
        labels={{
          title: "CopilotKit Assistant",
          initial:
            "Hi! I can help you manage your tasks. Try asking me to create a task, list tasks, or update a task status.",
        }}
      >
        <CopilotTaskActions />
        <main className="min-h-screen bg-background p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                &larr; Back to demos
              </Link>
              <h1 className="text-2xl font-bold mt-1">
                CopilotKit Demo
              </h1>
              <p className="text-sm text-muted-foreground">
                AI task management powered by CopilotKit
              </p>
            </div>
          </div>
          <TaskBoard />
        </main>
      </CopilotSidebar>
    </CopilotKit>
  );
}
