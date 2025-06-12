import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
	return (
		<section className="flex sm:flex-row flex-col justify-between border border-gray-400">
			<div className="flex flex-col p-5 items-center justify-center w-full">

				<div className="flex items-center gap-2">
					<p className="bg-[#414141] w-8 md:w-12 h-[2px]"></p>
					<p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
				</div>

				<h1 className="prata-regular text-3xl lg:text-5xl leading-relaxed py-2">
					Last Arrivals
				</h1>

				<div className="flex items-center gap-2">
					<p className="font-semibold text-sm md:text-base">SHOW NOW</p>
					<p className="bg-[#414141] h-[2px] w-8 md:w-11"></p>
				</div>
                
			</div>

			<img src={assets.hero_img} alt="Hero Image" className="sm:w-1/2 w-full" />
		</section>
	);
};

export default Hero;
