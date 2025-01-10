import { createRemoteJWKSet, JWK } from "jose";
import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import { importJWK } from "jose/key/import";

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
const algorithm = "EdDSA";
const jwksURL =
  "https://gist.githubusercontent.com/mfbx9da4/96889e4f7e1f2b0cf80e2b6f6f754775/raw/976d28140a95e4d797293af644d1dfe7e62b3751/jwks.example.json";

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
  private _jwks = createRemoteJWKSet(new URL(jwksURL));

  async sign({
    request,
    secret,
  }: {
    request: Request;
    secret: string;
  }): Promise<Request> {
    const { jwk, key } = await this._parsePrivateKey(secret);

    // Prepare the new request
    const newRequest = request.clone();

    // Clone the request to avoid mutating the original request
    const clonedRequest = request.clone();
    const bodyBytes = await clonedRequest.arrayBuffer();
    const contentDigest = await this._digestBody(bodyBytes);

    const jwt = await new SignJWT({ contentDigest })
      .setProtectedHeader({ alg: algorithm, kid: jwk.kid! })
      .setIssuedAt(Math.floor(Date.now() / 1000))
      .sign(key);

    newRequest.headers.set(headerName, jwt);

    return newRequest;
  }

  async verify({ request }: { request: Request }): Promise<boolean> {
    // Clone the request to avoid mutating the original request
    request = request.clone();

    const signature = request.headers.get(headerName);
    this._assert(signature, "Unable to verify webhook: missing signature");
    const jwt = await jwtVerify(signature, this._jwks);

    const timestampSeconds = jwt.payload.iat;
    this._assert(
      timestampSeconds,
      "Webhook verification failed: missing timestamp"
    );
    const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 60 * 60;
    this._assert(
      timestampSeconds >= fiveMinutesAgo,
      "Webhook verification failed: timestamp expired"
    );

    const bodyBytes = await request.arrayBuffer();
    const contentDigest = await this._digestBody(bodyBytes);
    this._assert(
      contentDigest === jwt.payload["contentDigest"],
      "Webhook verification failed: digest mismatch"
    );

    return true;
  }

  private async _digestBody(bodyBytes: ArrayBuffer | Uint8Array) {
    const crypto = globalThis?.crypto?.subtle;
    this._assert(crypto, "Unable to sign webhook: missing SubtleCrypto");
    const digestBytes = await crypto.digest("SHA-256", bodyBytes);
    const digestBase64 = bytesToBase64(new Uint8Array(digestBytes));
    return `sha-256=:${digestBase64}:`;
  }

  private async _parsePrivateKey(secret: string) {
    const jwk: JWK = JSON.parse(secret);
    if (!jwk.kty) throw new Error("missing kty");
    if (!jwk.kid) throw new Error("missing kid");
    if (!jwk.alg) throw new Error("missing alg");
    if (jwk.alg !== algorithm) throw new Error(`mismatch alg: "${jwk.alg}"`);
    const key = await importJWK(jwk, algorithm);
    return { jwk, key };
  }

  private _assert(condition: any, message: string): asserts condition {
    if (!condition) throw new WebhookAuthenticationError(message);
  }
}
