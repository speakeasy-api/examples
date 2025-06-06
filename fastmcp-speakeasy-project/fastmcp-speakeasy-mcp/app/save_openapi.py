"""Save this FastAPI app's OpenAPI specification to JSON and YAML"""

import json
import yaml

from main import server


def save_openapi_to_json():
    """Save OpenAPI spec to JSON"""

    with open("openapi.json", "w", encoding="utf-8") as json_file:
        json.dump(
            server.openapi(),
            json_file,
            indent=2,
        )


def save_openapi_to_yaml():
    """Save OpenAPI spec to YAML"""

    with open("openapi.yaml", "w", encoding="utf-8") as yaml_file:
        yaml.dump(
            server.openapi(),
            yaml_file,
        )


save_openapi_to_json()
save_openapi_to_yaml()
