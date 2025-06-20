import { useLocation } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { UseAppContext } from "../context/UseAppContext"
import { useEffect, useState } from "react";

const SearchBar = () => {

  const { showSearch, setShowSearch, search, setSearch } = UseAppContext();
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
    <div className={`text-center mt-5`}>
      <div className="inline-flex justify-between items-center border-2 border-gray-400 rounded-full w-1/2 sm:w-3/4">
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} value={search} type="text" placeholder="Search" className="px-6 py-2 outline-none text-sm w-full" />
        <img src={assets.search_icon} alt="search icon" className="w-4 mr-4" />
      </div>

      <img src={assets.cross_icon} alt="exit search icon" className="inline ml-4 w-4 cursor-pointer" onClick={() => setShowSearch(!showSearch)} />

    </div>
  ) : null
}

export default SearchBar
