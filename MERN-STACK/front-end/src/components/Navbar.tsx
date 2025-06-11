import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between py-5 font-medium border-b border-[#bbbbbb]">
      <img src={assets.logo} alt="LOGO" className="w-36" />

      <div className="hidden sm:flex gap-5">
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
      </div>

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

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="cart icon" />
          <p className="absolute aspect-square leading-4  right-[-5px] bottom-[-5px] bg-black text-white rounded-full text-[8px] px-1">
            10
          </p>
        </Link>

        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          alt="menu icon"
          className="sm:hidden w-5 cursor-pointer"
        />
      </div>

      {/* Slide Menu for small screen */}
      <div
        className={`bg-white overflow-hidden absolute top-0 right-0 bottom-0 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div
          className="flex flex-col text-gray-600 cursor-pointer gap-3"
          onClick={() => setVisible(!visible)}
        >
          <div className="flex gap-4 mt-3 p-2">
            <img
              src={assets.dropdown_icon}
              alt="dropdown icon"
              className="w-2 rotate-180"
            />
            <p>back</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 m-2">
          <NavLink
            onClick={() => setVisible(!visible)}
            className="p-2 rounded-xs border border-[#bbbbbb] hover:bg-amber-100"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            className="p-2 rounded-xs border border-[#bbbbbb] hover:bg-amber-100"
            to="/COLLECTION"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            className="p-2 rounded-xs border border-[#bbbbbb] hover:bg-amber-100"
            to="/ABOUT"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            className="p-2 rounded-xs border border-[#bbbbbb] hover:bg-amber-100"
            to="/CONTACT"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
