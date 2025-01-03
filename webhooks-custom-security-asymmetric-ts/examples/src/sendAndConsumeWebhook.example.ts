import { APIError } from "petstore/models/errors/apierror.js";
import { Petstore } from "petstore";
import { HTTPClient } from "petstore/lib/http.js";

const secret =
  "k4.secret.WkR8ZyqiOLlzv6j4AuNWmnM73I4UbmKkzOoRKqOK6AX0rMPpqD3jGWsGlR_W0CzowCh68It8ctrnfROKYxbqWA";

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
      secret,
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
