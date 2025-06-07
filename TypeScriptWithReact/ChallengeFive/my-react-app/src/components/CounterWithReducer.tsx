import { useReducer } from "react"


type InitialStateType = {count: number};
type ActionType = 
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set", payload: number }


const reducer = (state: InitialStateType, action: ActionType): InitialStateType =>{
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1};
    case "decrement":
      return {...state, count: state.count - 1};
    case "reset":
      return { ...state, count: 0 };
    case "set":
      return {...state, count: action.payload};
    default:
      return state;
  }
}

const CounterWithReducer = () => {

  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
    </div>
  )
}

export default CounterWithReducer
