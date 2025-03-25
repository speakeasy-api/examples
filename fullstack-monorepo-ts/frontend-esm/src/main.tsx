import { AcmeTodoApiCore } from "@acme/todo-sdk/core";
import { AcmeTodoApiProvider } from "@acme/todo-sdk/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const Root: React.FC<React.PropsWithChildren> = () => {
  const queryClient = new QueryClient();
  const acmeTodoApi = new AcmeTodoApiCore({
    serverURL: import.meta.env.VITE_API_SERVER_URL,
  });

  // Retries are handled by the underlying SDK.
  queryClient.setQueryDefaults(["@acme/sdk"], { retry: false });
  queryClient.setMutationDefaults(["@acme/sdk"], { retry: false });

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AcmeTodoApiProvider client={acmeTodoApi}>
          <App />
        </AcmeTodoApiProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
