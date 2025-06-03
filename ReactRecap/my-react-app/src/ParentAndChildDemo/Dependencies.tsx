import { useEffect, useState } from "react";

const Dependencies = () => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState(["India", "USA", "Pakistan"]);
  const [user, setUser] = useState({ id: 1, name: "Harry", age: 15 });
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Welcome to React World 💕😎");
  }, [count, show, countries, user]);
  return (
    <div>
      <div className="mb50">
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <button onClick={() => setShow(!show)}>Show</button>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.currentTarget.value)
          }
          value={input}
          type="text"
        />
        <button
          onClick={() => setCountries((countries) => [...countries, input])}
        >
          Add Country
        </button>
        <button onClick={() => setUser({ id: 2, name: "Poter", age: 17 })}>
          Change User
        </button>
      </div>
    </div>
  );
};

export default Dependencies;
