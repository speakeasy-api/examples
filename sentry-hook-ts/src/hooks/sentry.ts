import {
    AfterErrorContext,
    AfterErrorHook,
  } from "./types";
  
  import * as Sentry from "@sentry/node";
  
  Sentry.init({
    dsn: "https://something@somthing.ingest.us.sentry.io/something", // Your DSN goes here
  });
  
  export class ErrorHooks
    implements AfterErrorHook {
    afterError(
        hookCtx: AfterErrorContext,
        response: Response | null,
        error: unknown
    ): { response: Response | null; error: unknown } {
        console.error("An error occurred in the SDK", { hookCtx, response, error });
        Sentry.addBreadcrumb({
            category: "sdk error",
            message: "An error occurred in the SDK",
            level: "error",
            data:{
                hookCtx,
                response,
                error
            }
          });
        Sentry.captureException(error);
        return { response, error };
    }
  }