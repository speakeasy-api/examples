import dotenv from "dotenv";
dotenv.config();
import { Petstore } from "petstore";
import { petCreatedToJSON } from "../../models/components/petcreated.js";
import { SDKValidationError } from "../../models/errors/sdkvalidationerror.js";
import { WebhookAuthenticationError } from "../../types/webhooks.js";

const sdk = new Petstore();

// This is a fake request, it's not actually valid because it's not signed but it's just for example purposes
const exampleFakeRequest = new Request(
  "https://example.com/my-webhook-handler",
  {
    body: petCreatedToJSON({ type: "pet.created", pet: { id: "dog" } }),
    method: "POST",
  }
);

try {
  await sdk.validateWebhook({
    request: exampleFakeRequest,
    secret: "<secret>",
  });
} catch (error) {
  if (error instanceof WebhookAuthenticationError) {
    console.log(
      "Something wrong with the webhook signature? Or maybe the secret is wrong?",
      error
    );
  }
  if (error instanceof SDKValidationError) {
    console.log(
      "Something wrong with the webhook request body? Maybe I'm on an outdated SDK version?",
      error
    );
  }
  throw error;
}
