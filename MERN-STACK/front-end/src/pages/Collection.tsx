import React, { useState, useEffect } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'
import { UseShopContext } from '../context/UseShopContext'
import type { ProductType } from '../context/ShopContext'

const Collection = () => {
  
  const { products, search, showSearch } = UseShopContext()
  const [showFilters, setShowFilters] = useState<boolean>(true)
  const [filterProducts, setFilterProducts] = useState<ProductType[]>([])
  const [priceFilter, setPriceFilter] = useState<string>("relavent")
  {/* */}


  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  // ---- Categories onChange

  const [categories, setCategories] = useState<string[]>([])
  const toggleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    // If value already available, then remove it; otherwise add it.
    setCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item != value)
        : [...prev, value]
    )
  }

  // Types onChange
  const [types, setTypes] = useState<string[]>([])
  const toggleTypesOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  //-------

  // Apply Filter Function

  const applyFilter = () => {
    let productCopy = products.slice()

    if (showSearch && search) {
      productCopy = productCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }


    if (categories.length > 0) {
      productCopy = productCopy.filter((item) =>
        categories.includes(item.category)
      )
    }

    if (types.length > 0) {
      productCopy = productCopy.filter((item) =>
        types.includes(item.subCategory)
      )
    }
    setFilterProducts(productCopy)
  }

  useEffect(() => {
    applyFilter()
  }, [categories, types, search, showSearch])

  // Sort By Price

  const sortByPrice = () => {

    const copyProductsFiltered = filterProducts.slice();

    switch (priceFilter) {
      case 'low-high':
        copyProductsFiltered.sort((a, b) => (a.price - b.price));
        setFilterProducts(copyProductsFiltered);
        break;
      case 'high-low':
        copyProductsFiltered.sort((a, b) => (b.price - a.price));
        setFilterProducts(copyProductsFiltered);
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=> {
    sortByPrice();
  },[priceFilter])



  return (
    <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_3fr] gap-5">
      {/* Aside */}
      <aside>
        <div className="flex items-center gap-2 mt-5">
          <p className="text-xl font-medium">FILTERS</p>
          <img
            onClick={() => setShowFilters(!showFilters)}
            src={assets.dropdown_icon}
            alt="drop down icon"
            className={`w-3 cursor-pointer ${
              !showFilters ? '' : 'rotate-90'
            } mx-2`}
          />
        </div>

        <div className={`${showFilters ? '' : 'hidden'}`}>
          <div className="border p-3 mt-5 flex flex-col gap-1 w-full border-gray-300">
            <p>CATEGORIES</p>
            <label>
              <input
                type="checkbox"
                value="Men"
                onChange={toggleCategoryChange}
              />{' '}
              Men
            </label>
            <label>
              <input
                type="checkbox"
                value="Women"
                onChange={toggleCategoryChange}
              />{' '}
              Women
            </label>
            <label>
              <input
                type="checkbox"
                value="Kids"
                onChange={toggleCategoryChange}
              />{' '}
              Kids
            </label>
          </div>

          <div className="border p-3 mt-5 flex flex-col gap-1 w-full border-gray-300">
            <p>TYPE</p>
            <label>
              <input
                type="checkbox"
                value="Topwear"
                onChange={toggleTypesOnChange}
              />{' '}
              Topwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Bottomwear"
                onChange={toggleTypesOnChange}
              />{' '}
              Bottomwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Winterwear"
                onChange={toggleTypesOnChange}
              />{' '}
              Winterwear
            </label>
          </div>
        </div>
      </aside>

      <div>
        <div className="flex justify-between items-center mt-5">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPriceFilter(event.target.value)}
            className="p-2 border border-gray-300"
          >
            <option value="Relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
          {filterProducts?.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
