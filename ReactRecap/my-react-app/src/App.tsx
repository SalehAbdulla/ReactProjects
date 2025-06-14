import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const notify = () => toast("Wow so easy!");
  
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default App;
