'use client'
 
// This is a server component -- not possible to use it as client side
import { use } from "react";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};

console.log(fetchData())

const FetchToDoUsingUse = () => {
  const data = use(fetchData());
  console.log(data.title);

  return <div>{data.title}</div>;
};

export default FetchToDoUsingUse;
 