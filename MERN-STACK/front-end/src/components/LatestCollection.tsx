import { UseShopContext } from "../context/UseShopContext";
import Title from "./Title";
import { useEffect, useState } from "react";
import { type ProductType } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
	const { products } = UseShopContext();
	const [latestProduct, setLatestProduct] = useState<ProductType[]>([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0, 10));
    },[])


	return (
		<div className="text-center pt-10 text-3xl">
			<Title text1="LATEST" text2="COLLECTION" />
			<p className="text-gray-500 text-xs sm:text-sm md:text-base">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente cum dolorem
				sint quod inventore doloribus! Veniam excepturi quasi laborum?
			</p>

				{/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-10">
				{
					latestProduct.map((product, index) => (
						<ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price} />
					))
				}
            </div>
		</div>
	);
};

export default LatestCollection;
