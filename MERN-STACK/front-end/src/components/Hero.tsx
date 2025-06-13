import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
	return (
		<section className="flex flex-col sm:flex-row justify-between border border-[#414141]">
			
			<div className="flex items-center justify-center w-full sm:w-1/2 py-10 sm:py-0">

				<div className="flex flex-col gap-2">

					<div className="flex gap-2 items-center">
						<p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
						<p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
					</div>

					<h1 className="prata-regular lg:text-5xl text-3xl leading-relaxed">Latest Arrival</h1>

					<div className="flex gap-2 items-center">
						<p className="w-8 sm:w-[10px] h-[2px] bg-[#414141]"></p>
						<p className="font-semibold text-sm md:text-base">SHOP NOW</p>
					</div>

				</div>

			</div>
			
			<img src={assets.hero_img} alt="Hero Image" className="sm:w-1/2 w-full" />
		</section>
	);
};

export default Hero;
