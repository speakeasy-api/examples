#!/bin/bash

# Google Sheets MCP API Setup Script

echo "🚀 Setting up Google Sheets MCP API..."

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "❌ uv is not installed. Please install uv first:"
    echo "   curl -LsSf https://astral.sh/uv/install.sh | sh"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
uv sync

# Check if service account file exists
SERVICE_ACCOUNT_FILE="/Users/koladev/Downloads/mcp-sheet-474306-397dcdd0b370.json"
if [ ! -f "$SERVICE_ACCOUNT_FILE" ]; then
    echo "⚠️  Service account file not found at: $SERVICE_ACCOUNT_FILE"
    echo "   Please ensure your Google Cloud service account JSON file is at this location."
    echo "   You can update the path in app.py if needed."
else
    echo "✅ Service account file found"
fi

# Generate OpenAPI specs
echo "📄 Generating OpenAPI specifications..."
uv run python generate_openapi.py

# Run tests
echo "🧪 Running tests..."
uv run pytest test_app.py -v

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the server:"
echo "   uv run python app.py"
echo ""
echo "The API will be available at: http://localhost:5000"
echo "API documentation: http://localhost:5000/docs"
echo ""
echo "Generated files:"
echo "   - openapi.json (for MCP integration)"
echo "   - openapi.yaml (human-readable spec)"
