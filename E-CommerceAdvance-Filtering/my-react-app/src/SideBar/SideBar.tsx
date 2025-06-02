import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./SideBar.css";

const SideBar = ({onCategoryChange}) => {
  return (
    <div>
      <section className="sidebar">

        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
        
      </section>
    </div>
  )
}

export default SideBar
