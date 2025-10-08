# Google Sheets MCP API

A FastAPI server that provides Google Sheets integration for MCP (Model Context Protocol) workflows.

## Features

- **List Spreadsheets**: Get all accessible Google Sheets spreadsheets
- **Spreadsheet Details**: View spreadsheet structure and sheet information  
- **Read Sheet Data**: Extract data from specific sheets with header support
- **MCP Integration**: Optimized for use with Gram

## Quick Start

### Prerequisites

- Python 3.13+
- Google Cloud Service Account with Sheets and Drive API access
- Service account JSON key file

### Clone the project

```bash
git clone https://github.com/speakeasy-api/examples.git
cd examples/excel-mcp-server-api
```

### Installation

1. Install dependencies using uv:

```bash
uv sync
```

2. Open the `app.py` file and replace the value of `SERVICE_ACCOUNT_FILE` with the path to the JSON service account file.


3. Run the server:

```bash
uv run python app.py
```

The API will be available at `http://localhost:8000`. You can run `ngrok http 127.0.0.1:8000` to expose it to the internet.

### Generate OpenAPI Specification

Generate OpenAPI JSON and YAML files:

```bash
uv run python generate_openapi.py
```
