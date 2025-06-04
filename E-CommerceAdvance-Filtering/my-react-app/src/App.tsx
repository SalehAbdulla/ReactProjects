import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Router>
      <SideBar />
    </Router>
  );
};

export default App;
