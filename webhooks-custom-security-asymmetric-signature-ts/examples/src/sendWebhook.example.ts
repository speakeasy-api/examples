import dotenv from "dotenv";
dotenv.config();
import { Petstore } from "petstore";
import { APIError } from "petstore/models/errors/apierror.js";
import { SDKHooks } from "petstore/hooks/hooks.js";

class PetstoreWithSpy extends Petstore {
  #lastRequest?: Request;

  constructor() {
    const hooks = new SDKHooks();

    hooks.registerBeforeRequestHook({
      beforeRequest: (_, req) => {
        this.#lastRequest = req.clone();
        return req;
      },
    });

    super({ hooks } as any);
  }

  get _lastRequest(): Request | undefined {
    return this.#lastRequest;
  }
}

const sdk = new PetstoreWithSpy();

// Can be generated from https://gist.github.com/mfbx9da4/9fb911e9b24dfba00445ff128b59493f
const jwkPrivateString = `{
  "kty": "EC",
  "x": "idPvhh1C1DP-aA3IFcUP2g9iahyP8whNRyqeQC91lhQ",
  "y": "UQv7b5DSF1h_0ZHTtc3r1ifCp5PvRCfjd54u8wbfkX8",
  "crv": "P-256",
  "d": "xISIPnpnKK9R_fSranf6Y_-tBJnbuCe1tkMgqNIN-bY",
  "kid": "88f72139-a9d2-44d0-af17-42a03558718a",
  "alg": "ES256"
}`;

try {
  const data = await sdk.sendPetCreated(
    {
      url: "https://example.com/my-webhook-handler",
      secret: jwkPrivateString,
    },
    {
      type: "pet.created",
      pet: { id: "dog" },
    }
  );

  console.log(data);
} catch (e: any) {
  // An error is expected here because it's an example webhook handler that doesn't exist
  if (e instanceof APIError) {
    console.log("Webhook was sent successfully");
  } else {
    throw e;
  }
}

const res = await sdk.validateWebhook({
  request: sdk._lastRequest!,
  secret: "",
});

console.log("res", res);
