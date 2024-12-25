import { config } from "dotenv";
config();
import { Petstore } from "petstore";
import { SDKHooks } from "../../hooks/hooks.js";

const hooks = new SDKHooks();
hooks.registerBeforeRequestHook({
  beforeRequest: async (_, request) => {
    console.log(
      "Before request hook",
      request.url.toString(),
      Object.fromEntries(request.headers.entries()),
      request.body
    );
    return request;
  },
});

const sdk = new Petstore({ hooks });

const data = await sdk.sendPetCreated(
  {
    url: "https://example.com/my-webhook-handler",
    secret: "<secret>",
  },
  {
    type: "pet.created",
    pet: { id: "dog" },
  }
);

console.log(data);
