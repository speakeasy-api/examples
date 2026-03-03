import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { taskRelationships } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; relationshipId: string }> }
) {
  const { relationshipId } = await params;

  const existing = db
    .select()
    .from(taskRelationships)
    .where(eq(taskRelationships.id, relationshipId))
    .get();

  if (!existing) {
    return NextResponse.json(
      { message: "Relationship not found" },
      { status: 404 }
    );
  }

  db.delete(taskRelationships)
    .where(eq(taskRelationships.id, relationshipId))
    .run();

  return new NextResponse(null, { status: 204 });
}
