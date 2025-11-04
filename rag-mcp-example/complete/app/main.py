"""
Django Documentation RAG API - Simple Search Endpoint
"""

import logging
from typing import List, Optional
from pathlib import Path
from pydantic import BaseModel, Field
from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi
from sentence_transformers import SentenceTransformer
import chromadb

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configuration
CHROMA_PATH = "./chroma_db"
CHROMA_COLLECTION = "django_docs"
DEFAULT_MAX_RESULTS = 3
MAX_ALLOWED_RESULTS = 10
DEFAULT_MIN_SCORE = 0.5

# Models
class SearchRequest(BaseModel):
    query: str = Field(..., description="Natural language search query", example="What's new in django.contrib.gis?")
    max_results: Optional[int] = Field(default=3, ge=1, le=10, description="Maximum number of results")
    min_score: Optional[float] = Field(default=0.5, ge=0.0, le=1.0, description="Minimum relevance score")

class SearchResult(BaseModel):
    content: str = Field(..., description="The documentation chunk")
    source: str = Field(..., description="Source reference")
    score: float = Field(..., description="Relevance score (0-1)")

class SearchResponse(BaseModel):
    results: List[SearchResult]
    total_found: int
    tokens_estimate: int

# RAG Service
class RAGService:
    def __init__(self):
        self.model = SentenceTransformer("all-MiniLM-L6-v2")
        self.client = chromadb.PersistentClient(path=CHROMA_PATH)
        self.collection = self.client.get_collection(CHROMA_COLLECTION)
    
    def search(self, query: str, max_results: int, min_score: float):
        # Generate query embedding
        query_embedding = self.model.encode(query).tolist()
        
        # Query ChromaDB
        search_results = self.collection.query(
            query_embeddings=[query_embedding],
            n_results=min(max_results * 3, 50)
        )
        
        # Convert results
        documents = search_results["documents"][0]
        distances = search_results["distances"][0]
        ids = search_results["ids"][0]
        
        results = []
        for doc, distance, doc_id in zip(documents, distances, ids):
            score = 1.0 / (1.0 + distance)
            if score >= min_score:
                results.append(SearchResult(
                    content=doc,
                    source=doc_id,
                    score=round(score, 3)
                ))
        
        # Sort by score and limit
        results.sort(key=lambda x: x.score, reverse=True)
        total_found = len(results)
        filtered_results = results[:max_results]
        
        # Estimate tokens (rough: 4 chars = 1 token)
        total_chars = sum(len(result.content) for result in filtered_results)
        tokens_estimate = total_chars // 4
        
        return filtered_results, total_found, tokens_estimate

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
rag_service = RAGService()

@app.post(
    "/search",
    response_model=SearchResponse,
    tags=["search"],
    summary="Search Django documentation",
    operation_id="search_documentation",
    description="""
    Perform semantic search over Django 5.2.8 documentation chunks.
    Returns relevant documentation sections with similarity scores and token estimates.
    """,
    responses={
        200: {"description": "Successful search with results"},
        422: {"description": "Validation error"},
    },
)
async def search_documentation(request: SearchRequest):
    """Search Django documentation using semantic similarity"""
    results, total_found, tokens_estimate = rag_service.search(
        query=request.query,
        max_results=request.max_results or DEFAULT_MAX_RESULTS,
        min_score=request.min_score or DEFAULT_MIN_SCORE
    )
    
    return SearchResponse(
        results=results,
        total_found=total_found,
        tokens_estimate=tokens_estimate
    )


def custom_openapi():
    """Customize OpenAPI Output with x-gram extensions for getgram MCP servers"""
    
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title=app.title,
        version=app.version,
        description=app.description,
        routes=app.routes,
        tags=app.openapi_tags,
    )

    # Add x-gram extensions to specific operations
    x_gram_extensions = {
        "search_documentation": {
            "x-gram": {
                "name": "search_django_docs",
                "summary": "Search Django documentation using semantic similarity",
                "description": """<context>
                This tool performs semantic search over Django 5.2.8 documentation using RAG (Retrieval-Augmented Generation).
                It returns relevant documentation chunks with similarity scores and token estimates for LLM context management.
                Perfect for finding specific Django functionality, code examples, and best practices.
                </context>

                <prerequisites>
                - Query should be natural language describing what you're looking for
                - Results are ranked by semantic similarity (score 0-1, higher is better)
                - Token estimates help manage LLM context windows
                - Supports filtering by minimum relevance score and maximum result count
                </prerequisites>""",
                "responseFilterType": "jq",
            }
        },
    }

    # Apply x-gram extensions to paths
    if "paths" in openapi_schema:
        for path, path_item in openapi_schema["paths"].items():
            for method, operation in path_item.items():
                if method.lower() in ["get", "post", "put", "delete", "patch"]:
                    operation_id = operation.get("operationId")
                    if operation_id in x_gram_extensions:
                        operation.update(x_gram_extensions[operation_id])

    app.openapi_schema = openapi_schema
    return app.openapi_schema

# Override the default OpenAPI function
app.openapi = custom_openapi

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)