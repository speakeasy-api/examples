import { db } from "./index";
import { projects, tasks, taskRelationships } from "./schema";
import { v4 as uuid } from "uuid";
import { sql } from "drizzle-orm";

async function seed() {
  // Check if data already exists
  const existingProjects = db
    .select({ count: sql<number>`count(*)` })
    .from(projects)
    .get();

  if (existingProjects && existingProjects.count > 0) {
    console.log("Database already seeded, skipping.");
    return;
  }

  const now = new Date();

  // Create projects
  const project1Id = uuid();
  const project2Id = uuid();

  db.insert(projects)
    .values([
      {
        id: project1Id,
        name: "Q1 Launch",
        description: "Product launch planned for Q1",
        created_at: now,
        updated_at: now,
      },
      {
        id: project2Id,
        name: "Bug Fixes",
        description: "Ongoing bug fix backlog",
        created_at: now,
        updated_at: now,
      },
    ])
    .run();

  // Create tasks
  const taskIds = Array.from({ length: 10 }, () => uuid());

  const taskData = [
    {
      id: taskIds[0],
      title: "Design landing page mockups",
      description: "Create high-fidelity mockups for the new landing page",
      status: "done" as const,
      priority: "high" as const,
      assignee: "Alice",
      project_id: project1Id,
    },
    {
      id: taskIds[1],
      title: "Implement authentication flow",
      description: "Set up login, signup, and password reset",
      status: "in_progress" as const,
      priority: "high" as const,
      assignee: "Bob",
      project_id: project1Id,
    },
    {
      id: taskIds[2],
      title: "Write API documentation",
      description: "Document all REST endpoints with examples",
      status: "todo" as const,
      priority: "medium" as const,
      assignee: "Charlie",
      project_id: project1Id,
    },
    {
      id: taskIds[3],
      title: "Set up CI/CD pipeline",
      description: "Configure GitHub Actions for automated testing and deployment",
      status: "todo" as const,
      priority: "high" as const,
      assignee: null,
      project_id: project1Id,
    },
    {
      id: taskIds[4],
      title: "Fix date picker timezone bug",
      description: "Dates are off by one day in certain timezones",
      status: "in_progress" as const,
      priority: "high" as const,
      assignee: "Alice",
      project_id: project2Id,
    },
    {
      id: taskIds[5],
      title: "Resolve memory leak in dashboard",
      description: "Dashboard component not cleaning up event listeners",
      status: "backlog" as const,
      priority: "medium" as const,
      assignee: null,
      project_id: project2Id,
    },
    {
      id: taskIds[6],
      title: "Update dependency versions",
      description: "Bump all outdated npm packages to latest stable",
      status: "backlog" as const,
      priority: "low" as const,
      assignee: "Bob",
      project_id: project2Id,
    },
    {
      id: taskIds[7],
      title: "Add dark mode support",
      description: "Implement theme switching with system preference detection",
      status: "todo" as const,
      priority: "medium" as const,
      assignee: "Charlie",
      project_id: project1Id,
    },
    {
      id: taskIds[8],
      title: "Create user onboarding flow",
      description: "Multi-step wizard for new user setup",
      status: "backlog" as const,
      priority: "medium" as const,
      assignee: null,
      project_id: project1Id,
    },
    {
      id: taskIds[9],
      title: "Fix mobile nav overflow",
      description: "Navigation menu overflows on small screens",
      status: "canceled" as const,
      priority: "low" as const,
      assignee: "Alice",
      project_id: project2Id,
    },
  ];

  db.insert(tasks)
    .values(
      taskData.map((t) => ({
        ...t,
        created_at: now,
        updated_at: now,
      }))
    )
    .run();

  // Create relationships
  db.insert(taskRelationships)
    .values([
      {
        id: uuid(),
        source_task_id: taskIds[1],
        target_task_id: taskIds[0],
        relationship_type: "relates_to" as const,
        created_at: now,
      },
      {
        id: uuid(),
        source_task_id: taskIds[3],
        target_task_id: taskIds[1],
        relationship_type: "blocks" as const,
        created_at: now,
      },
      {
        id: uuid(),
        source_task_id: taskIds[5],
        target_task_id: taskIds[4],
        relationship_type: "duplicates" as const,
        created_at: now,
      },
    ])
    .run();

  console.log("Seed complete: 2 projects, 10 tasks, 3 relationships created.");
}

seed().catch(console.error);
