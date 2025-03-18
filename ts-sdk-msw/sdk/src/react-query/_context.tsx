
import React from "react";

import { ACMECore } from "../core.js";

const ACMEContext = React.createContext<ACMECore | null>(null);

export function ACMEProvider(props: { client: ACMECore, children: React.ReactNode }): React.ReactNode { 
  return (
    <ACMEContext.Provider value={props.client}>
      {props.children}
    </ACMEContext.Provider>
  );
}

export function useACMEContext(): ACMECore { 
  const value = React.useContext(ACMEContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of ACMECore and pass it to <ACMEProvider />.");
  }
  return value;
}
