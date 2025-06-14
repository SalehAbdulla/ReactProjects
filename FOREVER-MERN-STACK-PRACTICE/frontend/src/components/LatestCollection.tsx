import { UseAppContext } from "../context/UseAppContext";
import ProductCard from "./ProductCard";
import Title from "./Title";
import { type Products } from "../context/AppContext";
import { useEffect, useState } from "react";

const LatestCollection = () => {
	const { products } = UseAppContext();
	const [topProducts, setTopProducts] = useState<Products[]>([]);

	useEffect(() => {
		setTopProducts(products.slice(0, 10));
	}, []);

	return (
		<div className="text-center text-3xl">
			<Title text1="LATEST" text2="COLLECTION" />
			<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iste culpa
				assumenda molestias, nostrum ab saepe id praesentium quidem vitae.
			</p>

			{/* Rendering Products */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 gap-y-7 mt-10">
        {topProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>

		</div>
	);
};

export default LatestCollection;
