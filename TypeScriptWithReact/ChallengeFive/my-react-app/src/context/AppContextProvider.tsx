import type { ReactNode } from "react"
import { AppContext } from "./AppContext";
import { useState } from "react";
import {type AppContextType} from "./AppContext";

type AppContextProviderType = {
  children: ReactNode;
}

const AppContextProvider  = ({children}: AppContextProviderType) => {

  const [username, setUsername] = useState("Saleh");
  const values:AppContextType = {username, setUsername};

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
