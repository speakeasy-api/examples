#!/usr/bin/env python3
"""
Build RAG index for Django documentation.
Run this once to index the documentation.
"""

from pathlib import Path
from PyPDF2 import PdfReader
from sentence_transformers import SentenceTransformer
import chromadb

# Configuration
pdf_path = Path("django.pdf")
chunk_size = 500  # words per chunk
chunk_overlap = 50  # word overlap

# Load PDF
print("Loading Django documentation...")
reader = PdfReader(str(pdf_path))
text = "\n\n".join([p.extract_text() for p in reader.pages])

# Create chunks
print("Creating chunks...")
words = text.split()
chunks = [" ".join(words[i:i+chunk_size]) for i in range(0, len(words), chunk_size - chunk_overlap)]
print(f"Created {len(chunks)} chunks")

# Generate embeddings
print("Generating embeddings...")
model = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = model.encode(chunks, show_progress_bar=True)

# Store in ChromaDB
print("Storing in vector database...")
client = chromadb.PersistentClient(path="./chroma_db")

# Delete existing collection if it exists
try:
    client.delete_collection("django_docs")
except:
    pass

collection = client.create_collection("django_docs")
collection.add(
    ids=[f"chunk_{i}" for i in range(len(chunks))],
    embeddings=embeddings.tolist(),
    documents=chunks
)

print(f"✓ Indexed {len(chunks)} chunks into ChromaDB")

