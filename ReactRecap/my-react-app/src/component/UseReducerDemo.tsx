import { UseAppContext } from "../context/UseAppContext";
import { useState } from "react";

const UseReducerDemo = () => {
  const { state, dispatch } = UseAppContext();
  const [input, setInput] = useState<number>();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>I Love To Grind</h1>

      <h2>Counter = {state.count}</h2>

      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <br/>

      <div>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInput(Number(event.currentTarget.value))
          }
          value={input}
          type="number"
        />
        {"   "}
        <button
          onClick={() => dispatch({ type: "set", payload: Number(input) })}
        >
          Set
        </button>
      </div>
    </div>
  );
};

export default UseReducerDemo;
