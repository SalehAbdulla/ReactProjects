import { useEffect, useState } from "react";

type ApiType = {
  id: string;
  name: string;
  username: string;
  email:string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
}

const UseEffectDemo = () => {
  const [users, setUser] = useState<ApiType[]>();
  const [isUpdated, setIsUpdated] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUser(result);
  };

  useEffect(() => {
    fetchData();
  }, [isUpdated]);

  console.log(users);

  return (
    <div>
      {users?.map((element, index) => (
        <h1 key={index}>{element.name}</h1>
      ))}

      <div><button onClick={()=> setIsUpdated(!isUpdated)}>Update State</button></div>
    </div>
  );
};

export default UseEffectDemo;
