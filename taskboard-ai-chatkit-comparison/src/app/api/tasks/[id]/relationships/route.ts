import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { taskRelationships, tasks } from "@/db/schema";
import { eq, or } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const CreateRelationshipSchema = z.object({
  target_task_id: z.string().uuid("target_task_id must be a valid UUID"),
  relationship_type: z.enum(["blocks", "relates_to", "duplicates"]),
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

  const relationships = db
    .select()
    .from(taskRelationships)
    .where(
      or(
        eq(taskRelationships.source_task_id, id),
        eq(taskRelationships.target_task_id, id)
      )
    )
    .all();

  return NextResponse.json(relationships);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const sourceTask = db.select().from(tasks).where(eq(tasks.id, id)).get();
  if (!sourceTask) {
    return NextResponse.json({ message: "Source task not found" }, { status: 404 });
  }

  const body = await request.json();
  const validation = CreateRelationshipSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { message: "Validation error", errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { target_task_id, relationship_type } = validation.data;

  const targetTask = db
    .select()
    .from(tasks)
    .where(eq(tasks.id, target_task_id))
    .get();
  if (!targetTask) {
    return NextResponse.json(
      { message: "Target task not found" },
      { status: 404 }
    );
  }

  if (id === target_task_id) {
    return NextResponse.json(
      { message: "A task cannot have a relationship with itself" },
      { status: 400 }
    );
  }

  const newId = uuid();
  db.insert(taskRelationships)
    .values({
      id: newId,
      source_task_id: id,
      target_task_id,
      relationship_type,
      created_at: new Date(),
    })
    .run();

  const created = db
    .select()
    .from(taskRelationships)
    .where(eq(taskRelationships.id, newId))
    .get();

  return NextResponse.json(created, { status: 201 });
}
