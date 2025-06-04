import { useState, useEffect } from "react";

type Product = {category: string;}

type FetchResponseType = {
  products: Product[];
}


const SideBar = () => {
  // Categories data is set by an API
  const [categories, setCategories] = useState<string[]>([]);
  // We don't need setFunction here
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(()=> {

    const fetchData = async ()=>{

      try {
        const response = await fetch("https://dummyjson.com/products");
        const data:FetchResponseType = await response.json();
        const uniqueCategory = Array.from(new Set(data.products.map((product) => product.category)));
        setCategories(uniqueCategory);
        console.log(uniqueCategory);
      } catch (error) {
        console.log("Error Fetching Product", error);
      }
    }

    fetchData();

  }, []);



  return <div className="w-64 h-screen p-5">
    <h1 className="font-bold text-2xl mt-4 mb-10">
      React Store
    </h1>
  </div>;
};

export default SideBar;
