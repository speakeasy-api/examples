import { Petstore } from "petstore";

const sdk = new Petstore();

const secret =
  "k4.secret.WkR8ZyqiOLlzv6j4AuNWmnM73I4UbmKkzOoRKqOK6AX0rMPpqD3jGWsGlR_W0CzowCh68It8ctrnfROKYxbqWA";

const data = await sdk.sendPetCreated(
  {
    url: "https://example.com/my-webhook-handler",
    secret,
  },
  {
    type: "pet.created",
    pet: { id: "dog" },
  }
);

console.log(data);
