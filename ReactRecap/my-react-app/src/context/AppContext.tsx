import { createContext } from "react";

export type ActionType = 
  | {type: "increment"}
  | {type: "decrement"}
  | {type: "reset"}
  | {type: "set", payload: number};


export type StateType = {
  count: number;
}


export type AppContextType = {
  userName:string;
  setUserName: (userName: string) => void;

  state: StateType;
  dispatch: React.Dispatch<ActionType>;

}


export const AppContext = createContext<AppContextType | undefined>(undefined);