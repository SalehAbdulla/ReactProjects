import { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { UseShopContext } from "../context/UseShopContext"
import { useLocation } from "react-router-dom";

const SearchBar = () => {

  const {search, setSearch, showSearch, setShowSearch} = UseShopContext();
  
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(()=> {
    if (location.pathname.includes("COLLECTION")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  },[location.pathname])



  return (showSearch && visible) ? (
    <div className="text-center mb-5">
        <div className="inline-flex justify-center items-center border-1 border-gray-400 rounded-full w-1/2 sm:w-3/4">
          <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Search" className="flex-1 outline-none px-4 py-2 text-sm"/>
          <img src={assets.search_icon} alt="search icon" className="w-4 mr-3" />
        </div>
        <img src={assets.cross_icon} alt="exit search icon" className="w-4 inline ml-4 cursor-pointer" onClick={()=> setShowSearch(!showSearch)}/>
    </div>
  ) : null
}

export default SearchBar