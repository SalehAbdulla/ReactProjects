import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

const Navbar = () => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<header className="flex justify-between p-5">
			<div>
				<NavLink to="/">
					<img src={assets.logo} alt="logo" className="w-36" />
				</NavLink>
			</div>

			<div className="sm:flex sm:text-sm md:text-[16px] gap-4 font-medium hidden items-center justify-center">
				<NavLink to="/" className="flex flex-col gap-1 items-center">
					<p>HOME</p>
					<hr className="w-2/4 hidden" />
				</NavLink>

				<NavLink to="/COLLECTION" className="flex flex-col gap-1 items-center">
					<p>COLLECTION</p>
					<hr className="w-2/4 hidden" />
				</NavLink>

				<NavLink to="/ABOUT" className="flex flex-col gap-1 items-center">
					<p>ABOUT</p>
					<hr className="w-2/4 hidden" />
				</NavLink>

				<NavLink to="/CONTACT" className="flex flex-col gap-1 items-center">
					<p>CONTACT</p>
					<hr className="w-2/4 hidden" />
				</NavLink>
			</div>

			<div className="flex gap-4 items-center justify-center">
				<img src={assets.search_icon} alt="search icon" className="w-5  cursor-pointer" />
				<div className="group relative">
					<img
						src={assets.profile_icon}
						alt="search icon"
						className="w-5  cursor-pointer"
					/>
					<div className="absolute hidden group-hover:flex flex-col right-0 bg-slate-50 text-gray-500 w-36 px-3 py-3 rounded-2xl ">
						<p className="cursor-pointer hover:text-black">My Profile</p>
						<p className="cursor-pointer hover:text-black">Orders</p>
						<p className="cursor-pointer hover:text-black">Logout</p>
					</div>
				</div>
				<div className="relative">
					<img src={assets.cart_icon} alt="search icon" className="w-5 cursor-pointer" />
					<div className="absolute bg-black rounded-full w-4 h-4 right-[-5px] bottom-[-7px] text-white text-[9px] flex items-center justify-center p-2 leading-0">
						<p>10</p>
					</div>
				</div>

				<div>
					<img onClick={()=> setVisible(!visible)} src={assets.menu_icon} alt="menu icon" className="w-5 sm:hidden block cursor-pointer" />
					<div
						className={`absolute right-0 top-0 bottom-0 overflow-hidden transition-all ${visible ? "w-full" : "w-0" } bg-white`}
					>
						<div onClick={()=> setVisible(!visible)} className="flex items-center font-semibold cursor-pointer">
							<img
								src={assets.dropdown_icon}
								alt="dropdown icon"
								className="flex m-5 rotate-180 w-4"
							/>
							<p>Back</p>
						</div>

						<div className="flex flex-col side-menu">
							<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/">HOME</NavLink>
							<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/COLLECTION">COLLECTION</NavLink>
							<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/ABOUT">ABOUT</NavLink>
							<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/CONTACT">CONTACT</NavLink>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
