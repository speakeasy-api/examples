import { APIError } from "petstore/models/errors/apierror.js";
import { Petstore } from "petstore";
import { HTTPClient } from "petstore/lib/http.js";

// You can generate your own here https://gist.github.com/mfbx9da4/9fb911e9b24dfba00445ff128b59493f
const jwkPrivateString = `{
  "crv": "Ed25519",
  "d": "GYy0e8x8fOrdsUVuA2CLiIB3RKZUctVynhS5dXv6tiY",
  "x": "qD7X8DrHfg0UuYstKt3FPBGqGBqY3N4lGwn9xX-nnXE",
  "kty": "OKP",
  "kid": "4b901935-5a56-4891-be18-a0a29cc9d35e",
  "alg": "EdDSA"
}`;

const httpClient = new HTTPClient();
let lastRequest: Request | undefined;
httpClient.addHook("beforeRequest", (request) => {
  lastRequest = request.clone();
  return request;
});

const sdk = new Petstore({ httpClient });

await sdk
  .sendPetCreated(
    {
      url: "https://example.com/my-webhook-handler",
      secret: jwkPrivateString,
    },
    {
      type: "pet.created",
      pet: { id: "dog" },
    }
  )
  .catch((e) => {
    if (!(e instanceof APIError)) throw e;
  });

if (!lastRequest) {
  throw new Error("No request was made");
}

const data = await sdk.validateWebhook({ request: lastRequest });

console.log(data);
