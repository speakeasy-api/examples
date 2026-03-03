export type Task = {
  id: string;
  title: string;
  description: string;
  status: "backlog" | "todo" | "in_progress" | "done" | "canceled";
  priority: "low" | "medium" | "high";
  assignee: string | null;
  project_id: string | null;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type TaskRelationship = {
  id: string;
  source_task_id: string;
  target_task_id: string;
  relationship_type: "blocks" | "relates_to" | "duplicates";
  created_at: string;
};

const BASE = "";

async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${url}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message || res.statusText);
  }
  if (res.status === 204) return undefined as T;
  return res.json();
}

// Tasks
export const api = {
  tasks: {
    list: (filters?: {
      project_id?: string;
      status?: string;
      priority?: string;
    }) => {
      const params = new URLSearchParams();
      if (filters?.project_id) params.set("project_id", filters.project_id);
      if (filters?.status) params.set("status", filters.status);
      if (filters?.priority) params.set("priority", filters.priority);
      const qs = params.toString();
      return fetchJSON<Task[]>(`/api/tasks${qs ? `?${qs}` : ""}`);
    },
    get: (id: string) => fetchJSON<Task>(`/api/tasks/${id}`),
    create: (data: Partial<Task>) =>
      fetchJSON<Task>("/api/tasks", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    update: (id: string, data: Partial<Task>) =>
      fetchJSON<Task>(`/api/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    delete: (id: string) =>
      fetchJSON<void>(`/api/tasks/${id}`, { method: "DELETE" }),
  },
  projects: {
    list: () => fetchJSON<Project[]>("/api/projects"),
    get: (id: string) => fetchJSON<Project>(`/api/projects/${id}`),
    create: (data: { name: string; description?: string }) =>
      fetchJSON<Project>("/api/projects", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    update: (id: string, data: Partial<Project>) =>
      fetchJSON<Project>(`/api/projects/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    delete: (id: string) =>
      fetchJSON<void>(`/api/projects/${id}`, { method: "DELETE" }),
  },
  relationships: {
    list: (taskId: string) =>
      fetchJSON<TaskRelationship[]>(`/api/tasks/${taskId}/relationships`),
    create: (
      taskId: string,
      data: { target_task_id: string; relationship_type: string }
    ) =>
      fetchJSON<TaskRelationship>(`/api/tasks/${taskId}/relationships`, {
        method: "POST",
        body: JSON.stringify(data),
      }),
    delete: (taskId: string, relationshipId: string) =>
      fetchJSON<void>(`/api/tasks/${taskId}/relationships/${relationshipId}`, {
        method: "DELETE",
      }),
  },
};
