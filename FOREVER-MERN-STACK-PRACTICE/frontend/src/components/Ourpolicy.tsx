import { assets } from "../assets/frontend_assets/assets";

const Ourpolicy = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-4 my-20 justify-around items-center">

			<div className="text-center flex flex-col justify-content items-center">
				<img src={assets.exchange_icon} alt="" className="w-12 pb-8" />
				<p className="sm:text-base text-sm font-medium">Easy Exchange Policy</p>
				<p className="text-gray-400 text-sm">We offer hassle exchange policy</p>
			</div>

			<div className="text-center flex flex-col justify-content items-center">
				<img src={assets.quality_icon} alt="" className="w-12 pb-8" />
				<p className="sm:text-base text-sm font-medium">7 Days return Policy</p>
				<p className="text-gray-400 text-sm">We offer hassle exchange policy</p>
			</div>

			<div className="text-center flex flex-col justify-content items-center">
				<img src={assets.support_img} alt="" className="w-12 pb-8" />
				<p className="sm:text-base text-sm font-medium">Best Customer Support</p>
				<p className="text-gray-400 text-sm">We offer hassle exchange policy</p>
			</div>
		</div>
	);
};

export default Ourpolicy;
