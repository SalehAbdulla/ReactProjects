import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="LOGO" className="w-36" />

      <ul className="hidden sm:flex gap-5">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 hidden h-[1.5px]" />
        </NavLink>

        <NavLink
          to={"/COLLECTION"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 hidden h-[1.5px]" />
        </NavLink>

        <NavLink to={"/ABOUT"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 hidden h-[1.5px]" />
        </NavLink>

        <NavLink to={"/CONTACT"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 hidden h-[1.5px]" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search_icon"
        />

        <div className="group relative">
          
          {/*Clickable icon for dropdown menu */}
          <img
            src={assets.profile_icon}
            alt="profile icon"
            className="w-5 cursor-pointer"
          />

          {/* Dropdown */}
          <div className="hidden group-hover:block absolute dropdown-menu right-0 bg-slate-100 text-gray-700">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
