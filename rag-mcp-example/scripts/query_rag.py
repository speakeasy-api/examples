#!/usr/bin/env python3
"""
Query the RAG system for Django documentation.
"""

import os
from sentence_transformers import SentenceTransformer
import chromadb
import anthropic
from dotenv import load_dotenv

load_dotenv()

# Load embedding model and database
model = SentenceTransformer("all-MiniLM-L6-v2")
client = chromadb.PersistentClient(path="./chroma_db")
collection = client.get_collection("django_docs")

# Query
query = "What's new in django.contrib.gis for Django 5.2?"
print(f"Query: {query}\n")

# Embed query and search
query_embedding = model.encode(query).tolist()
results = collection.query(query_embeddings=[query_embedding], n_results=3)
context = "\n\n".join(results["documents"][0])

# Send to Claude
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
response = anthropic_client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": f"Based on this Django documentation:\n\n{context}\n\nQuestion: {query}\n\nProvide a clear answer."
    }]
)

print("Answer:")
print(response.content[0].text)
print(f"\nTokens used: {response.usage.input_tokens + response.usage.output_tokens}")

