import { type AdminInfoList } from "./types";

type AdminShape = {
  admin: AdminInfoList;
}


const AdminInfo: React.FC<AdminShape> = ({admin}: AdminShape) => {
  return (
    <div>
      <h1>{admin.name}</h1>
      <h1>{admin.email}</h1>
      <h1>{admin.role}</h1>
      <h1>{admin.lastLogin.toLocaleString()}</h1>
    </div>
  )
}

export default AdminInfo
