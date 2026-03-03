import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq, and, SQL } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const CreateTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().default(""),
  status: z
    .enum(["backlog", "todo", "in_progress", "done", "canceled"])
    .optional()
    .default("todo"),
  priority: z.enum(["low", "medium", "high"]).optional().default("medium"),
  assignee: z.string().nullable().optional().default(null),
  project_id: z.string().uuid().nullable().optional().default(null),
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("project_id");
  const status = searchParams.get("status");
  const priority = searchParams.get("priority");

  const conditions: SQL[] = [];
  if (projectId) conditions.push(eq(tasks.project_id, projectId));
  if (status)
    conditions.push(
      eq(
        tasks.status,
        status as "backlog" | "todo" | "in_progress" | "done" | "canceled"
      )
    );
  if (priority)
    conditions.push(
      eq(tasks.priority, priority as "low" | "medium" | "high")
    );

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  const result = db.select().from(tasks).where(where).all();
  if (projectId || status || priority) {
    console.log("[Tasks API] GET list", { projectId, status, priority, count: result.length });
  }
  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = CreateTaskSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { message: "Validation error", errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const data = validation.data;
  const now = new Date();
  const id = uuid();

  const newTask = {
    id,
    title: data.title,
    description: data.description,
    status: data.status,
    priority: data.priority,
    assignee: data.assignee,
    project_id: data.project_id,
    created_at: now,
    updated_at: now,
  };

  db.insert(tasks).values(newTask).run();

  const created = db.select().from(tasks).where(eq(tasks.id, id)).get();
  console.log("[Tasks API] POST create", { id: created!.id, title: created!.title, status: created!.status });
  return NextResponse.json(created, { status: 201 });
}
