import { useState, useEffect } from "react";

type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UserList = () => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposne = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!Response) throw new Error("Response was not ok!");

        const result = await resposne.json();
        setUsers(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An Error Occured");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{`Error: ${error}`}</h1>;

  return (
    <table className="m-20">
      <thead>
        <tr>
          <th className="pr-2">id</th>
          <th className="pr-2">name</th>
          <th className="pr-2">username</th>
          <th className="pr-2">email</th>
          <th className="pr-2">phone</th>
        </tr>
      </thead>

      <tbody className="">
        {users.map((user, index) => (
          <tr key={index}>
            <td className="pr-9">{user.id}</td>
            <td className="pr-9">{user.name}</td>
            <td className="pr-9">{user.username}</td>
            <td className="pr-9">{user.email}</td>
            <td className="pr-9">{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
