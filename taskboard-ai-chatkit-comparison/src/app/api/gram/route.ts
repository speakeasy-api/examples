import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("[Gram API] POST /api/gram session create");
  const apiKey = process.env.GRAM_API_KEY;
  const projectSlug = process.env.NEXT_PUBLIC_GRAM_PROJECT_SLUG;

  if (!apiKey) {
    console.error("[Gram API] Missing GRAM_API_KEY");
    return NextResponse.json(
      { error: "Missing GRAM_API_KEY environment variable" },
      { status: 500 }
    );
  }

  if (!projectSlug) {
    return NextResponse.json(
      { error: "Missing NEXT_PUBLIC_GRAM_PROJECT_SLUG environment variable" },
      { status: 400 }
    );
  }

  try {
    // Gram Elements uses /rpc/chatSessions.create (see @gram-ai/elements server.ts)
    const base = process.env.GRAM_API_URL ?? "https://app.getgram.ai";
    const upstream = await fetch(`${base}/rpc/chatSessions.create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Gram-Project": projectSlug,
        "Gram-Key": apiKey,
      },
      body: JSON.stringify({
        embed_origin: request.headers.get("origin") ?? undefined,
        user_identifier: "demo-user",
        expires_after: 3600,
      }),
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      console.error("[Gram API] Upstream error:", upstream.status, errorText.slice(0, 200));
      return NextResponse.json(
        {
          error: `Failed to create Gram session: ${upstream.statusText}`,
          details: errorText,
        },
        { status: upstream.status }
      );
    }

    const data = await upstream.json();
    console.log("[Gram API] Session created successfully");
    return NextResponse.json(data);
  } catch (error) {
    console.error("[Gram API] Error:", error);
    return NextResponse.json(
      {
        error: "Failed to connect to Gram API",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
