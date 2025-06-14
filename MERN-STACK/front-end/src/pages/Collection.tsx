import { assets } from "../assets/frontend_assets/assets";
import { UseShopContext } from "../context/UseShopContext";
import { useState } from "react";

const Collection = () => {
	const { products } = UseShopContext();
	const [showFilter, setShowFilter] = useState<boolean>(false);
  
	return (
		<section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-400">
			{/* Filter Options */}
			{/* min-w-60 means I will never be smaller than 240px */}
			<div className="min-w-60">
				<p onClick={()=> setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
                    <img src={assets.dropdown_icon} alt="dropdown icon" className={`h-3 sm-hidden ${showFilter ? 'rotate-90' : ''}`}/>
                </p>
				{/* Category Filter */}
				<div
					className={`border border-gray-300 pl-5 mt-6 ${
						showFilter ? "" : "hidden"
					} sm:block`}
				>
					<p className="m-3 text-sm font-medium">CATEGORIES</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray my-5">
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Men"} /> Men
						</p>

						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Women"} /> Women
						</p>

						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Kids"} /> Kids
						</p>
					</div>
				</div>

				{/* SubCategory Filter */}
				<div
					className={`border border-gray-300 pl-5 mt-6 ${
						showFilter ? "" : "hidden"
					} sm:block`}
				>
					<p className="my-3 text-sm font-medium">TYPE</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray my-5">
						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Topwear"} /> Topwear
						</p>

						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Bottomwear"} /> Bottomwear
						</p>

						<p className="flex gap-2">
							<input type="checkbox" className="w-3" value={"Winterwear"} /> Winterwear
						</p>
					</div>
				</div>
			</div>

		</section>
	);
};

export default Collection;
