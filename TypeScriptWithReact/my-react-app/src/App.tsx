import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import { type Info, type AdminInfoList } from "./components/types";

const App = () => {
  const user: Info = {
    id: 1,
    name: "Jane Smith",
    email: "Jane@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Saleh Abdulla",
    email: "Saleh Abdulla@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
