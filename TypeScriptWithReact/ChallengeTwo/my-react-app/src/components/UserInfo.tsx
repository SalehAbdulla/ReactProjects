export type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo: React.FC<Info> = ({ username, email, age, location }: Info) => {
  return <ul>
    <li>{username}</li>
    <li>{email}</li>
    <li>{age}</li>
    <li>{JSON.stringify(location)}</li>
  </ul>;
};

export default UserInfo;
