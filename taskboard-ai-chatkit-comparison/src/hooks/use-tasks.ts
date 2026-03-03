"use client";

import useSWR from "swr";
import { api, type Task, type Project } from "@/lib/api-client";

export function useTasks(projectId?: string) {
  const { data, error, isLoading, mutate } = useSWR(
    ["tasks", projectId],
    () => api.tasks.list(projectId ? { project_id: projectId } : undefined),
    { refreshInterval: 3000 }
  );

  return {
    tasks: data || [],
    isLoading,
    error,
    mutate,
    createTask: async (task: Partial<Task>) => {
      await api.tasks.create(task);
      mutate();
    },
    updateTask: async (id: string, updates: Partial<Task>) => {
      await api.tasks.update(id, updates);
      mutate();
    },
    deleteTask: async (id: string) => {
      await api.tasks.delete(id);
      mutate();
    },
  };
}

export function useProjects() {
  const { data, error, isLoading, mutate } = useSWR("projects", () =>
    api.projects.list()
  );

  return {
    projects: data || [],
    isLoading,
    error,
    mutate,
    createProject: async (project: { name: string; description?: string }) => {
      const created = await api.projects.create(project);
      mutate();
      return created;
    },
  };
}
