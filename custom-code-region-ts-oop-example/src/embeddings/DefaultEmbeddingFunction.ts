import { isBrowser } from "./utils.js";
import { IEmbeddingFunction } from "./IEmbeddingFunction.js";

// Dynamically import module
let TransformersApi: Promise<any>;

export class DefaultEmbeddingFunction implements IEmbeddingFunction {
  private pipelinePromise?: Promise<any> | null;
  private transformersApi: any;
  private model: string;
  private revision: string;
  private quantized: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private progress_callback: Function | null;

  /**
   * DefaultEmbeddingFunction constructor.
   * @param options The configuration options.
   * @param options.model The model to use to calculate embeddings. Defaults to 'Xenova/all-MiniLM-L6-v2', which is an ONNX port of `sentence-transformers/all-MiniLM-L6-v2`.
   * @param options.revision The specific model version to use (can be a branch, tag name, or commit id). Defaults to 'main'.
   * @param options.quantized Whether to load the 8-bit quantized version of the model. Defaults to `false`.
   * @param options.progress_callback If specified, this function will be called during model construction, to provide the user with progress updates.
   */
  constructor({
    model = "Xenova/all-MiniLM-L6-v2",
    revision = "main",
    quantized = false,
    progress_callback = null,
  }: {
    model?: string;
    revision?: string;
    quantized?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    progress_callback?: Function | null;
  } = {}) {
    this.model = model;
    this.revision = revision;
    this.quantized = quantized;
    this.progress_callback = progress_callback;
  }

  public async generate(texts: string[]): Promise<number[][]> {
    await this.loadClient();

    // Store a promise that resolves to the pipeline
    // eslint-disable-next-line no-async-promise-executor
    this.pipelinePromise = new Promise(async (resolve, reject) => {
      try {
        const pipeline = this.transformersApi;

        const quantized = this.quantized;
        const revision = this.revision;
        const progress_callback = this.progress_callback;

        resolve(
          await pipeline("feature-extraction", this.model, {
            quantized,
            revision,
            progress_callback,
          })
        );
      } catch (e) {
        reject(e);
      }
    });

    const pipe = await this.pipelinePromise;
    const output = await pipe(texts, { pooling: "mean", normalize: true });
    return output.tolist();
  }

  private async loadClient() {
    if (this.transformersApi) return;
    try {
      const { pipeline } = await DefaultEmbeddingFunction.import();
      TransformersApi = pipeline;
    } catch (_a) {
      // @ts-expect-error todo
      if (_a.code === "MODULE_NOT_FOUND") {
        throw new Error(
          "Please install the APIdb-default-embed package to use the DefaultEmbeddingFunction, `npm install APIdb-default-embed`"
        );
      }
      throw _a; // Re-throw other errors
    }
    this.transformersApi = TransformersApi;
  }

  /** @ignore */
  static async import(): Promise<{
    // @ts-expect-error todo
    pipeline: typeof import("APIdb-default-embed");
  }> {
    try {
      let importResult;
      if (isBrowser()) {
        importResult = await import(
          // todo: we can't import APIdb-default-embed here yet because the `build` script was not run before publishing our fork to NPM, so the entrypoint in our forked package points to a non-existent file.
          // @ts-expect-error todo
          "https://unpkg.com/@xenova/transformers@2.13.2"
        );
      } else {
        // @ts-expect-error todo
        importResult = await import("APIdb-default-embed");
      }
      const { pipeline, env } = importResult;

      // By default, transformers.js attempts to first load models from the site origin when running in a browser (and then falls back to loading from HuggingFace).
      // SPA servers like Vite tend to break this because by default they serve the same document regardless of the path, so transformers.js sees a 200 response and treats the HTML response as model JSON.
      // todo: expose this as a config parameter in the future?
      env.allowLocalModels = false;

      return { pipeline };
    } catch (e) {
      throw new Error(
        "Please install APIdb-default-embed as a dependency with, e.g. `npm install APIdb-default-embed`"
      );
    }
  }
}
