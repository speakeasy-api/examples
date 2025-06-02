import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { NewTodoForm } from "./NewTodoForm";
import { ACMEProvider } from "@acme/sdk/react-query/index.js";
import { ACMECore } from "@acme/sdk/core.js";

const queryClient = new QueryClient();
const acme = new ACMECore();
queryClient.setQueryDefaults(["@acme/sdk"], { retry: false });
queryClient.setMutationDefaults(["@acme/sdk"], { retry: false });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ACMEProvider client={acme}>
        <h1>Todo app</h1>
        <NewTodoForm />
      </ACMEProvider>
    </QueryClientProvider>
  );
}

export default App;
