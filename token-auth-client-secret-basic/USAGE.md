<!-- Start SDK Example Usage [usage] -->
```typescript
import { TokenAuthClientSecretBasic } from "token-auth-client-secret-basic";

const tokenAuthClientSecretBasic = new TokenAuthClientSecretBasic({
  security: {
    clientID: process.env["TOKENAUTHCLIENTSECRETBASIC_CLIENT_ID"] ?? "",
    clientSecret: process.env["TOKENAUTHCLIENTSECRETBASIC_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await tokenAuthClientSecretBasic.pets.add({
    id: "<id>",
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->