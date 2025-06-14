import { UseShopContext } from "../context/UseShopContext";
import { type ProductType } from "../context/ShopContext";
import { useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
	const { products } = UseShopContext();
	const [bestSeller, setBestSeller] = useState<ProductType[]>([]);

	useEffect(() => {
		const bestProducts = products.filter((product) => product.bestseller);
		setBestSeller(bestProducts); // or .slice(0, 5)
	}, [products]);

	return (
		<div className="my-10">
			<div className="text-center text-3xl">
				<Title text1="BEST" text2="SELLERS" />
				<p className="w-3/4 m-auto text-sm md:text-base text-gray-600">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto incidunt,
					dignissimos eius quia impedit atque, repellat, quibusdam deserunt tenetur qui
					libero recusandae quae quos ab quidem omnis! Quisquam, mollitia magni!
				</p>
			</div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 pt-10">
                {
                    bestSeller.map((product, index) => (
                        <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price}  />
                    ))
                }
            </div>


		</div>
	);
};

export default BestSeller;
