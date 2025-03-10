import {
    AfterErrorContext,
    AfterErrorHook,
    AfterSuccessContext,
    AfterSuccessHook,
    BeforeRequestContext,
    BeforeRequestHook,
    SDKInitHook,
    SDKInitOptions,
  } from "./types";
  
  import { PostHog } from "posthog-node";
  
  const PostHogClient = new PostHog("phc_xxxxxxxxxx", {
    host: "https://us.i.posthog.com",
  });
    
  export class TelemetryHooks
    implements SDKInitHook, BeforeRequestHook, AfterSuccessHook, AfterErrorHook
  {
    async sdkInit(opts: SDKInitOptions): Promise<SDKInitOptions> {
      const { baseURL, client } = opts;
      console.log("SDK Init", opts);
      PostHogClient.capture({
        distinctId: "distinct_id_of_the_user",
        event: "SDK Init",
        properties: {
          opts: opts,
        },
      });
  
      await PostHogClient.shutdown();
      return { baseURL: baseURL, client };
    }
  
    async beforeRequest(
      hookCtx: BeforeRequestContext,
      request: Request
    ): Promise<Request> {
      PostHogClient.capture({
        distinctId: "distinct_id_of_the_user",
        event: "Before Request",
        properties: {
          hookCtx: hookCtx,
        },
      });
  
      await PostHogClient.shutdown();
      return request;
    }
  
    async afterSuccess(
      hookCtx: AfterSuccessContext,
      response: Response
    ): Promise<Response> {
      PostHogClient.capture({
        distinctId: "distinct_id_of_the_user",
        event: "After Success",
        properties: {
          hookCtx: hookCtx,
          response: response,
        },
      });
  
      await PostHogClient.shutdown();
      return response;
    }
  
    async afterError(
      hookCtx: AfterErrorContext,
      response: Response | null,
      error: unknown
    ): Promise<{ response: Response | null; error: unknown }> {
      PostHogClient.capture({
        distinctId: "distinct_id_of_the_user",
        event: "After Error",
        properties: {
          hookCtx: hookCtx,
          response: response,
          error: error,
        },
      });
  
      await PostHogClient.shutdown();
      return { response, error };
    }
  }