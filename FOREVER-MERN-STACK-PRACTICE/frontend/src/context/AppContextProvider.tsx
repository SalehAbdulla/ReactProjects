import { useState, type ReactNode } from "react"
import { AppContext, type AppContextType } from "./AppContext";
import { products } from "../assets/frontend_assets/assets";
 
type AppContextProviderType = {
    children: ReactNode;
}

export const AppContextProvider = ({children}: AppContextProviderType) => {

    const [username, setUserName] = useState("Saleh");
    const currency = "BHD";
    const delivery_fee = 2;

    const values: AppContextType = {username, setUserName, currency, delivery_fee, products};

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
