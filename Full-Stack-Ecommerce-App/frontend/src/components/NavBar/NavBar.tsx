import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <img src={assets.logo} alt="LOGO" className="w-36" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] gap-1 bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/COLLECTION" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] gap-1 bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/ABOUT" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] gap-1 bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/CONTACT" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] gap-1 bg-gray-700 hidden" />
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
