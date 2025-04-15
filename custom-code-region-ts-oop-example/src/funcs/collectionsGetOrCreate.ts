import { APICore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateCollectionRequest } from "../models/operations/createcollection.js";
import { Collection } from "../records/collection.js";
import { APICall, APIPromise } from "../types/async.js";
import { ERR, OK, Result } from "../types/fp.js";
import * as errors from "../models/errors/index.js";
import { collectionsCreate } from "./collectionsCreate.js";

export function collectionsGetOrCreate(
  client: APICore,
  request: CreateCollectionRequest,
  options?: RequestOptions
): APIPromise<
  Result<
    Collection,
    | errors.ErrorResponse
    | errors.APIError
    | errors.SDKValidationError
    | errors.UnexpectedClientError
    | errors.InvalidRequestError
    | errors.RequestAbortedError
    | errors.RequestTimeoutError
    | errors.ConnectionError
  >
> {
  return new APIPromise(
    collectionsCreate(client, request, options)
      .$inspect()
      .then(
        ([result, apiCall]): [
          Result<
            Collection,
            | errors.ErrorResponse
            | errors.APIError
            | errors.SDKValidationError
            | errors.UnexpectedClientError
            | errors.InvalidRequestError
            | errors.RequestAbortedError
            | errors.RequestTimeoutError
            | errors.ConnectionError
          >,
          APICall
        ] => {
          if (!result.ok) {
            return [ERR(result.error), apiCall];
          }

          return [OK(new Collection(client, result.value)), apiCall];
        }
      )
  );
}
