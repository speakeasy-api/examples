# License Management API

A simple FastAPI application for managing TaskMaster licenses with SQLite database and automatic OpenAPI documentation generation.

## Usage

1. Clone the project:

```bash
git clone <project_url>
```

2. Install Dependencies

```bash
uv sync
```

3. Run the Server

```bash
uv run uvicorn app:app --reload
```

4. Expose the server via Ngrok

```bash
ngrok http 127.0.0.1:8000
```

