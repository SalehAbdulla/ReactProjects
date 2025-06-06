import { UseAppContext } from "../context/UseAppContext";

const Counter = () => {
  const { username, setUsername } = UseAppContext();

  return (
    <div>
      <h1
        onClick={() => setUsername(username === "Saleh" ? "Abdulla" : "Saleh")}
      >
        {username}
      </h1>
    </div>
  );
};

export default Counter;
