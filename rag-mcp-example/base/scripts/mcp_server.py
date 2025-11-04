#!/usr/bin/env python3
"""
MCP Server for Django Documentation
"""

from pathlib import Path
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
from PyPDF2 import PdfReader
import json

class DjangoMCPServer:
    def __init__(self):
        self.server = Server("django-docs")
        self.documentation_pages = []
        self._load_documentation()
        self._setup_handlers()
    
    def _load_documentation(self):
        """Load Django PDF once at startup"""
        # Try multiple possible paths for the PDF
        possible_paths = [
            Path("django.pdf"),  # Current directory
            Path("resources/django.pdf"),  # Resources folder
            Path("../resources/django.pdf"),  # Parent resources folder
        ]
        
        pdf_path = None
        for path in possible_paths:
            if path.exists():
                pdf_path = path
                break
        
        if not pdf_path:
            print("Warning: django.pdf not found in any expected location")
            return
        
        print(f"Loading Django documentation from: {pdf_path}")
        reader = PdfReader(str(pdf_path))
        self.documentation_pages = [
            page.extract_text() for page in reader.pages
        ]
        print(f"Loaded {len(self.documentation_pages)} pages from Django documentation")
    
    def _search_documentation(self, query: str, max_pages: int = 50):
        """Keyword search across all pages"""
        query_words = query.lower().split()
        matching_pages = []
        
        for i, page_text in enumerate(self.documentation_pages):
            page_lower = page_text.lower()
            
            # Check if any query word appears in this page
            if any(word in page_lower for word in query_words):
                matching_pages.append({
                    "text": page_text,
                    "page_num": i + 1
                })
            
            if len(matching_pages) >= max_pages:
                break
        
        return matching_pages
    
    def _setup_handlers(self):
        """Register MCP tool handlers"""
        
        @self.server.list_tools()
        async def list_tools():
            return [
                Tool(
                    name="search_django_docs",
                    description="Search Django documentation and return all matching pages",
                    inputSchema={
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string",
                                "description": "Search query (e.g., 'models', 'authentication')"
                            }
                        },
                        "required": ["query"]
                    }
                )
            ]
        
        @self.server.call_tool()
        async def call_tool(name: str, arguments: dict):
            if name == "search_django_docs":
                query = arguments.get("query", "")
                results = self._search_documentation(query)
                
                formatted_results = {
                    "query": query,
                    "results_count": len(results),
                    "results": [
                        {
                            "page": r["page_num"],
                            "text": r["text"]
                        }
                        for r in results
                    ]
                }
                
                return [TextContent(
                    type="text",
                    text=json.dumps(formatted_results)
                )]
            
            return [TextContent(
                type="text",
                text=json.dumps({"error": f"Unknown tool: {name}"})
            )]
    
    async def run(self):
        """Start the MCP server"""
        async with stdio_server() as (read_stream, write_stream):
            await self.server.run(
                read_stream,
                write_stream,
                self.server.create_initialization_options()
            )

def main():
    import asyncio
    server = DjangoMCPServer()
    asyncio.run(server.run())

if __name__ == "__main__":
    main()

