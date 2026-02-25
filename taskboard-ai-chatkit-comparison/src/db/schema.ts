import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").default(""),
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const tasks = sqliteTable("tasks", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").default(""),
  status: text("status", {
    enum: ["backlog", "todo", "in_progress", "done", "canceled"],
  })
    .notNull()
    .default("todo"),
  priority: text("priority", {
    enum: ["low", "medium", "high"],
  })
    .notNull()
    .default("medium"),
  assignee: text("assignee"),
  project_id: text("project_id").references(() => projects.id, {
    onDelete: "set null",
  }),
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const taskRelationships = sqliteTable("task_relationships", {
  id: text("id").primaryKey(),
  source_task_id: text("source_task_id")
    .notNull()
    .references(() => tasks.id, { onDelete: "cascade" }),
  target_task_id: text("target_task_id")
    .notNull()
    .references(() => tasks.id, { onDelete: "cascade" }),
  relationship_type: text("relationship_type", {
    enum: ["blocks", "relates_to", "duplicates"],
  }).notNull(),
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
});
