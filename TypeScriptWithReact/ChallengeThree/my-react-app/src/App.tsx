import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <UserProfile />
      <hr />
      <ToDoList/>
    </div>
  );
};

export default App;
