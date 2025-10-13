#!/bin/bash

set -e  # Exit on any error

echo "🚀 Setting up License Management API..."

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "❌ Error: uv is not installed. Please install uv first:"
    echo "   curl -LsSf https://astral.sh/uv/install.sh | sh"
    exit 1
fi

echo "✅ uv is installed"

# Install dependencies
echo "📦 Installing dependencies..."
uv sync

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check if the app.py file exists
if [ ! -f "app.py" ]; then
    echo "❌ Error: app.py not found in current directory"
    exit 1
fi

echo "✅ app.py found"

# Run the server
echo "🌐 Starting FastAPI server..."
echo "   Server will be available at: http://127.0.0.1:8000"

uv run uvicorn app:app --reload
