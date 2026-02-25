"use client";

import { TaskCard } from "./task-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Task } from "@/lib/api-client";

const statusLabels: Record<string, string> = {
  backlog: "Backlog",
  todo: "To Do",
  in_progress: "In Progress",
  done: "Done",
  canceled: "Canceled",
};

const statusColors: Record<string, string> = {
  backlog: "bg-gray-200 dark:bg-gray-700",
  todo: "bg-blue-200 dark:bg-blue-800",
  in_progress: "bg-amber-200 dark:bg-amber-800",
  done: "bg-green-200 dark:bg-green-800",
  canceled: "bg-red-200 dark:bg-red-800",
};

export function TaskColumn({
  status,
  tasks,
  onTaskClick,
  onAddTask,
}: {
  status: string;
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
  onAddTask?: (status: string) => void;
}) {
  return (
    <div className="flex flex-col min-w-[280px] max-w-[320px] w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusColors[status] || "bg-gray-400"}`} />
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            {statusLabels[status] || status}
          </h3>
          <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
            {tasks.length}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => onAddTask?.(status)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-2 min-h-[100px] p-1">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onClick={onTaskClick} />
        ))}
      </div>
    </div>
  );
}
