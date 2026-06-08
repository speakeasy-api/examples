import * as yaml from "js-yaml";
import { createApp } from "./app";

async function generateOpenAPI() {
  try {
    const app = createApp();
    const response = await app.handle(
      new Request("http://elysia/openapi/json")
    );

    if (!response.ok) {
      throw new Error(
        `Failed to generate OpenAPI JSON: ${response.status} ${response.statusText}`
      );
    }

    const openAPIObject = await response.json();

    // Convert to YAML
    const yamlString = yaml.dump(openAPIObject);

    // Save the YAML string to a file
    await Bun.write("openapi.yaml", yamlString);

    console.log("OpenAPI document saved to openapi.yaml");
  } catch (error) {
    console.error("Error generating OpenAPI spec:", error);
  }
}

generateOpenAPI();
