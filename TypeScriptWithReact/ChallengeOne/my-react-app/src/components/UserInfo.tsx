import { type Info } from "../types";

type UserType = {
  user: Info;
}

const UserInfo: React.FC<UserType> = ({user}: UserType) => {
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}

export default UserInfo
