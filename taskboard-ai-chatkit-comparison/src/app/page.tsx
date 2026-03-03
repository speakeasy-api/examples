import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const demos = [
  {
    title: "CopilotKit",
    href: "/copilotkit",
    description:
      "AI-powered task management using CopilotKit's React hooks and runtime. Define tools via useCopilotAction() for natural language task creation and updates.",
    badges: ["React Hooks", "Runtime API", "Tool Calling"],
  },
  {
    title: "OpenAI ChatKit",
    href: "/chatkit",
    description:
      "Task management with OpenAI's ChatKit Thread UI and Responses API. Server-side tool definitions with automatic function calling.",
    badges: ["Thread UI", "Responses API", "Function Tools"],
  },
  {
    title: "Gram Elements",
    href: "/gram",
    description:
      "Task management powered by Gram Elements with MCP (Model Context Protocol) tool integration. Declarative tool configuration.",
    badges: ["MCP Protocol", "Chat Embed", "Tool Config"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Taskmaster AI Comparison
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare three AI chat frameworks integrated with the same Kanban
            board. Each demo lets you manage tasks via natural language using a
            different AI integration approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <Link key={demo.href} href={demo.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group-hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl">{demo.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {demo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {demo.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            All demos share the same task board, API routes, and SQLite
            database. Only the AI chat integration differs.
          </p>
        </div>
      </div>
    </main>
  );
}
