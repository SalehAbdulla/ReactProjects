import type { ReactNode } from "react";
import { AppContext } from "./AppContext";
import type { AppContextType } from "./AppContext";
import { useReducer, useState } from "react";
import type { StateType, ActionType } from "./AppContext";

export type AppContextProviderType = {
  children: ReactNode;
};

const initialState = { count: 0 };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: (state.count = 0) };
    case "set":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: AppContextProviderType) => {
  const [userName, setUserName] = useState("Saleh");
  const [state, dispatch] = useReducer(reducer, initialState);
  const values: AppContextType = { userName, setUserName, state, dispatch };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
