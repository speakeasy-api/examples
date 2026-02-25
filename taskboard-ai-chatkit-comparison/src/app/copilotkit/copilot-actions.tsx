"use client";

import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { useTasks, useProjects } from "@/hooks/use-tasks";

/** Inline approval card for human-in-the-loop actions */
function ActionApprovalCard({
  title,
  summary,
  onApprove,
  onDeny,
}: {
  title: string;
  summary: React.ReactNode;
  onApprove: () => void;
  onDeny: () => void;
}) {
  return (
    <div className="my-2 rounded-lg border border-amber-200 bg-amber-50/80 p-3 dark:border-amber-800 dark:bg-amber-950/30">
      <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
        {title}
      </p>
      <div className="mt-1 text-xs text-amber-700 dark:text-amber-300">
        {summary}
      </div>
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={onApprove}
          className="rounded bg-green-600 px-2 py-1 text-xs font-medium text-white hover:bg-green-700"
        >
          Approve
        </button>
        <button
          type="button"
          onClick={onDeny}
          className="rounded border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Deny
        </button>
      </div>
    </div>
  );
}

export function CopilotTaskActions() {
  const { tasks, createTask, updateTask } = useTasks();
  const { projects, createProject } = useProjects();

  // Share current state with the AI
  useCopilotReadable({
    description: "The current list of tasks on the Kanban board",
    value: tasks,
  });

  useCopilotReadable({
    description: "The current list of projects",
    value: projects,
  });

  // Create task action (user approval required)
  useCopilotAction({
    name: "createTask",
    description:
      "Create a new task on the Kanban board. Use this when the user wants to add a new task.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the task",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "A description of the task",
        required: false,
      },
      {
        name: "status",
        type: "string",
        description:
          "The status column: backlog, todo, in_progress, done, or canceled",
        required: false,
      },
      {
        name: "priority",
        type: "string",
        description: "Priority level: low, medium, or high",
        required: false,
      },
      {
        name: "assignee",
        type: "string",
        description: "The name of the person to assign the task to",
        required: false,
      },
      {
        name: "project_id",
        type: "string",
        description:
          "The UUID of the project to associate with. Check the projects list for available IDs.",
        required: false,
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CopilotKit render props union is complex
    renderAndWaitForResponse: (props: any) => {
      const { args, respond } = props as { args?: Record<string, unknown>; respond?: (result: unknown) => void };
      if (!respond || !args) return <span className="text-muted-foreground text-xs">Waiting…</span>;
      const {
        title,
        description,
        status,
        priority,
        assignee,
        project_id,
      } = args as Record<string, string | undefined>;
      const desc = typeof description === "string" ? description : "";
      const summary = (
        <>
          Create task: <strong>{title ?? "—"}</strong>
          {status && ` · ${status}`}
          {priority && ` · ${priority}`}
          {desc && ` · ${desc.slice(0, 60)}${desc.length > 60 ? "…" : ""}`}
        </>
      );
      return (
        <ActionApprovalCard
          title="Create task?"
          summary={summary}
          onApprove={async () => {
            try {
              await createTask({
                title: title!,
                description: description ?? "",
                status: (status || "todo") as "backlog" | "todo" | "in_progress" | "done" | "canceled",
                priority: (priority || "medium") as "low" | "medium" | "high",
                assignee: assignee ?? null,
                project_id: project_id ?? null,
              });
              void respond(`Task "${title}" created successfully`);
            } catch (err) {
              void respond(`Failed to create task: ${err instanceof Error ? err.message : "Unknown error"}`);
            }
          }}
          onDeny={() => {
            void respond("User declined to create the task.");
          }}
        />
      );
    },
  });

  // Update task action (user approval required)
  useCopilotAction({
    name: "updateTask",
    description:
      "Update an existing task. Use this to change status, priority, assignee, or other fields. Find the task ID from the current tasks list.",
    parameters: [
      {
        name: "taskId",
        type: "string",
        description: "The UUID of the task to update",
        required: true,
      },
      {
        name: "title",
        type: "string",
        description: "New title for the task",
        required: false,
      },
      {
        name: "description",
        type: "string",
        description: "New description",
        required: false,
      },
      {
        name: "status",
        type: "string",
        description:
          "New status: backlog, todo, in_progress, done, or canceled",
        required: false,
      },
      {
        name: "priority",
        type: "string",
        description: "New priority: low, medium, or high",
        required: false,
      },
      {
        name: "assignee",
        type: "string",
        description: "New assignee name",
        required: false,
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CopilotKit render props union is complex
    renderAndWaitForResponse: (props: any) => {
      const { args, respond } = props as { args?: Record<string, unknown>; respond?: (result: unknown) => void };
      if (!respond || !args) return <span className="text-muted-foreground text-xs">Waiting…</span>;
      const { taskId, title, description, status, priority, assignee } = args as Record<string, string | undefined>;
      const updates: string[] = [];
      if (title) updates.push(`title: ${title}`);
      if (description !== undefined) updates.push("description");
      if (status) updates.push(`status: ${status}`);
      if (priority) updates.push(`priority: ${priority}`);
      if (assignee !== undefined) updates.push(`assignee: ${assignee}`);
      const summary = (
        <>
          Update task <code className="text-xs">{taskId?.slice(0, 8)}…</code>
          {updates.length > 0 && ` · ${updates.join(", ")}`}
        </>
      );
      return (
        <ActionApprovalCard
          title="Update task?"
          summary={summary}
          onApprove={async () => {
            try {
              const updatePayload: Record<string, string | null> = {};
              if (title) updatePayload.title = title;
              if (description !== undefined) updatePayload.description = description;
              if (status) updatePayload.status = status;
              if (priority) updatePayload.priority = priority;
              if (assignee !== undefined) updatePayload.assignee = assignee;
              await updateTask(taskId!, updatePayload);
              void respond("Task updated successfully");
            } catch (err) {
              void respond(`Failed to update task: ${err instanceof Error ? err.message : "Unknown error"}`);
            }
          }}
          onDeny={() => {
            void respond("User declined to update the task.");
          }}
        />
      );
    },
  });

  // List tasks action (for explicit listing requests)
  useCopilotAction({
    name: "listTasks",
    description:
      "List tasks with optional filters. The AI already has access to the current tasks, but this can be used to apply specific filters.",
    parameters: [
      {
        name: "status",
        type: "string",
        description:
          "Filter by status: backlog, todo, in_progress, done, or canceled",
        required: false,
      },
      {
        name: "priority",
        type: "string",
        description: "Filter by priority: low, medium, or high",
        required: false,
      },
      {
        name: "project_id",
        type: "string",
        description: "Filter by project UUID",
        required: false,
      },
    ],
    handler: async ({ status, priority, project_id }) => {
      let filtered = [...tasks];
      if (status) filtered = filtered.filter((t) => t.status === status);
      if (priority) filtered = filtered.filter((t) => t.priority === priority);
      if (project_id)
        filtered = filtered.filter((t) => t.project_id === project_id);

      return JSON.stringify(
        filtered.map((t) => ({
          id: t.id,
          title: t.title,
          status: t.status,
          priority: t.priority,
          assignee: t.assignee,
        })),
        null,
        2
      );
    },
  });

  // Create project action (user approval required)
  useCopilotAction({
    name: "createProject",
    description: "Create a new project to group tasks under.",
    parameters: [
      {
        name: "name",
        type: "string",
        description: "The name of the project",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "A description of the project",
        required: false,
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CopilotKit render props union is complex
    renderAndWaitForResponse: (props: any) => {
      const { args, respond } = props as { args?: Record<string, unknown>; respond?: (result: unknown) => void };
      if (!respond || !args) return <span className="text-muted-foreground text-xs">Waiting…</span>;
      const { name, description } = args as Record<string, string | undefined>;
      const desc = typeof description === "string" ? description : "";
      const summary = (
        <>
          Create project: <strong>{name ?? "—"}</strong>
          {desc && ` · ${desc.slice(0, 60)}${desc.length > 60 ? "…" : ""}`}
        </>
      );
      return (
        <ActionApprovalCard
          title="Create project?"
          summary={summary}
          onApprove={async () => {
            try {
              const project = await createProject({
                name: name!,
                description: description ?? "",
              });
              void respond(`Project "${name}" created with ID: ${project.id}`);
            } catch (err) {
              void respond(`Failed to create project: ${err instanceof Error ? err.message : "Unknown error"}`);
            }
          }}
          onDeny={() => {
            void respond("User declined to create the project.");
          }}
        />
      );
    },
  });

  // Create relationship action (user approval required)
  useCopilotAction({
    name: "createRelationship",
    description:
      "Create a relationship between two tasks. Types: blocks (source blocks target), relates_to, duplicates.",
    parameters: [
      {
        name: "sourceTaskId",
        type: "string",
        description: "The UUID of the source task",
        required: true,
      },
      {
        name: "targetTaskId",
        type: "string",
        description: "The UUID of the target task",
        required: true,
      },
      {
        name: "relationshipType",
        type: "string",
        description:
          "The type of relationship: blocks, relates_to, or duplicates",
        required: true,
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CopilotKit render props union is complex
    renderAndWaitForResponse: (props: any) => {
      const { args, respond } = props as { args?: Record<string, unknown>; respond?: (result: unknown) => void };
      if (!respond || !args) return <span className="text-muted-foreground text-xs">Waiting…</span>;
      const { sourceTaskId, targetTaskId, relationshipType } = args as Record<string, string | undefined>;
      const summary = (
        <>
          Link tasks: <code className="text-xs">{sourceTaskId?.slice(0, 8)}…</code>{" "}
          <strong>{relationshipType}</strong>{" "}
          <code className="text-xs">{targetTaskId?.slice(0, 8)}…</code>
        </>
      );
      return (
        <ActionApprovalCard
          title="Create task relationship?"
          summary={summary}
          onApprove={async () => {
            try {
              const res = await fetch(`/api/tasks/${sourceTaskId}/relationships`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  target_task_id: targetTaskId,
                  relationship_type: relationshipType,
                }),
              });
              if (!res.ok) {
                const error = await res.json();
                void respond(`Error: ${error.message}`);
                return;
              }
              void respond(`Relationship created: ${sourceTaskId} ${relationshipType} ${targetTaskId}`);
            } catch (err) {
              void respond(`Failed: ${err instanceof Error ? err.message : "Unknown error"}`);
            }
          }}
          onDeny={() => {
            void respond("User declined to create the relationship.");
          }}
        />
      );
    },
  });

  return null;
}
