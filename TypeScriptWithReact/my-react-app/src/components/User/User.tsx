import type { FC } from "react";

type UserType = {
  name: string;
  age: number;
  isStudent: boolean;
}


const User: FC<UserType> = ({name, age, isStudent}: UserType) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent && "true" }</h1>
    </div>
  )
}

export default User
