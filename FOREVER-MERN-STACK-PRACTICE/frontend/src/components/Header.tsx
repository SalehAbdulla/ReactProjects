import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

const Navbar = () => {

	const [visible, setVisible] = useState<boolean>(false);
	const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

	return (
		<header className="flex justify-between mt-3 items-center py-3">
			<div>
				<NavLink to="/" className="flex flex-col items-center">
					<img src={assets.logo} alt="logo" className="w-36" />
				</NavLink>
			</div>

			<div className="hidden md:flex gap-4 font-medium">
				<NavLink to="/" className="flex flex-col gap-1 items-center">
					<p>HOME</p>
					<hr className="hidden w-2/4" />
				</NavLink>

				<NavLink
					to="/COLLECTION"
					className="flex flex-col gap-1 items-center"
				>
					<p>COLLECTION</p>
					<hr className="hidden w-2/4" />
				</NavLink>

				<NavLink
					to="/ABOUT"
					className="flex flex-col gap-1 items-center"
				>
					<p>ABOUT</p>
					<hr className="hidden w-2/4" />
				</NavLink>

				<NavLink
					to="/CONTACT"
					className="flex flex-col gap-1 items-center"
				>
					<p>CONTACT</p>
					<hr className="hidden w-2/4" />
				</NavLink>
			</div>

			<div className="flex gap-4">
				<img
					src={assets.search_icon}
					alt="search icon"
					className="w-5 cursor-pointer"
				/>
				
				<div className="group relative">
					<img
						onClick={()=> setShowProfileMenu(!showProfileMenu)}
						src={assets.profile_icon}
						alt="profile icon"
						className="w-5 cursor-pointer"
					/>
					<div className={`${showProfileMenu ? "block" : "hidden"} group-hover:flex absolute right-0 rounded-xl w-36 h-27 bg-slate-100 text-gray-700 flex-col px-4 pt-2`}>
						<p className="mt-1 hover:text-black cursor-pointer">
							My Profile
						</p>
						<p className="mt-1 hover:text-black cursor-pointer">
							Orders
						</p>
						<p className="mt-1 hover:text-black cursor-pointer">
							Log out
						</p>
					</div>
				</div>
				<div className="relative">
					<img
						src={assets.cart_icon}
						alt="cart icon"
						className="w-5 cursor-pointer"
					/>
					<div className="absolute cursor-pointer aspect-square bg-black w-4 h-4 text-[9px] p-2.4 rounded-full text-white flex items-center justify-center leading-4 left-2 top-3">
						10
					</div>
				</div>

				<img
					onClick={() => setVisible(!visible)}
					src={assets.menu_icon}
					className="lg:hidden md:hidden sm:flex w-5 cursor-pointer"
					alt="menu_icon"
				/>
				<div
					className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden ${
						visible ? "w-full" : "w-0"
					} transition-all`}
				>
					<div
						onClick={() => setVisible(!visible)}
						className="flex gap-1 items-center cursor-pointer p-2 m-4"
					>
						<img
							src={assets.dropdown_icon}
							alt="dropdown icon"
							className="w-3 rotate-180 mr-2"
						/>
						<p className="font-medium">Back</p>
					</div>

					<div className="flex flex-col side-menu relative z-10">
						<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/">HOME</NavLink>
						<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/COLLECTION">COLLECTION</NavLink>
						<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/ABOUT">ABOUT</NavLink>
						<NavLink onClick={()=> setVisible(!visible)} className="border border-gray-400 p-4 m-1 mx-4 rounded-xl flex hover:bg-amber-100 " to="/CONTACT">CONTACT</NavLink>
					</div>

				</div>
			</div>
		</header>
	);
};

export default Navbar;
