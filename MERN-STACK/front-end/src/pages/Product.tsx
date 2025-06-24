import { useParams } from "react-router-dom";
import { UseShopContext } from "../context/UseShopContext"
import type { ProductType } from "../context/ShopContext";
import { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const Product = () => {

  const { products, currency } = UseShopContext();
  const { productId } = useParams();
  const [productData, setProductData] = useState<ProductType>();
  const [mainImage, setMainImage] = useState('');
  const [size, setSize] = useState('');

  const fetchData = async () => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setMainImage(product.image[0]);
    }
  }

  useEffect(() => {
    fetchData();
  }, [productId])


  return productData ? (
    <div className="border-gray-400 pt-4 transition-opacity opacity-100 ease-in duration-500"> {/* Theme div */}

      <main className="flex flex-col sm:flex-row gap-12"> {/* Outer Div */}
        <section className="flex-1 flex sm:flex-row flex-col-reverse gap-3"> {/* Inner div */}

          <section className="flex sm:flex-col flex-row gap-3 overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={()=> setMainImage(item)} key={index} src={item} alt="item" className="w-[24%] sm:w-full cursor-pointer flex-shrink-1" />
              ))
            }
          </section>
          <section className="w-full sm:w-[80%]">
            <img src={mainImage} alt="" className="w-full h-auto" />
          </section>
        </section>


        <section className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className="inline-flex mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
          </div>
          
          <div className="inline-flex ml-3">
            <p>(122)</p>
          </div>
          
          <div>
            <p className="font-medium" >{currency} {productData.price}</p>
          </div>

          <div className="mt-5">
            <p className="text-gray-400 md:w-4/5">{productData.description}</p>
          </div>

          <div className="mt-5">

            <p>Select Size </p>
            <div className="flex gap-3">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`border-1 bg-gray-100 px-4 py-2 mt-2 border-gray-500 ${size === item ? "border-orange-500" : ""}`} key={index}>{item}</button>
                ))
              }
            </div>

          </div>


              <div className="mt-5">
                <button className="bg-black text-white px-8 py-3 active:bg-gray-700">ADD TO CART</button>
              </div>

              <hr className="border-t-1 w-3/4 mt-5 border-gray-300" />


        </section>


      </main>

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
