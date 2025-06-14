import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col sm:grid grid-cols grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
				<div>
					<img src={assets.logo} alt="logo image" className="mb-5 w-32 " />
					<p className="">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus,
						laudantium facilis nam ea aliquid officiis! Nesciunt, unde, amet molestiae
						in sint tempora commodi minus autem a cumque nobis aliquid.
					</p>
				</div>

                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>DELIVERY</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>


                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+12 123-213-321</li>
                        <li>Contact@mail.com</li>
                    </ul>
                </div>

			</div>
            
                <div>
                    <hr className="mt-3 text-gray-400"/>
                    <p className="py-5 text-sm text-center">{`Copyright ${new Date().getFullYear()}©️ FOREVER.COM - ALL Right Reserved.`}</p>
                </div>
		</footer>
	);
};

export default Footer;
