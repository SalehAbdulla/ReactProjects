import { assets } from '../assets/frontend_assets/assets'
import { useEffect, useState } from 'react'
import Title from '../components/Title'
import { UseAppContext } from '../context/UseAppContext'
import { type Products } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const Collection = () => {
  const { products } = UseAppContext()
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [filterProducts, setFilterProducts] = useState<Products[]>()

  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  return (
    <section className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-gray-300 px-4 sm:px-10">
      {/* Filters Section */}
      <div className="w-full sm:min-w-[240px] sm:max-w-[280px]">
        {/* Toggle Filter (Mobile) */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 text-lg font-semibold mb-4 sm:hidden"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="dropdown icon"
            className={`h-3 transition-transform ${showFilter ? 'rotate-90' : ''}`}
          />
        </button>

        <div className={`${showFilter ? 'block' : 'hidden'} sm:block space-y-6`}>
          {/* Category Filter */}
          <div className="border border-gray-300 rounded p-4">
            <p className="text-sm font-medium mb-3">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {['Men', 'Women', 'Kids'].map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input type="checkbox" value={category} className="w-4 h-4" />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="border border-gray-300 rounded p-4">
            <p className="text-sm font-medium mb-3">TYPE</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input type="checkbox" value={type} className="w-4 h-4" />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Title text1="ALL" text2="COLLECTION" />
          <select className="border border-gray-300 rounded px-3 py-1 text-sm w-fit">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterProducts?.map(({ _id, name, price, image }) => (
            <ProductCard key={_id} id={_id} name={name} price={price} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection
