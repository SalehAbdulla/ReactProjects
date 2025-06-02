import "./Products.css";
import { FaShoppingBag } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

const Products = () => {
  return (
    <section className="card-container">

      <section className="card">
        <img
          className="card-img"
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Shoe Pic"
        />
        <section className="card-details">

          <h3 className="card-title">Shoe</h3>

          <section className="card-reviews">
            <IoStarSharp className="ratings-star"/>
            <IoStarSharp className="ratings-star"/>
            <IoStarSharp className="ratings-star"/>
            <IoStarSharp className="ratings-star"/>
            <span className="total-reviews">4</span>
          </section>

          <section className="card-price">

            <div className="price">
              <del>$300</del> 200
            </div>

            <section className="bag">
              <FaShoppingBag className="bag-icon"/>
            </section>

          </section>
        </section>
      </section>
    </section>
  );
};

export default Products;
