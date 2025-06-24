import { useParams } from "react-router-dom"
import { UseAppContext } from "../context/UseAppContext";
import { useEffect, useState } from "react";
import type { Products } from "../context/AppContext";
import { assets } from "../assets/frontend_assets/assets";

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = UseAppContext();
  const [productData, setProductData] = useState<Products>();
  const [mainImage, setMainImage] = useState('');
  const [size, setSize] = useState('');

  const fetchData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setMainImage(product.image[0]);
    }
  }

  useEffect(() => {
    fetchData();
  }, [productId])


  return productData ? (
    <div className="transition-opacity duration-500 opacity-100 ease-in border-t-1 pt-3"> {/* this div for theme */}
      <main className="flex sm:flex-row flex-col gap-12"> {/* Outer Div sm:flex-row */}

        <section className="flex-1 flex flex-col-reverse gap-3 sm:flex-row"> {/* Inner Div flex-1 flex-col-reverse */}

          <section className="flex flex-row sm:flex-col overflow-x-auto overflow-y-scroll sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={() => setMainImage(item)} key={index} src={item} alt="" className="mb-3 sm:w-full w-[24%] cursor-pointer" />
              ))
            }
          </section>

          <section className="flex-1 m-auto">
            <img src={mainImage} alt="" className="w-full h-auto" />
          </section>

        </section>


        <section className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>

          <div className="inline-flex">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
          </div>

          <div className="inline-flex ml-2">
            <p>(122)</p>
          </div>
          
          <div>
            <p className="font-medium">{currency} {productData.price}</p>
            <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          </div>
          
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {
                  productData.sizes.map((item, index) => (
                      <button onClick={()=> setSize(item)} key={index} className={`p-1 cursor-pointer border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
                  ))
                }
              </div>
            </div>


        </section>


      </main>

    </div>
  ) : <div className="opacity-0"></div>

}

export default Product
