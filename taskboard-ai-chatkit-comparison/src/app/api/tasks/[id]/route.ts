import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const UpdateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z
    .enum(["backlog", "todo", "in_progress", "done", "canceled"])
    .optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  assignee: z.string().nullable().optional(),
  project_id: z.string().uuid().nullable().optional(),
});

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const task = db.select().from(tasks).where(eq(tasks.id, id)).get();

  if (!task) {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(task);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const existing = db.select().from(tasks).where(eq(tasks.id, id)).get();

  if (!existing) {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  }

  const body = await request.json();
  const validation = UpdateTaskSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { message: "Validation error", errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const updateData = { ...validation.data, updated_at: new Date() };
  db.update(tasks)
    .set(updateData)
    .where(eq(tasks.id, id))
    .run();

  const updated = db.select().from(tasks).where(eq(tasks.id, id)).get();
  console.log("[Tasks API] PUT update", { id, updates: Object.keys(validation.data), status: updated?.status });
  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const existing = db.select().from(tasks).where(eq(tasks.id, id)).get();

  if (!existing) {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  }

  db.delete(tasks).where(eq(tasks.id, id)).run();
  return new NextResponse(null, { status: 204 });
}
