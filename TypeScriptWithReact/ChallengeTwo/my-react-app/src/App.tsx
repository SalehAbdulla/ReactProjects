import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>User Info 👇</h1>
      <UserInfo
        username="Alex"
        email="Alex@gmail.com"
        age={20}
        location={["Earth", "USA"]}
      />

      <h1>Admin Info 👇</h1>
      <AdminInfo
        username="Alex"
        email="Alex@gmail.com"
        age={20}
        location={["Mars", "Known "]}
        admin={true}
      />
    </div>
  );
};

export default App;
