import { IEmbeddingFunction } from "./IEmbeddingFunction.js";

// Dynamically import module
let TransformersApi: Promise<any>;

export class TransformersEmbeddingFunction implements IEmbeddingFunction {
  private pipelinePromise?: Promise<any> | null;
  private transformersApi: any;
  private model: string;
  private revision: string;
  private quantized: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private progress_callback: Function | null;

  /**
   * TransformersEmbeddingFunction constructor.
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
      const { pipeline } = await TransformersEmbeddingFunction.import();
      TransformersApi = pipeline;
    } catch (_a) {
      // @ts-expect-error todo
      if (_a.code === "MODULE_NOT_FOUND") {
        throw new Error(
          "Please install the @xenova/transformers package to use the TransformersEmbeddingFunction, `npm install @xenova/transformers`"
        );
      }
      throw _a; // Re-throw other errors
    }
    this.transformersApi = TransformersApi;
  }

  /** @ignore */
  static async import(): Promise<{
    // @ts-expect-error todo
    pipeline: typeof import("@xenova/transformers");
  }> {
    try {
      // @ts-expect-error todo
      const { pipeline } = await import("@xenova/transformers");
      return { pipeline };
    } catch (e) {
      throw new Error(
        "Please install @xenova/transformers as a dependency with, e.g. `npm install @xenova/transformers`"
      );
    }
  }
}
