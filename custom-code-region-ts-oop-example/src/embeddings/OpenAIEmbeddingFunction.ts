import { IEmbeddingFunction } from "./IEmbeddingFunction.js";

let OpenAIApi: any;
let openAiVersion = null;
let openAiMajorVersion = null;

interface OpenAIAPI {
  createEmbedding: (params: {
    model: string;
    input: string[];
    user?: string;
    dimensions?: number;
  }) => Promise<number[][]>;
}

class OpenAIAPIv3 implements OpenAIAPI {
  private readonly configuration: any;
  private openai: any;

  constructor(configuration: { organization: string; apiKey: string }) {
    this.configuration = new OpenAIApi.Configuration({
      organization: configuration.organization,
      apiKey: configuration.apiKey,
    });
    this.openai = new OpenAIApi.OpenAIApi(this.configuration);
  }

  public async createEmbedding(params: {
    model: string;
    input: string[];
    user?: string;
    dimensions?: number;
  }): Promise<number[][]> {
    const embeddings: number[][] = [];
    const response = await this.openai
      .createEmbedding({
        model: params.model,
        input: params.input,
      })
      .catch((error: any) => {
        throw error;
      });
    const data = response.data["data"];
    for (let i = 0; i < data.length; i += 1) {
      embeddings.push(data[i]["embedding"]);
    }
    return embeddings;
  }
}

class OpenAIAPIv4 implements OpenAIAPI {
  private readonly apiKey: any;
  private openai: any;

  constructor(apiKey: any) {
    this.apiKey = apiKey;
    this.openai = new OpenAIApi({
      apiKey: this.apiKey,
    });
  }

  public async createEmbedding(params: {
    model: string;
    input: string[];
    user?: string;
    dimensions?: number;
  }): Promise<number[][]> {
    const embeddings: number[][] = [];
    const response = await this.openai.embeddings.create(params);
    const data = response["data"];
    for (let i = 0; i < data.length; i += 1) {
      embeddings.push(data[i]["embedding"]);
    }
    return embeddings;
  }
}

export class OpenAIEmbeddingFunction implements IEmbeddingFunction {
  private api_key: string;
  private org_id: string;
  private model: string;
  private openaiApi?: OpenAIAPI;
  private dimensions?: number;

  constructor({
    openai_api_key,
    openai_model,
    openai_organization_id,
    openai_embedding_dimensions,
  }: {
    openai_api_key: string;
    openai_model?: string;
    openai_organization_id?: string;
    openai_embedding_dimensions?: number;
  }) {
    // we used to construct the client here, but we need to async import the types
    // for the openai npm package, and the constructor can not be async
    this.api_key = openai_api_key;
    this.org_id = openai_organization_id || "";
    this.model = openai_model || "text-embedding-ada-002";
    this.dimensions = openai_embedding_dimensions!;
  }

  private async loadClient() {
    // cache the client
    if (this.openaiApi) return;

    try {
      const { openai, version } = await OpenAIEmbeddingFunction.import();
      OpenAIApi = openai;
      const versionVar: string = version;
      openAiVersion = versionVar.replace(/[^0-9.]/g, "");
      openAiMajorVersion = parseInt(openAiVersion.split(".")[0]!);
    } catch (_a) {
      // @ts-expect-error todo
      if (_a.code === "MODULE_NOT_FOUND") {
        throw new Error(
          "Please install the openai package to use the OpenAIEmbeddingFunction, e.g. `npm install openai`"
        );
      }
      throw _a; // Re-throw other errors
    }

    if (openAiMajorVersion > 3) {
      this.openaiApi = new OpenAIAPIv4(this.api_key);
    } else {
      this.openaiApi = new OpenAIAPIv3({
        organization: this.org_id,
        apiKey: this.api_key,
      });
    }
  }

  public async generate(texts: string[]): Promise<number[][]> {
    await this.loadClient();

    return await this.openaiApi!.createEmbedding({
      model: this.model,
      input: texts,
      dimensions: this.dimensions!,
    }).catch((error: any) => {
      throw error;
    });
  }

  /** @ignore */
  static async import(): Promise<{
    openai: typeof import("openai");
    version: string;
  }> {
    try {
      const { default: openai } = await import("openai");
      const { VERSION } = await import("openai/version");
      // @ts-expect-error todo
      return { openai, version: VERSION };
    } catch (e) {
      throw new Error(
        "Please install the openai package to use the OpenAIEmbeddingFunction, e.g. `npm install openai`"
      );
    }
  }
}
