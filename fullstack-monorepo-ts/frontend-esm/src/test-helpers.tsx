import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AcmeTodoApiCore } from "@acme/todo-sdk/core.js";
import { AcmeTodoApiProvider } from "@acme/todo-sdk/react-query/index.js";
import React from "react";
import "@acme/todo-sdk";

const queryClient = new QueryClient();
const acme = new AcmeTodoApiCore();

queryClient.setQueryDefaults(["@acme/todo-sdk"], { retry: false });
queryClient.setMutationDefaults(["@acme/todo-sdk"], { retry: false });

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AcmeTodoApiProvider client={acme}>
        <>{children}</>
      </AcmeTodoApiProvider>
    </QueryClientProvider>
  );
};

function customRender(ui: React.ReactNode, options?: RenderOptions) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";
export { customRender as render };
