import { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets"
import Title from "../components/Title";
import { UseAppContext } from "../context/UseAppContext";
import ProductCard from "../components/ProductCard";
import type { Products } from "../context/AppContext";

const Collection = () => {

  const { products } = UseAppContext();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products])

  {/* Filter By Categories & SubCategories */ }

  const [getUserCategorySelection, setGetUserCategorySelection] = useState<string[]>([]);
  const toggleCategoryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGetUserCategorySelection(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value])
  }


  const [getUserSubCategorySelection, setGetUserSubCategorySelection] = useState<string[]>([]);
  const toggleSubCategoryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGetUserSubCategorySelection(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  }



  {/* Apply Filter */ }

  const applyFilter = () => {
    let copiedProducts = products.slice();  // Always Start with the original Products

    if (getUserCategorySelection.length > 0) {
      copiedProducts = copiedProducts.filter(item => getUserCategorySelection.includes(item.category));
    }

    if (getUserSubCategorySelection.length > 0) {
      copiedProducts = copiedProducts.filter(item => getUserSubCategorySelection.includes(item.subCategory));
    }

    setFilteredProducts(copiedProducts);
  }


  useEffect(() => {
    applyFilter();
  }, [getUserCategorySelection, getUserSubCategorySelection])


  {/* Sort By Price */ }

  const [sortbyPrice, setSortByPrice] = useState<string>("Relative");
  const toggleSortByPrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortByPrice(event.target.value);
  }

  const applySort = () => {

    const copiedSortedProducts = filteredProducts.slice();

    switch (sortbyPrice) {
      case "Low-high":
        setFilteredProducts(copiedSortedProducts.sort((a, b) => a.price - b.price));
        break;
      case "High-low":
        setFilteredProducts(copiedSortedProducts.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applySort();
  }, [sortbyPrice])


  return (
    <section className="flex justify-center gap-8 sm:flex-row flex-col">

      <aside className="sm:h-screen mt-15">
        <div className="flex gap-3 items-center justify-between">

          <p className="font-medium text-2xl">FILTER</p>
          <img onClick={() => setShowFilter(!showFilter)} className={`w-5 h-8 cursor-pointer ${!showFilter ? "" : "rotate-90"}`} src={assets.dropdown_icon} alt="dropdown icon" />
        </div>

        <section className={`${showFilter ? "" : "hidden"} transition-all`}>

          <div className="flex flex-col justify-center gap-4 border rounded-xl border-gray-300 w-full py-4 mt-5">
            <h3 className="text-left pl-4 font-medium">CATEGORIES</h3>
            <p className="px-4 flex gap-2"><input onChange={toggleCategoryOnChange} type="checkbox" value="Men" /> Men</p>
            <p className="px-4 flex gap-2"><input onChange={toggleCategoryOnChange} type="checkbox" value="Women" /> Women</p>
            <p className="px-4 flex gap-2"><input onChange={toggleCategoryOnChange} type="checkbox" value="Kids" /> Kids</p>
          </div>


          <div className="flex flex-col justify-center gap-4 border rounded-xl border-gray-300 w-full py-4 mt-5">
            <h3 className="text-left pl-4 font-medium">TYPE</h3>
            <p className="px-4 flex gap-2"><input onChange={toggleSubCategoryOnChange} type="checkbox" value="Topwear" /> Topwear</p>
            <p className="px-4 flex gap-2"><input onChange={toggleSubCategoryOnChange} type="checkbox" value="Bottomwear" /> Bottomwear</p>
            <p className="px-4 flex gap-2"><input onChange={toggleSubCategoryOnChange} type="checkbox" value="Winterwear" /> Winterwear</p>
          </div>

        </section>

      </aside>


      <main>
        <div className="flex justify-between items-center mt-5">
          <div>
            <Title text1="ALL" text2="COLLECTIONS" />
          </div>

          <select onChange={toggleSortByPrice} className="border-1 border-gray-400 rounded-xl p-3 mt-6">
            <option value="Relative"  >Sort by: Price: Relative</option>
            <option value="Low-high"  >Sort by: Low-high</option>
            <option value="High-low"  >Sort by: High-low</option>
          </select>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-5">
          {
            filteredProducts.map(({ _id, name, image, price }) => <ProductCard key={_id} id={_id} name={name} image={image} price={price} />
            )
          }
        </div>

      </main>


    </section>
  )
}

export default Collection
