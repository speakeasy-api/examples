#!/usr/bin/env node

/**
 * Converts openapi.yaml to openapi.json.
 * Usage: node scripts/generate-openapi.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { parse } from "yaml";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const yamlContent = readFileSync(resolve(root, "openapi.yaml"), "utf-8");
const spec = parse(yamlContent);

writeFileSync(
  resolve(root, "openapi.json"),
  JSON.stringify(spec, null, 2) + "\n"
);

console.log("Generated openapi.json from openapi.yaml");
