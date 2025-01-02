import { Petstore } from "petstore";
import { HTTPClient } from "petstore/lib/http.js";

const jwkPrivateString = `{
  "kty": "EC",
  "x": "idPvhh1C1DP-aA3IFcUP2g9iahyP8whNRyqeQC91lhQ",
  "y": "UQv7b5DSF1h_0ZHTtc3r1ifCp5PvRCfjd54u8wbfkX8",
  "crv": "P-256",
  "d": "xISIPnpnKK9R_fSranf6Y_-tBJnbuCe1tkMgqNIN-bY",
  "kid": "88f72139-a9d2-44d0-af17-42a03558718a",
  "alg": "ES256"
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
  .catch(() => {});

if (!lastRequest) {
  throw new Error("No request was made");
}

const data = await sdk.validateWebhook({ request: lastRequest });

console.log(data);
