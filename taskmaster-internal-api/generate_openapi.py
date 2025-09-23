#!/usr/bin/env python3
"""
Generate OpenAPI specification files for the License Distribution API
"""

import json
import yaml
import requests
import sys
from pathlib import Path


def generate_openapi_files(base_url="http://localhost:8000", output_dir="."):
    """Generate OpenAPI JSON and YAML files"""
    
    try:
        # Fetch OpenAPI JSON from the running server
        print(f"Fetching OpenAPI specification from {base_url}/openapi.json...")
        response = requests.get(f"{base_url}/openapi.json")
        response.raise_for_status()
        
        openapi_data = response.json()
        
        # Ensure output directory exists
        output_path = Path(output_dir)
        output_path.mkdir(exist_ok=True)
        
        # Write JSON file (formatted)
        json_file = output_path / "openapi.json"
        with open(json_file, 'w') as f:
            json.dump(openapi_data, f, indent=2, sort_keys=False)
        print(f"✅ OpenAPI JSON file generated: {json_file}")
        
        # Write YAML file
        yaml_file = output_path / "openapi.yaml"
        with open(yaml_file, 'w') as f:
            yaml.dump(openapi_data, f, default_flow_style=False, sort_keys=False)
        print(f"✅ OpenAPI YAML file generated: {yaml_file}")
        
        # Print summary
        print(f"\n📊 OpenAPI Specification Summary:")
        print(f"   Title: {openapi_data.get('info', {}).get('title', 'N/A')}")
        print(f"   Version: {openapi_data.get('info', {}).get('version', 'N/A')}")
        print(f"   Description: {openapi_data.get('info', {}).get('description', 'N/A')[:100]}...")
        
        paths = openapi_data.get('paths', {})
        print(f"   Endpoints: {len(paths)}")
        
        # List all endpoints
        print(f"\n🔗 Available Endpoints:")
        for path, methods in paths.items():
            for method, details in methods.items():
                if method.lower() in ['get', 'post', 'put', 'delete', 'patch']:
                    summary = details.get('summary', 'No summary')
                    print(f"   {method.upper()} {path} - {summary}")
        
        return True
        
    except requests.exceptions.ConnectionError:
        print(f"❌ Error: Could not connect to {base_url}")
        print("   Make sure the server is running with: uv run uvicorn app.main:app --reload")
        return False
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error fetching OpenAPI specification: {e}")
        return False
        
    except Exception as e:
        print(f"❌ Error generating OpenAPI files: {e}")
        return False


def main():
    """Main function"""
    import argparse
    
    parser = argparse.ArgumentParser(description="Generate OpenAPI specification files")
    parser.add_argument("--url", default="http://localhost:8000", 
                       help="Base URL of the running API server")
    parser.add_argument("--output", default=".", 
                       help="Output directory for generated files")
    
    args = parser.parse_args()
    
    print("🚀 License Distribution API - OpenAPI Generator")
    print("=" * 50)
    
    success = generate_openapi_files(args.url, args.output)
    
    if success:
        print("\n🎉 OpenAPI files generated successfully!")
        print("   You can now use these files for:")
        print("   - API documentation")
        print("   - Client code generation")
        print("   - API testing tools")
        print("   - Integration with other services")
    else:
        print("\n💥 Failed to generate OpenAPI files")
        sys.exit(1)


if __name__ == "__main__":
    main()