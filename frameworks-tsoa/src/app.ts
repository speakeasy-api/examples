import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";

import { ValidateError } from "tsoa";
import { RegisterRoutes } from "../build/routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

// Serve the OpenAPI spec
app.use("/openapi.json", (req: ExRequest, res: ExResponse) => {
  void req;
  res.sendFile("openapi.json", { root: __dirname + "/../build" });
});

// Serve API reference documentation using dynamic import (ESM-only package)
(async () => {
  const { apiReference } = await import("@scalar/express-api-reference");
  app.use("/docs", apiReference({ url: "/openapi.json" }));
})();

RegisterRoutes(app);

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
});
