import { createContext } from "react";

export type AppContextType = {
    username: string;
    setUserName: (username: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);