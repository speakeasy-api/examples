import dotenv from "dotenv";
dotenv.config();
import { Petstore } from "petstore";
import { petCreatedToJSON } from "../../models/components/petcreated.js";

const sdk = new Petstore();

// This is a fake request, it's not actually valid because it's not signed but it's just for example purposes
const exampleFakeRequest = new Request(
  "https://example.com/my-webhook-handler",
  {
    body: petCreatedToJSON({ type: "pet.created", pet: { id: "dog" } }),
    method: "POST",
  }
);

const data = await sdk.validateWebhook({
  request: exampleFakeRequest,
  secret: "<secret>",
});

console.log(data);

if (data.type === "pet.created") {
  console.log("Pet created", data.pet);
}

if (data.type === "pet.deleted") {
  console.log("Pet deleted", data.id);
}
