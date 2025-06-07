import { useState } from "react";

type ToDo = {
  id: number;
  task: string;
  completed: boolean;
};

const ToDoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [todoInput, setToDoInput] = useState<string>("");

  const addToDo = (task: string) => {
    const newToDo: ToDo = {
      id: todos.length + 1,
      task: task,
      completed: false,
    };
    setTodos((preVal) => [...preVal, newToDo]);
    setToDoInput("");
  };

  return (
    <div>
      <h2>To Do List</h2>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setToDoInput(event.currentTarget.value);
        }}
        type="text"
        value={todoInput}
      />
      <button onClick={() => addToDo(todoInput)}>Add To Do</button>
      {todos.map((element) => (
        <li key={element.id}>
          {element.task} | Completed: {JSON.stringify(element.completed)}
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
