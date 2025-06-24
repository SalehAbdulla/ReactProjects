import { useParams } from "react-router-dom";
import { UseShopContext } from "../context/UseShopContext"
import { useEffect, useState } from "react"
import type { ProductType } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

  const { products, currency } = UseShopContext();
  const { productId } = useParams();
  const [productData, setProductData] = useState<ProductType>();
  const [mainImage, setMainImage] = useState('');
  const [size, setSize] = useState('');

  const fetchData = async () => {
    const getProduct = products.find((item) => item._id === productId);
    if (getProduct) {
      setProductData(getProduct);
      setMainImage(getProduct.image[0]);
    }
  }

  useEffect(() => {
    fetchData();
  }, [productId])


  return productData ? (
    <div className="transition-opacity duration-500 opacity-100 ease-in"> {/* Theme Div */}

      <main className="flex sm:flex-row flex-col gap-12"> {/* Outer Box */}

        <section className="flex-1 flex sm:flex-row flex-col-reverse gap-3"> {/* Inner Box */}

          <div className="flex sm:flex-col flex-row sm:w-[18.7%] w-full gap-2 sm:overflow-y-scroll">
            {
              productData?.image.map((item, index) => (
                <img onClick={() => setMainImage(item)} key={index} src={item} alt="" className="cursor-pointer w-[24%] sm:w-full" />
              ))
            }
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={mainImage} alt="" className="w-full h-auto" />
          </div>

        </section>



        <section className="flex-1">

          <h1 className="font-medium text-2xl">{productData.name}</h1>

          <div className="inline-flex mt-3 gap-0.5">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
          </div>

          <div className="inline-flex ml-1">
            <p className="">(122)</p>
          </div>



          <div>
            <p className="font-medium my-5 text-xl">{currency} {productData.price}</p>
          </div>

          <div className="my-5">
            <p className="text-sm md:w-3/4 text-gray-500">{productData.description}</p>
          </div>


          <div>
            <p>Select Size</p>
            <div className="flex gap-3 mt-2 ">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} key={index} className={`border px-3 py-2 border-gray-400 cursor-pointer ${item === size ? "border-orange-500" : ""} `}>{item}</button>
                ))
              }
            </div>
          </div>


          <div className="mt-5">
            <button className="bg-black text-white px-5 py-4 hover:bg-gray-700 cursor-pointer">ADD TO CART</button>

            <hr className="mt-5 text-gray-300 w-3/4" />
          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500">100% Original product.</p>
            <p className="text-sm text-gray-500">Cash on delivery is available on this product.</p>
            <p className="text-sm text-gray-500">Easy return and exchange policy within 7 days.</p>
          </div>




        </section>


      </main>


      {/* Description Section */}

      <section className="my-30">
        <div className="flex">
          <p className="px-6 py-4 border-1 border-gray-200 text-xs font-medium">Description</p>
          <p className="px-6 py-4 border-1 border-gray-200 text-xs">Reviews (122)</p>
        </div>

        <div className="border-1 p-6 border-gray-200">
          <p className="text-xs">An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <br />
          <p className="text-xs">E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>



      </section>


      {/* Related Product Section */}
      <section>
        <RelatedProducts category={productData.category} subCategroy={productData.subCategory}/>
      </section>


    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
