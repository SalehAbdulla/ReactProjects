import { useEffect, useState } from "react";

const Child = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };

  }, []);

  return <div>Child Component <span>  {count}</span></div>;
};

export default Child;
