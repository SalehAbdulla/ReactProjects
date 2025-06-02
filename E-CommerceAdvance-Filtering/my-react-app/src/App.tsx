import "./index.css";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommendation from "./Recommendation/Recommendation";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";

// Database
import products from "./db/products";

// Assuming a product type — adjust as needed
type Product = {
  id: number;
  title: string;
  category: string;
  color: string;
  company: string;
  newPrice: number;
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  // Input filter handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Radio filter handler
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // Button filter handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory((event.target as HTMLButtonElement).value);
  };

  // Main filtering logic
  const getFilteredProducts = (
    products: Product[],
    selected: string | null,
    query: string
  ): Product[] => {
    let filtered = products;

    // Filter by search query
    if (query) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected category
    if (selected) {
      filtered = filtered.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice.toString() === selected ||
          title === selected
      );
    }

    return filtered.map(({img, title, star, reviews, prevPrice ,newPrice}) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  };

  const finalFilteredProducts = getFilteredProducts(products, selectedCategory, query);

  return (
    <div>
      <SideBar onCategoryChange={handleCategoryChange} />
      <Navigation onSearch={handleInputChange} />
      <Recommendation onClick={handleClick} />
      <Products products={finalFilteredProducts} />
    </div>
  );
};

export default App;
