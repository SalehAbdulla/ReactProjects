import { useState, useEffect } from "react";

type Product = { category: string };

type FetchResponseType = {
  products: Product[];
};

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponseType = await response.json();
        const uniqueCategory = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategory);
        console.log(uniqueCategory);
      } catch (error) {
        console.log("Error Fetching Product", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-64 h-screen p-5">
      <h1 className="font-bold text-2xl mt-4 mb-10">React Store</h1>

      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search Product"
        />
      </section>

      <div className="flex justify-center items-center">
        <input
          type="text"
          className="border-2 mr-5 px-5 py-3 mb-3 w-full"
          placeholder="Min"
        />
        <input
          type="text"
          className="border-2 mr-5 px-5 py-3 mb-3 w-full"
          placeholder="Max"
        />
      </div>

      {/*Categories Section */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">Categories</h2>

        <section>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2 ">
              <input
                type="radio"
                name="category"
                value={category}
                className="mr-2 w-[16] h-[16]"
              />{" "}
              {category.toUpperCase()}
            </label>
          ))}
        </section>
      </div>

      {/* KeyWords Section */}
      <div className="mb-5 mt-4">
        <h2 className="text-xl font-semibold mb-3">KeyWords</h2>

        <div>
          {keywords.map((keyword, index) => (
            <button
              key={index}
              className="block mb-2 px-4 py-2 w-full border rounded hover:bg-gray-200 "
            >
              {" "}
              {keyword.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full mb-[4rem] bg-black text-white rounded mt-5 ">
        reset filter
      </button>
    </div>
  );
};

export default SideBar;
