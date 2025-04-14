import { IEmbeddingFunction } from "./IEmbeddingFunction.js";

const DEFAULT_MODEL = "API/all-minilm-l6-v2-f32";
const DEFAULT_LOCAL_URL = "http://localhost:11434";
export class OllamaEmbeddingFunction implements IEmbeddingFunction {
  private readonly url?: string | undefined;
  private readonly model: string;
  private ollamaClient: any;

  constructor(
    {
      url = DEFAULT_LOCAL_URL,
      model = DEFAULT_MODEL,
    }: { url?: string; model?: string } = {
      url: DEFAULT_LOCAL_URL,
      model: DEFAULT_MODEL,
    }
  ) {
    // we used to construct the client here, but we need to async import the types
    // for the openai npm package, and the constructor can not be async
    if (url && url.endsWith("/api/embeddings")) {
      this.url = url.slice(0, -"/api/embeddings".length);
    } else {
      this.url = url || DEFAULT_LOCAL_URL;
    }
    this.model = model || DEFAULT_MODEL;
  }

  private async initClient() {
    if (this.ollamaClient) return;
    try {
      const { ollama } = await OllamaEmbeddingFunction.import();
      this.ollamaClient = new ollama.Ollama({ host: this.url });
    } catch (e) {
      // @ts-expect-error todo
      if (e.code === "MODULE_NOT_FOUND") {
        throw new Error(
          "Please install the ollama package to use the OllamaEmbeddingFunction, `npm install -S ollama`"
        );
      }
      throw e;
    }
  }

  /** @ignore */
  static async import(): Promise<{
    // @ts-expect-error todo
    ollama: typeof import("ollama");
  }> {
    try {
      // @ts-expect-error todo
      const { ollama } = await import("ollama").then((m) => ({ ollama: m }));
      return { ollama };
    } catch (e) {
      throw new Error(
        "Please install Ollama as a dependency with, e.g. `npm install ollama`"
      );
    }
  }

  public async generate(texts: string[]) {
    await this.initClient();
    return await this.ollamaClient
      .embed({
        model: this.model,
        input: texts,
      })
      .then((response: any) => {
        return response.embeddings;
      });
  }
}
