import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header />
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </div>
  );
};

export default App;
