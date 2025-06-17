import { assets } from '../assets/frontend_assets/assets'
import { useEffect, useState } from 'react'
import Title from '../components/Title'
import type { Products } from '../context/AppContext'
import { UseAppContext } from '../context/UseAppContext'
import ProductCard from '../components/ProductCard'

const Collection = () => {
	
  const { products } = UseAppContext()
  const [showFilter, setShowFilter] = useState<boolean>(true)
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  {
    /* Categories Getter */
  }
  const [categories, setCategories] = useState<string[]>([])
  const toggleCategoryOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    setCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  useEffect(() => {
    console.log(categories)
  }, [categories])

  {
    /* SubCategories Getter */
  }
  const [subCategories, setSubCategories] = useState<string[]>([])
  const toggleSubCategoryOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    setSubCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  useEffect(() => {
    console.log(subCategories)
  }, [subCategories])

  {
    /* Apply Filter */
  }


  const applyFilter = () => {
    let filteredProductsCopied = products.slice()

		if (categories.length > 0) {
			filteredProductsCopied = filteredProductsCopied.filter((item) => categories.includes(item.category));
		}

		if (subCategories.length > 0) {
			filteredProductsCopied = filteredProductsCopied.filter((item) => subCategories.includes(item.subCategory));
		}

		setFilteredProducts(filteredProductsCopied);
  }

  useEffect(() => {
    applyFilter()
  }, [categories, subCategories])



	{
		/* Apply Sorting */
	}

	const [sort, setSort] = useState('Relavent');

	const applySorting = () => {

		const copyFilteredProducts = filteredProducts.slice();

		switch (sort) {

			case 'High-low':
				setFilteredProducts(copyFilteredProducts.sort((a, b) => (b.price - a.price)));
				break;
			case 'Low-high':
				setFilteredProducts(copyFilteredProducts.sort((a, b) => (a.price - b.price)));
			break;
		
			default:
				applyFilter();
				break;
		}

	}

	useEffect(()=> {
		applySorting();
		console.log(sort);
	},[sort])





  return (
    <>
      <section className="flex flex-col sm:flex-row gap-10">
        <aside className="mt-10">
          <div className="flex gap-3">
            <p className="text-xl font-medium flex items-center pr-3">FILTER</p>
            <img
              src={assets.dropdown_icon}
              alt="Dropdown icon"
              className={`w-3 h-5 mt-1 cursor-pointer ${
                showFilter && 'rotate-90'
              } ${'m-1'}`}
              onClick={() => setShowFilter(!showFilter)}
            />
          </div>

          <div className={`transition ${showFilter ? '' : 'hidden'}`}>
            <div className="flex flex-col gap-2 mt-5 border-2 p-5 w-full border-gray-300">
              <p className="w-40">CATEGORIES</p>
              <p>
                <input
                  onChange={toggleCategoryOnChange}
                  className="mr-3"
                  type="checkbox"
                  value={'Men'}
                />{' '}
                Men{' '}
              </p>
              <p>
                <input
                  onChange={toggleCategoryOnChange}
                  className="mr-3"
                  type="checkbox"
                  value={'Women'}
                />{' '}
                Women{' '}
              </p>
              <p>
                <input
                  onChange={toggleCategoryOnChange}
                  className="mr-3"
                  type="checkbox"
                  value={'Kids'}
                />{' '}
                Kids{' '}
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-5 border-2 py-10 px-7 w-[100%] border-gray-300">
              <p>CATEGORIES</p>
              <p>
                <input
                  className="mr-3"
                  onChange={toggleSubCategoryOnChange}
                  type="checkbox"
                  value={'Topwear'}
                />{' '}
                Topwear{' '}
              </p>
              <p>
                <input
                  className="mr-3"
                  onChange={toggleSubCategoryOnChange}
                  type="checkbox"
                  value={'Bottomwear'}
                />{' '}
                Bottomwear{' '}
              </p>
              <p>
                <input
                  className="mr-3"
                  onChange={toggleSubCategoryOnChange}
                  type="checkbox"
                  value={'Winterwear'}
                />{' '}
                Winterwear{' '}
              </p>
            </div>
          </div>
        </aside>

        <main>
          <header className="flex gap-3 justify-between">
            <div>
              <Title text1="ALL" text2="COLLECTION" />
            </div>

            <select onChange={(event:React.ChangeEvent<HTMLSelectElement>) => setSort(event.target.value)} className="border-1 border-gray-300 p-10 mt-5">
              <option  value="Relavent">Relavent</option>
              <option  value="Low-high">Sort by: Low-high</option>
              <option value="High-low">Sort by: High-low</option>
            </select>
          </header>

          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-5">
            {filteredProducts.map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </section>
        </main>
      </section>
    </>
  )
}

export default Collection
