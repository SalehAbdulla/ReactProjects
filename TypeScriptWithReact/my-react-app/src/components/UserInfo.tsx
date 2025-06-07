import { type Info } from "./types";

type UserInfoProp = {
  user: Info;
}

// This is a functional component that takes UserInfoProp as a prop
const UserInfo: React.FC<UserInfoProp> = ({user}: UserInfoProp) => {
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}

export default UserInfo
