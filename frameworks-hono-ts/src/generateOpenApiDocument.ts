import fs from "node:fs";
import { generateSpecs } from "hono-openapi";
import yaml from "js-yaml";

import mainApp from "./app";
import { openAPIDocumentation } from "./lib/configureOpenAPI";

async function main() {
  const specs = await generateSpecs(mainApp, {
    documentation: openAPIDocumentation,
  });

  fs.writeFileSync("openapi.yaml", yaml.dump(specs));
}

main();
