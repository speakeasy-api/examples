# Taskmaster AI Comparison

Compare three AI chat frameworks integrated with the same Kanban board task manager. Each demo page pairs a shared task board with a different AI chat sidebar.

## Demos

| Framework | Path | Status |
|-----------|------|--------|
| **CopilotKit** | `/copilotkit` | Ready (requires `OPENAI_API_KEY`) |
| **OpenAI ChatKit** | `/chatkit` | Requires Agent Builder workflow setup |
| **Gram Elements** | `/gram` | Requires getgram.ai project setup |

## Quick Start

### Local Development

```bash
# Install dependencies
pnpm install

# Copy env file and add your API key
cp .env.example .env
# Edit .env and set OPENAI_API_KEY

# Set up the database
pnpm run db:migrate
pnpm run db:seed

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Docker

```bash
cp .env.example .env
# Edit .env and set OPENAI_API_KEY

docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: shadcn/ui + Tailwind CSS
- **Database**: SQLite via Drizzle ORM + better-sqlite3
- **AI Frameworks**: CopilotKit, OpenAI ChatKit, Gram Elements

## AI Framework Setup

### CopilotKit

Only requires `OPENAI_API_KEY` in your `.env` file. The runtime endpoint is at `/api/copilotkit`. Tools are defined client-side via `useCopilotAction` hooks.

**Available tools**: createTask, updateTask, listTasks, createProject, createRelationship

### OpenAI ChatKit

Requires:
1. Create a workflow in the OpenAI Agent Builder dashboard
2. Configure task management tools in the workflow
3. Set `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_...` in `.env`

### Gram Elements

Gram Elements uses the task API via an OpenAPI spec with `x-gram` extensions. The spec is at `openapi.yaml` (or `openapi.json`).

Setup:
1. Create an account at [getgram.ai](https://getgram.ai)
2. Create a project in the Gram dashboard
3. Upload the `openapi.yaml` file to configure MCP tools for the task API
4. Set environment variables:
   - `GRAM_API_KEY`
   - `NEXT_PUBLIC_GRAM_PROJECT_SLUG`
   - `NEXT_PUBLIC_GRAM_MCP_URL`

To regenerate the JSON version of the spec after editing `openapi.yaml`:
```bash
pnpm run gen:openapi
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/tasks` | List tasks (filterable by `project_id`, `status`, `priority`) |
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks/[id]` | Get task |
| PUT | `/api/tasks/[id]` | Update task |
| DELETE | `/api/tasks/[id]` | Delete task |
| GET | `/api/tasks/[id]/relationships` | List relationships |
| POST | `/api/tasks/[id]/relationships` | Create relationship |
| DELETE | `/api/tasks/[id]/relationships/[rid]` | Delete relationship |
| GET | `/api/projects` | List projects |
| POST | `/api/projects` | Create project |
| GET | `/api/projects/[id]` | Get project |
| PUT | `/api/projects/[id]` | Update project |
| DELETE | `/api/projects/[id]` | Delete project |

## Database

SQLite database stored at `data/taskmaster.db`. Seed data includes 2 projects, 10 tasks, and 3 task relationships.

```bash
pnpm run db:generate  # Generate migrations
pnpm run db:migrate   # Run migrations
pnpm run db:seed      # Seed demo data
```
