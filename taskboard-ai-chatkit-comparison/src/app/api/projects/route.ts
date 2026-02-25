import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const CreateProjectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional().default(""),
});

export async function GET() {
  const result = db.select().from(projects).all();
  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = CreateProjectSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { message: "Validation error", errors: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const data = validation.data;
  const now = new Date();
  const id = uuid();

  db.insert(projects)
    .values({
      id,
      name: data.name,
      description: data.description,
      created_at: now,
      updated_at: now,
    })
    .run();

  const created = db.select().from(projects).where(eq(projects.id, id)).get();
  return NextResponse.json(created, { status: 201 });
}
