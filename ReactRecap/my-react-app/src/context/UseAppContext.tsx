import { useContext } from "react"
import { AppContext } from "./AppContext"


export const UseAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("AppContext must be used by AppContextProvider");
  }
  return context;
}