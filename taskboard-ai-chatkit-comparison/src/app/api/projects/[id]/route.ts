import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const UpdateProjectSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
});

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = db.select().from(projects).where(eq(projects.id, id)).get();

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const existing = db.select().from(projects).where(eq(projects.id, id)).get();

  if (!existing) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  const body = await request.json();
  const validation = UpdateProjectSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { message: "Validation error", errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  db.update(projects)
    .set({ ...validation.data, updated_at: new Date() })
    .where(eq(projects.id, id))
    .run();

  const updated = db.select().from(projects).where(eq(projects.id, id)).get();
  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const existing = db.select().from(projects).where(eq(projects.id, id)).get();

  if (!existing) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  db.delete(projects).where(eq(projects.id, id)).run();
  return new NextResponse(null, { status: 204 });
}
