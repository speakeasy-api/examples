import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GhAcme as SDK } from "monorepo-sdk";

async function generateUUID(sdk: SDK) {
  const res = await sdk.generateUUID();
  const uuid = res.object?.uuid;
  if (!uuid) {
    throw new Error("No UUID found");
  }
  return uuid;
}

function App() {
  const [count, setCount] = useState(0);
  const sdk = React.useMemo(() => new SDK(), []);
  const query = useQuery({
    queryKey: ["uuid", sdk],
    queryFn: () => generateUUID(sdk),
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <pre>
          {query.status === "error" ? query.error.message : null}
          {query.status === "success" ? query.data : null}
          {query.status === "pending" ? " Initializing..." : null}
        </pre>
        <button onClick={() => query.refetch()}>
          Refetch
          {query.isFetching ? <span> ⏳︎</span> : null}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
