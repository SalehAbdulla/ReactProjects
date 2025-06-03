import { useState } from "react";
import Child from "./Child";
import "./Parent.css";

const Parent = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
      <div>{show ? <Child /> : null}</div>
    </div>
  );
};

export default Parent;
