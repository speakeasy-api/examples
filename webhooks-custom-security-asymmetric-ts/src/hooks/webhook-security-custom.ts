import { bytesToBase64 } from "../lib/base64.js";
import { ERR, OK, Result } from "../types/fp.js";
import { WebhookAuthenticationError } from "../types/webhooks.js";
import {
  BeforeRequestContext,
  BeforeRequestHook,
  WebhookVerificationContext,
  WebhookVerificationHook,
} from "./types.js";

const headerName = "X-Signature";
const publicKeysUrl =
  "https://gist.githubusercontent.com/mfbx9da4/24479b719a7732c2515319f5a77e0039/raw/bc34b622c30ac81eab9dfc3dfc1d31fd7c96e12e/paseto-public-keys.json";

export class WebhookSecurityHook
  implements BeforeRequestHook, WebhookVerificationHook
{
  private auth = new WebhookSecurity();

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request
  ): Promise<Request> {
    if (!hookCtx.webhookRecipient) return request;
    return this.auth.sign({ secret: hookCtx.webhookRecipient.secret, request });
  }

  async verifyWebhook(
    _hookCtx: WebhookVerificationContext,
    { request }: { request: Request }
  ): Promise<Result<true, WebhookAuthenticationError>> {
    try {
      await this.auth.verify({ request });
      return OK(true);
    } catch (e) {
      if (e instanceof WebhookAuthenticationError) return ERR(e);
      throw e;
    }
  }
}

export class WebhookSecurity {
  private _publicKeys: Set<string> = new Set();
  private _cacheExpiration: number = 0;

  async sign({
    request,
    secret,
  }: {
    request: Request;
    secret: string;
  }): Promise<Request> {
    // Prepare the new request
    const newRequest = request.clone();

    // Clone the request to avoid mutating the original request
    request = request.clone();
    const bodyBytes = await request.arrayBuffer();
    const contentDigest = await this._digestBody(bodyBytes);

    const { sign } = await import("paseto-ts/v4");
    const signature = sign(secret, { contentDigest, exp: "5 minutes" });

    newRequest.headers.set(headerName, signature);

    return newRequest;
  }

  async verify({ request }: { request: Request }): Promise<boolean> {
    let error: Error | undefined = this._wrap(new Error("No valid key found"));
    try {
      // Clone the request to avoid mutating the original request
      request = request.clone();

      const signature = request.headers.get(headerName);
      this._assert(signature, "Unable to verify webhook: missing signature");

      const bodyBytes = await request.arrayBuffer();
      const digest = await this._digestBody(bodyBytes);
      // First try to verify against the cached keys
      for (const key of this._publicKeys) {
        error = await this._verify({ key, signature, digest });
        if (!error) return true;
      }
      // If that fails, fetch the latest keys and try again
      await this._fetchIfNeeded();
      for (const key of this._publicKeys) {
        error = await this._verify({ key, signature, digest });
        if (!error) return true;
      }

      throw error || new WebhookAuthenticationError("Logical impossibility");
    } catch (e: any) {
      throw this._wrap(e);
    }
  }

  private async _verify({
    key,
    signature,
    digest,
  }: {
    key: string;
    signature: string;
    digest: string;
  }): Promise<Error | undefined> {
    const { verify } = await import("paseto-ts/v4");
    try {
      const { payload } = verify<{ contentDigest: string }>(key, signature);
      this._assert(payload.contentDigest === digest, "Invalid signature");
      return undefined;
    } catch (e: any) {
      return this._wrap(e);
    }
  }

  private async _digestBody(bodyBytes: ArrayBuffer | Uint8Array) {
    const crypto = globalThis?.crypto?.subtle;
    this._assert(crypto, "Unable to sign webhook: missing SubtleCrypto");
    const digestBytes = await crypto.digest("SHA-256", bodyBytes);
    return bytesToBase64(new Uint8Array(digestBytes));
  }

  private async _fetchIfNeeded(): Promise<unknown> {
    if (Date.now() < this._cacheExpiration) {
      return this._publicKeys;
    }

    const response = await fetch(publicKeysUrl);
    this._assert(
      response.ok,
      "Failed to fetch public keys from " + publicKeysUrl
    );

    const keys: unknown = await response.json();
    this._assert(
      keys && typeof keys === "object",
      "Invalid public keys format"
    );
    this._assert("keys" in keys, "Invalid public keys format");
    this._assert(Array.isArray(keys.keys), "Invalid public keys format");
    this._assert(
      keys.keys.every((x: any) => typeof x === "string"),
      "Invalid public keys format"
    );
    this._publicKeys = new Set(keys.keys);

    const cacheControl = response.headers.get("Cache-Control");
    if (cacheControl) {
      const match = /max-age=(\d+)/.exec(cacheControl);
      if (match && match.length > 1) {
        const maxAge = parseInt(match[1]!, 10) * 1000;
        this._cacheExpiration = Date.now() + maxAge;
      }
    }

    return this._publicKeys;
  }

  private _assert(condition: any, message: string): asserts condition {
    if (!condition) throw new WebhookAuthenticationError(message);
  }

  private _wrap(error: Error): WebhookAuthenticationError {
    if (error instanceof WebhookAuthenticationError) return error;
    return new WebhookAuthenticationError(error.toString());
  }
}
