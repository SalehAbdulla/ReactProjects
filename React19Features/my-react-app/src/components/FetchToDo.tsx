import { useState, useEffect } from "react";

interface Todo {
  title: string;
}

const FetchToDo = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        if (!response.ok) throw new Error("Error Fetching Todos");
        const data: Todo = await response.json();
        setTodo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <div>
      <h1>{todo?.title}</h1>
    </div>
  );
};

export default FetchToDo;
