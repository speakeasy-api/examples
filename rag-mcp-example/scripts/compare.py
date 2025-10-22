#!/usr/bin/env python3
"""
Compare RAG vs MCP token usage and performance
"""

import os
import json
import time
import asyncio
from dotenv import load_dotenv
import anthropic
from sentence_transformers import SentenceTransformer
import chromadb
from mcp import stdio_client, ClientSession

load_dotenv()

# Initialize clients
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
model = SentenceTransformer("all-MiniLM-L6-v2")
chroma_client = chromadb.PersistentClient(path="./chroma_db")
collection = chroma_client.get_collection("django_docs")

# Test question
question = "What's new in django.contrib.gis for Django 5.2?"

print("=" * 80)
print("RAG vs MCP COMPARISON")
print("=" * 80)
print(f"\nQuestion: {question}\n")

# ============================================================================
# RAG APPROACH
# ============================================================================
print("Testing RAG (Retrieval-Augmented Generation)...")
rag_start = time.time()

# 1. Embed query and search vector database
query_embedding = model.encode(question).tolist()
results = collection.query(query_embeddings=[query_embedding], n_results=3)
context = "\n\n".join(results["documents"][0])

# 2. Send context to Claude
rag_response = anthropic_client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=200,
    messages=[{
        "role": "user",
        "content": f"Based on this Django documentation:\n\n{context}\n\nQuestion: {question}\n\nProvide a short, direct answer."
    }]
)

rag_time = time.time() - rag_start
rag_tokens = rag_response.usage.input_tokens + rag_response.usage.output_tokens
rag_cost = (rag_response.usage.input_tokens / 1_000_000 * 3.0) + (rag_response.usage.output_tokens / 1_000_000 * 15.0)

print(f"✓ RAG: {rag_tokens} tokens, ${rag_cost:.4f}, {rag_time:.2f}s")
print(f"Answer: {rag_response.content[0].text}\n")

# ============================================================================
# MCP APPROACH
# ============================================================================
print("Testing MCP (Model Context Protocol)...")
mcp_start = time.time()

async def query_mcp():
    from mcp import ClientSession, StdioServerParameters
    
    # 1. Connect to MCP server
    server_params = StdioServerParameters(
        command="python3",
        args=["mcp_server.py"],
        env=None
    )
    
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            
            # 2. Call search tool
            result = await session.call_tool(
                "search_django_docs",
                arguments={"query": question}
            )
            
            return json.loads(result.content[0].text)

# Run MCP query
mcp_results = asyncio.run(query_mcp())

# 3. Format results and send to Claude
mcp_docs = "\n\n".join([f"[Page {r['page']}]\n{r['text']}" for r in mcp_results["results"]])

mcp_response = anthropic_client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=200,
    messages=[{
        "role": "user",
        "content": f"Based on this Django documentation:\n\n{mcp_docs}\n\nQuestion: {question}\n\nProvide a short, direct answer."
    }]
)

mcp_time = time.time() - mcp_start
mcp_tokens = mcp_response.usage.input_tokens + mcp_response.usage.output_tokens
mcp_cost = (mcp_response.usage.input_tokens / 1_000_000 * 3.0) + (mcp_response.usage.output_tokens / 1_000_000 * 15.0)

print(f"✓ MCP: {mcp_tokens} tokens, ${mcp_cost:.4f}, {mcp_time:.2f}s")
print(f"Answer: {mcp_response.content[0].text}\n")

# ============================================================================
# COMPARISON SUMMARY
# ============================================================================
print("=" * 80)
print("SUMMARY")
print("=" * 80)

token_diff = mcp_tokens - rag_tokens
cost_savings = ((mcp_cost - rag_cost) / mcp_cost) * 100
time_speedup = mcp_time / rag_time

print(f"\nRAG: {rag_tokens:,} tokens | ${rag_cost:.4f} | {rag_time:.2f}s")
print(f"MCP: {mcp_tokens:,} tokens | ${mcp_cost:.4f} | {mcp_time:.2f}s")
print(f"\nRAG saves: {token_diff:,} tokens ({cost_savings:.1f}% cheaper)")
print(f"RAG is {time_speedup:.1f}x faster")

# Save results
results = {
    "question": question,
    "rag": {
        "tokens": rag_tokens,
        "cost": rag_cost,
        "time": rag_time,
        "answer": rag_response.content[0].text
    },
    "mcp": {
        "tokens": mcp_tokens,
        "cost": mcp_cost,
        "time": mcp_time,
        "answer": mcp_response.content[0].text
    }
}

with open("comparison_results.json", 'w') as f:
    json.dump(results, f, indent=2)

print("\n✓ Results saved to comparison_results.json")

