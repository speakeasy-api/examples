"""
Django Documentation RAG API - Simple Search Endpoint
"""

from fastapi import FastAPI

# Initialize
app = FastAPI(
    title="Django Documentation RAG API",
    description="Semantic search over Django 5.2.8 documentation using RAG (Retrieval-Augmented Generation)",
    version="1.0.0",
    openapi_tags=[
        {
            "name": "search",
            "description": "Semantic search operations over Django documentation",
        },
    ],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)