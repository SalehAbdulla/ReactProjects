"use client"; // required in client component using useActionState

import { useActionState } from "react";

const increment = async (previousState: number, formData: FormData) => {
  const name = formData.get("name");
  console.log("Name entered:", name);
  return previousState + 1;
};

const CountUseActionState = () => {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form action={formAction}>
      <h1>{state}</h1>
      
      <input type="text" name="name" placeholder="Please Enter Your name" />

      <br />

      <button type="submit">Increment</button>
    </form>
  );
};

export default CountUseActionState;
