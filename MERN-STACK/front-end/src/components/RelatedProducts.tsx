import { useEffect, useState } from "react";
import { UseShopContext } from "../context/UseShopContext";
import Title from "./Title";
import type { ProductType } from "../context/ShopContext";
import ProductItem from "./ProductItem";

type RelatedProductsType = {
    category: string;
    subCategroy: string;
}

const RelatedProducts = ({ category, subCategroy }: RelatedProductsType) => {


    const { products } = UseShopContext();
    const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);

    const filterProducts = async () => {
        let productsCopy = products.filter((item) => item.category === category);
        productsCopy = productsCopy.filter((item) => item.subCategory === subCategroy);

        if (productsCopy) {
            setRelatedProducts(productsCopy.slice(0, 5));
        }

    }


    useEffect(() => {
        filterProducts();
    }, [products])


    return (
        <section>
            <Title text1="RELATED" text2="PRODUCTS" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-5">
                {
                    relatedProducts.map((item, index)=> (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </section>
    )
}

export default RelatedProducts
