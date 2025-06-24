import { useEffect, useState } from "react";
import { UseAppContext } from "../context/UseAppContext"
import type { Products } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RelatedProduct";


const Product = () => {

  const { products, currency } = UseAppContext();
  const [productData, setProductData] = useState<Products>();
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState('');
  const [size, setSize] = useState('');

  const fetchData = async () => {
    const product = products.find((item) => item._id === productId)

    if (product) {
      setProductData(product);
      setMainImage(product.image[0])
    }
  }

  useEffect(() => {
    fetchData();
  }, [productId])


  return productData ? (
    <div className="duration-500 transition-opacity opacity-100 ease-in mt-5"> {/* Theme div */}

      {/* Lovely Section */}
      <main className="flex sm:flex-row flex-col gap-12"> {/* Outer Div */}

        <section className="flex-1 flex sm:flex-row flex-col-reverse gap-3"> {/* Inner Section */}
          <div className="flex sm:flex-col flex-row gap-2 w-full sm:w-[18.7%] sm:overflow-y-scroll sm:justify-normal justfiy-between">
            {
              productData?.image.map((item, index) => (
                <img onClick={() => setMainImage(item)} key={index} src={item} alt="" className="sm:w-full flex-shrink-0 w-[24%] cursor-pointer" />
              ))
            }
          </div>

          <div className="w-[80%] sm:w-full ">
            <img src={mainImage} alt="" className="w-full h-auto" />
          </div>
        </section>

        <section className="flex-1"> {/* Inner Section */}
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className=" inline-flex pt-5 gap-0.5">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
          </div>

          <div className="inline-flex ml-2">
            (122)
          </div>


          <div className="">
            <p className="font-medium my-5">{currency} {productData.price}</p>
          </div>

          <div className="">
            <p className="text-gray-500 md:w-4/5">{productData.description}</p>
          </div>


          <div>
            <p className="text-sm pt-5">Select Size</p>
            <div className="flex gap-2 pt-3">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} key={index} className={`border-1 border-gray-400 px-3 py-1 bg-gray-100 cursor-pointer ${item === size ? "border-orange-500" : ""}`}>{item}</button>
                ))
              }
            </div>
          </div>


          <div>
            <button className="text-white bg-black mt-5 py-3 px-6 hover:bg-gray-700 cursor-pointer">ADD TO CART</button>
          </div>

          <div className="my-5">
            <hr className="w-3/4 text-gray-300" />
          </div>

          <div>
            <p className="text-sm text-gray-500">100% Original product.</p>
            <p className="text-sm text-gray-500">Cash on delivery is available on this product.</p>
            <p className="text-sm text-gray-500">Easy return and exchange policy within 7 days.</p>
          </div>

        </section>


      </main>


      {/* Description Under The Product */}

      <section className="mt-30">
        <div className="flex">
          <p className="border-1 px-5 py-3 border-gray-400 font-medium text-sm">Description</p>
          <p className="border-1 px-5 py-3 border-gray-300 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col justify-center items-cetner border-1 border-gray-300 text-sm p-5">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <br />
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </div>
      </section>


      <section> {/* RELATED PRODUCTS */}
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </section>


    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
