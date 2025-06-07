import { type Info } from "./UserInfo";

type AdminInfo = Info & {
  admin: boolean;
};

const AdminInfo = ({ username, email, age, location, admin }: AdminInfo) => {
  return (
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
      <li>{JSON.stringify(admin)}</li>
    </ul>
  );
};

export default AdminInfo;
