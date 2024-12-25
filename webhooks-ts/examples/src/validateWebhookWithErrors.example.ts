import { config } from "dotenv";
config();
import { Petstore } from "petstore";
import { petCreatedToJSON } from "../../models/components/petcreated.js";
import { SDKValidationError } from "../../models/errors/sdkvalidationerror.js";
import { WebhookAuthenticationError } from "../../types/webhooks.js";

const sdk = new Petstore();

// ------------------------------------------------------------------------------------------------
// Example of a signature error
// ------------------------------------------------------------------------------------------------
try {
  await sdk.validateWebhook({
    request: {
      url: "https://example.com/my-webhook-handler",
      body: petCreatedToJSON({ type: "pet.created", pet: { id: "dog" } }),
      method: "POST",
      headers: { "x-webhook-signature": "<invalid signature>" },
    },
    secret: "<secret>",
  });
} catch (error) {
  if (error instanceof WebhookAuthenticationError) {
    // Something wrong with the webhook signature? Maybe the secret is wrong?
    console.log(error.name, error.message);
  }
}

// ------------------------------------------------------------------------------------------------
// Example of a validation error
// ------------------------------------------------------------------------------------------------
try {
  await sdk.validateWebhook({
    request: {
      method: "POST",
      url: "https://example.com/my-webhook-handler",
      body: "{}",
      headers: {
        "x-webhook-signature": "mHVvhueA0+rGLK9yD3UMTbYHBRqLVdnbE/Y2njJDtRg=",
      },
    },
    secret: "<secret>",
  });
} catch (error) {
  if (error instanceof SDKValidationError) {
    // Something wrong with the webhook request body? Maybe I'm on an outdated SDK version?
    console.log(error.name, error.message);
  }
}
