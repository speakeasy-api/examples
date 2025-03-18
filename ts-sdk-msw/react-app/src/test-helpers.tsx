import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ACMECore } from "@acme/sdk/core.js";
import { ACMEProvider } from "@acme/sdk/react-query/index.js";
import React from "react";

const queryClient = new QueryClient();
const acme = new ACMECore();
queryClient.setQueryDefaults(["@acme/sdk"], { retry: false });
queryClient.setMutationDefaults(["@acme/sdk"], { retry: false });

function Providers({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ACMEProvider client={acme}>
        {/* @ts-expect-error */}
        {children}
      </ACMEProvider>
    </QueryClientProvider>
  );
}

function customRender(ui: React.ReactNode, options?: RenderOptions) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";

export { customRender as render };
