import "./Navigation.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <input type="text" placeholder="Search For Your Shoe"/>

      <section className="content">
        <FaUser className="nav-icons"/>
        <FaShoppingCart className="nav-icons"/>
        <FaHeart className="nav-icons"/>
      </section>
    </nav>
  );
};

export default Navigation;
