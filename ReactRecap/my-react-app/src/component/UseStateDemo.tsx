import { useState } from "react";

const UseStateDemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  const [state, setState] = useState([
    {
      counter: 135,
      firstName: "Saleh",
      lastName: "Abdulla",
    },
  ]);

  const pushToNumbers = (input: number) => {
    setNumbers((numbers) => [...numbers, input]);
  };

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <br />
      <hr />
      <br />
      {state.map(({ counter, firstName, lastName }) => (
        <h1 key={Math.random()}>
          {counter} {firstName} {lastName}
        </h1>
      ))}

      <br />
      <hr />
      <br />

      {numbers.map((element, index) => (
        <span
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {element}
        </span>
      ))}
      <input
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInput(Number(event.currentTarget.value))
        }
        type="number"
        placeholder="Enter a number"
      />
      <button onClick={() => pushToNumbers(input)}>Push to the array</button>

      <br />
      <hr />
      <br />

      <button
        onClick={() =>
          setState([{ counter: 110, firstName: "Saleh", lastName: "Abdulla" }])
        }
      >
        Update Name
      </button>
    </div>
  );
};

export default UseStateDemo;
