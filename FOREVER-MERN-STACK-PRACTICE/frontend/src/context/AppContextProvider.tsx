import { useState, type ReactNode } from "react"
import { AppContext, type AppContextType } from "./AppContext";

type AppContextProviderType = {
    children: ReactNode;
}

export const AppContextProvider = ({children}: AppContextProviderType) => {

    const [username, setUserName] = useState("Saleh");

    const values: AppContextType = {username, setUserName};

  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  )
}
