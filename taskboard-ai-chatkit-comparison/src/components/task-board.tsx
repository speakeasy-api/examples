"use client";

import { useState } from "react";
import { TaskColumn } from "./task-column";
import { CreateTaskDialog } from "./create-task-dialog";
import { TaskDetailSheet } from "./task-detail-sheet";
import { ProjectSelector } from "./project-selector";
import { useTasks, useProjects } from "@/hooks/use-tasks";
import type { Task } from "@/lib/api-client";

const STATUSES = ["backlog", "todo", "in_progress", "done", "canceled"];

export function TaskBoard() {
  const [selectedProject, setSelectedProject] = useState("all");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [createDefaultStatus, setCreateDefaultStatus] = useState("todo");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const projectFilter =
    selectedProject === "all" ? undefined : selectedProject;
  const { tasks, createTask, updateTask, deleteTask } =
    useTasks(projectFilter);
  const { projects } = useProjects();

  const tasksByStatus = STATUSES.reduce(
    (acc, status) => {
      acc[status] = tasks.filter((t) => t.status === status);
      return acc;
    },
    {} as Record<string, Task[]>
  );

  const handleAddTask = (status: string) => {
    setCreateDefaultStatus(status);
    setCreateDialogOpen(true);
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setDetailOpen(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <ProjectSelector
          projects={projects}
          value={selectedProject}
          onChange={setSelectedProject}
        />
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 flex-1">
        {STATUSES.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasksByStatus[status] || []}
            onTaskClick={handleTaskClick}
            onAddTask={handleAddTask}
          />
        ))}
      </div>

      <CreateTaskDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSubmit={createTask}
        defaultStatus={createDefaultStatus}
        projects={projects}
        selectedProjectId={projectFilter}
      />

      <TaskDetailSheet
        task={selectedTask}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onUpdate={updateTask}
        onDelete={deleteTask}
        projects={projects}
      />
    </div>
  );
}
