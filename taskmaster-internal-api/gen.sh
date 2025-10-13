#!/bin/bash

# Script to generate OpenAPI JSON and YAML files from FastAPI app

# Kill any existing process using port 5000
lsof -ti:5000 | xargs kill -9 2>/dev/null || true

echo "🚀 Starting FastAPI server..."

# Start the FastAPI server using uv in the background
uv run uvicorn app:app --host 127.0.0.1 --port 5000 &
SERVER_PID=$!

# Wait for server to start up
echo "⏳ Waiting for server to start..."
sleep 3

# Health check to ensure server is running
if curl -s http://127.0.0.1:5000/health > /dev/null; then
    echo "✅ Server is running"
else
    echo "❌ Server failed to start"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

echo "📄 Generating OpenAPI files..."

# Generate OpenAPI files using the Python script
uv run python generate_openapi.py

# Stop the server
echo "🛑 Stopping server..."
kill $SERVER_PID
