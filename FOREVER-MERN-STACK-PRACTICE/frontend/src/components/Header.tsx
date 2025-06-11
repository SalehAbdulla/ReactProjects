import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-5 border-b pb-3 border-[#cdccce]">
      <NavLink to="/" className="left">
        <img src={assets.logo} alt="logo" className="w-36" />
      </NavLink>

      <div className="center">
        <ul className="lg-flex md:flex gap-5 font-medium">
          <NavLink to="/" className="flex flex-col items-center ">
            <p>HOME</p>
            <hr className="w-2/4 h-[1.5px] hidden" />
          </NavLink>

          <NavLink to="/COLLECTION" className="flex flex-col items-center ">
            <p>COLLECTION</p>
            <hr className="w-2/4 h-[1.5px] hidden" />
          </NavLink>

          <NavLink to="/ABOUT" className="flex flex-col items-center ">
            <p>ABOUT</p>
            <hr className="w-2/4 h-[1.5px] hidden" />
          </NavLink>

          <NavLink to="/CONTACT" className="flex flex-col items-center">
            <p>CONTACT</p>
            <hr className="w-2/4 h-[1.5px] hidden" />
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search icon"
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 ml-5 cursor-pointer"
            alt="profile icon"
          />

          <div className="hidden group-hover:block absolute right-0 bg-slate-100 text-gray-700 rounded-xl">
            <div className="flex flex-col gap-1 w-36 py-3 px-5">
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

export default Header;
