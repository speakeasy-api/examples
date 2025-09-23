# Taskmaster Internal API

The Taskmaster Internal API with customer service, marketing, license and user endpoints.


## Usage

1. Clone the project:

```bash
git clone <project_url>
cd license-distribution-api
```

2. Install Dependencies

```bash
uv sync
```

3. Initialize Database

```bash
python scripts/init_db.py
```

4. Run the Server

```bash
uv run uvicorn app.main:app --reload
```

5. Expose the server via Ngrok (optional)

```bash
ngrok http 127.0.0.1:8000
```