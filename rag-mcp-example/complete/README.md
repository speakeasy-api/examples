# Django Documentation RAG API

This project contains a FastAPI application that provides semantic search over Django documentation, and also contains scripts for RAG vs MCP comparison.

## Part 1: Scripts

The `scripts/` folder contains Python scripts for comparing RAG vs MCP approaches.

### Running the Scripts

1. **Install dependencies:**

```bash
uv sync
```

2. **Set up Anthropic API key:**

```bash
cp .env.example .env
# Edit .env and add your Anthropic API key
```

3. **Build the RAG index (one-time setup):**

```bash
uv run python scripts/build_rag_index.py
```

4. **Run other scripts:**

```bash
uv run python scripts/query_rag.py
uv run python scripts/mcp_server.py
uv run python scripts/compare.py
```

## Part 2: API

The `app/` folder contains a FastAPI application that provides semantic search over Django documentation.

### Starting the API

1. **Start the server:**

```bash
uv run uvicorn app.main:app --host 0.0.0.0 --port 5005
```

2. **Expose with ngrok:** (Optional)

```bash
ngrok http 5005
```

### The Only Endpoint

**POST /search** - Search Django documentation

```bash
curl -X POST "http://localhost:5005/search" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "how models work",
    "max_results": 2,
    "min_score": 0.5
  }'
```

**Response:**

```json
{
  "results": [
    {
      "content": "Django documentation text...",
      "source": "chunk_35",
      "score": 0.85
    }
  ],
  "total_found": 6,
  "tokens_estimate": 1250
}
```