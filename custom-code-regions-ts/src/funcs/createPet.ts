import { PetStoreCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Result } from "../types/fp.js";
import { createPetAvian } from "./createPetAvian.js";
import { createPetCanine } from "./createPetCanine.js";

export type CreatePetRequest =
  | ({ type: "avian" } & components.PetAvian)
  | ({ type: "canine" } & components.PetCanine);

export async function createPet(
  client: PetStoreCore,
  request: CreatePetRequest,
  options?: RequestOptions
): Promise<
  Result<
    components.Pet,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  switch (request.type) {
    case "avian":
      return createPetAvian(client, request, options);
    case "canine":
      return createPetCanine(client, request, options);
    default:
      throw new Error("Invalid pet type");
  }
}
