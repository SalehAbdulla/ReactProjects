import { type AdminInfoList } from "../types";

type AdminType = {
  admin: AdminInfoList;
}

const AdminInfo: React.FC<AdminType> = ({admin}: AdminType) => {
  return (
    <div>
      <h1>{admin.id}</h1>
      <h1>{admin.name}</h1>
      <h1>{admin.email}</h1>
      <h1>{admin.role}</h1>
      <h1>{admin.lastDateLogIn.toLocaleString()}</h1>
    </div>
  )
}

export default AdminInfo
