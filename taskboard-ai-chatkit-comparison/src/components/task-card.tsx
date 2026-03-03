"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Task } from "@/lib/api-client";

const priorityColors: Record<string, string> = {
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

export function TaskCard({
  task,
  onClick,
}: {
  task: Task;
  onClick?: (task: Task) => void;
}) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow mb-2"
      onClick={() => onClick?.(task)}
    >
      <CardHeader className="p-3 pb-1">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium leading-tight">{task.title}</h4>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-1">
        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className={`text-xs ${priorityColors[task.priority] || ""}`}
          >
            {task.priority}
          </Badge>
          {task.assignee && (
            <span className="text-xs text-muted-foreground truncate ml-2">
              {task.assignee}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
