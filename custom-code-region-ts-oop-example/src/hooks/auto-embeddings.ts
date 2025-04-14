import { DefaultEmbeddingFunction } from "../embeddings/DefaultEmbeddingFunction.js";
import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

export class AutoEmbeddingsHook implements BeforeRequestHook {
  async beforeRequest(
    _hookCtx: BeforeRequestContext,
    request: Request
  ): Promise<Request> {
    const clone = request.clone();
    if (clone.headers.get("Content-Type") !== "application/json") {
      return request;
    }

    const body = await clone.json();
    const rawDocs = body.documents;
    if (body.embeddings || !Array.isArray(rawDocs)) {
      return request;
    }

    const embeddingFunc = new DefaultEmbeddingFunction();
    const embeddings = await embeddingFunc.generate(rawDocs);

    body.embeddings = embeddings;
    delete body.documents;

    const serialized = JSON.stringify(body);

    return new Request(clone.url, {
      method: clone.method,
      headers: clone.headers,
      body: serialized,
      signal: clone.signal,
    });
  }
}
