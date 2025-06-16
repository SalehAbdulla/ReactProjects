import { assets } from '../assets/frontend_assets/assets'
import { useState } from 'react';

const Collection = () => {


  const [showFilters, setShowFilters] = useState<boolean>(true);


  return (
    <section className="flex flex-col justify-center">

      <div className="flex gap-3 justify-contenn items-center">
        <p className="text-xl">FILTER</p>
        <img
          onClick={() => setShowFilters(!showFilters)}
          src={assets.dropdown_icon}
          alt="option buttom"
          className={`w-2 h-5 cursor-pointer ${showFilters ? "rotate-90" : "rotate-0"} `}
        />
      </div>

      <div className={`transition-all ${!showFilters ? "hidden" : ""}`}>
        <br />
        <div className="flex flex-col justify-center border-1 border-gray-300 gap-2 p-4 sm:w-1/3 w-full">
          <h3 className="font-semibold">CATEGORY</h3>
          <p className="flex gap-2">
             <input className="w-3" type="checkbox" value={'Men'} /> Men
          </p>

          <p className="flex gap-2">
             <input className="w-3" type="checkbox" value={'Women'} /> Women
          </p>

          <p className="flex gap-2">
             <input className="w-3" type="checkbox" value={'Kids'} /> Kids
          </p>
        </div>

        <br />

        <div className="flex flex-col justify-center border-1 border-gray-300 gap-2 p-4 sm:w-1/3 w-full">
          <h3 className="font-semibold">TYPE</h3>

          <p className="flex gap-2">
             <input className="w-3" type="checkbox" value={'Topwear'} /> Topwear
          </p>

          <p className="flex gap-2">
             <input className="w-3" type="checkbox" value={'Bottomwear'} /> Bottomwear
          </p>

          <p className="flex gap-2">
             <input className="w-3" type="checkbox" value={'Winterwear'} /> Winterwear
          </p>

        </div>

      </div>
    </section>
  )
}

export default Collection
