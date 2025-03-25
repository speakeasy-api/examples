
import React from "react";

import { AcmeTodoApiCore } from "../core.js";

const AcmeTodoApiContext = React.createContext<AcmeTodoApiCore | null>(null);

export function AcmeTodoApiProvider(props: { client: AcmeTodoApiCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <AcmeTodoApiContext.Provider value={props.client}>
      {props.children}
    </AcmeTodoApiContext.Provider>
  );
}

export function useAcmeTodoApiContext(): AcmeTodoApiCore { 
  const value = React.useContext(AcmeTodoApiContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of AcmeTodoApiCore and pass it to <AcmeTodoApiProvider />.");
  }
  return value;
}
