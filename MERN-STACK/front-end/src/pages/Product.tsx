import { useParams } from "react-router-dom"
import { UseShopContext } from "../context/UseShopContext";
import { useEffect, useState } from "react";
import type { ProductType } from "../context/ShopContext";

const Product = () => {

  const { productId } = useParams();
  const { products } = UseShopContext();
  const [productPage, setProductPage] = useState<ProductType>();
  const [mainImage, setMainImage] = useState('');

  const fetchData = async () => {

    const foundProduct = products.filter((item) => (
      item._id === productId
    ))
    const product = foundProduct[0];
    setProductPage(product);
    setMainImage(product.image[0]);
  }

  useEffect(() => {
    fetchData();
  }, [productId])


  return productPage ? (
    <div className="border-t-1 pt-10 border-gray-400 transition-all ease-in duration-500 opacity-100">

      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">

        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">

          <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productPage.image.map((item, index) => (
                <img key={index} src={item} alt="" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"/>
              ))
            }
          </div>

          {/* <img src={mainImage} alt="" className="flex flex-shrink-0"/> */}

        </div>

      </div>

    </div>
  ) : <div className="opacity-0" ></div>
}

export default Product
