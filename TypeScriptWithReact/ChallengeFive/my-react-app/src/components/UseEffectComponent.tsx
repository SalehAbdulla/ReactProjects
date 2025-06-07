import { useEffect, useState } from "react";



const UseEffectComponent = () => {
  const [data, setData] = useState<null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/2");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default UseEffectComponent;
