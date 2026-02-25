import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { error: "Use POST to create a session" },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function POST(request: NextRequest) {
  console.log("[ChatKit API] POST /api/chatkit received");
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("[ChatKit API] Missing OPENAI_API_KEY");
    return NextResponse.json(
      { error: "Missing OPENAI_API_KEY environment variable" },
      { status: 500 }
    );
  }

  const body = await request.json().catch((err) => {
    console.error("[ChatKit API] Failed to parse body:", err);
    return {};
  });
  const workflowId =
    body?.workflow?.id || process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID;
  const workflowVersion =
    body?.workflow?.version ?? process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_VERSION ?? undefined;

  console.log("[ChatKit API] workflowId:", workflowId ? `${workflowId.slice(0, 12)}...` : "missing", "version:", workflowVersion ?? "(latest)");

  if (!workflowId) {
    return NextResponse.json(
      {
        error:
          "Missing workflow ID. Set NEXT_PUBLIC_CHATKIT_WORKFLOW_ID in your .env file.",
      },
      { status: 400 }
    );
  }

  const workflowPayload: { id: string; version?: string } = { id: workflowId };
  if (workflowVersion) workflowPayload.version = workflowVersion;

  console.log("[ChatKit API] Calling OpenAI chatkit/sessions...");
  const upstream = await fetch("https://api.openai.com/v1/chatkit/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "OpenAI-Beta": "chatkit_beta=v1",
    },
    body: JSON.stringify({
      workflow: workflowPayload,
      user: body?.userId || "demo-user",
    }),
  });

  if (!upstream.ok) {
    const errorText = await upstream.text();
    const status = upstream.status;
    console.error("[ChatKit API] Upstream error:", status, errorText.slice(0, 200));
    const isWorkflowNotFound =
      status === 404 || (status === 400 && errorText.includes("workflow"));
    const errorMessage = isWorkflowNotFound
      ? "Workflow not found. Check NEXT_PUBLIC_CHATKIT_WORKFLOW_ID in .env and use a valid workflow ID from the OpenAI Agent Builder."
      : `Failed to create ChatKit session: ${upstream.statusText}`;
    return NextResponse.json(
      { error: errorMessage, details: errorText },
      { status: isWorkflowNotFound ? 400 : status }
    );
  }

  const data = await upstream.json();
  console.log("[ChatKit API] Session created successfully");
  return NextResponse.json(data);
}
