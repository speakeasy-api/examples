"""Save this FastAPI app's OpenAPI specification to JSON and YAML"""

import json
import yaml
from pathlib import Path

# Add the app directory to the path so we can import main
import sys
sys.path.insert(0, str(Path(__file__).parent))

from app.main import app


def save_openapi_to_json():
    """Save OpenAPI spec to JSON"""
    
    with open("openapi.json", "w", encoding="utf-8") as json_file:
        json.dump(
            app.openapi(),
            json_file,
            indent=2,
        )
    print("✅ Generated openapi.json")


def save_openapi_to_yaml():
    """Save OpenAPI spec to YAML"""
    
    with open("openapi.yaml", "w", encoding="utf-8") as yaml_file:
        yaml.dump(
            app.openapi(),
            yaml_file,
            default_flow_style=False,
            sort_keys=False,
            indent=2,
        )
    print("✅ Generated openapi.yaml")


if __name__ == "__main__":
    print("🚀 Generating OpenAPI specification files...")
    
    save_openapi_to_json()
    save_openapi_to_yaml()
