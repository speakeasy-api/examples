import dotenv from "dotenv";
dotenv.config();
import { Petstore } from "petstore";

const sdk = new Petstore();

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
