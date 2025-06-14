import { UseAppContext } from "../context/UseAppContext";
import Title from "./Title";
import { useEffect, useState } from "react";
import { type Products } from "../context/AppContext";
import ProductCard from "./ProductCard";
const BestSellers = () => {

    const {products} = UseAppContext();
    const [bestSellerProducts, setBestSellerProducts] = useState<Products[]>([]);

    useEffect(()=> {
        const bestSellerProducts = products.filter((product) => product.bestseller);
        setBestSellerProducts(bestSellerProducts);
    },[products])

	return (
		<div className="text-center">
			<Title text1="BEST" text2="SELLER" />
			<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iste culpa
				assumenda molestias, nostrum ab saepe id praesentium quidem vitae.
			</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-7">
                {
                    bestSellerProducts.map((product, index) => (
                        <ProductCard key={index} id={product._id} name={product.name} image={product.image} price={product.price}/>
                    ))
                }
            </div>
		</div>
	);
};

export default BestSellers;
