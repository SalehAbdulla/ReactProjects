import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"
import { type AdminInfoList, type Info } from "./types"
const App = () => {

  const admin: AdminInfoList = {
    id: 1,
    name: "Saleh",
    email: "Saleh@Saleh.com",
    role: "admin",
    lastDateLogIn: new Date(),
  }

  const user:Info = {
    id: 2,
    name: "John",
    email: "John@email.com"
  }


  return (
    <div>
      <AdminInfo admin={admin}/>
      <UserInfo user={user}/>
    </div>
  )
}

export default App
