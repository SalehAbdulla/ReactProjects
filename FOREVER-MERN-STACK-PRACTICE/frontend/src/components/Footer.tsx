import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col sm:grid grid-col grid-cols-[3fr_1fr_1fr] gap-10 mt-20">
				<div>
					<img src={assets.logo} alt="LOGO" className="w-30 mb-5" />
					<p className="text-sm text-gray-500 ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam cum
						exercitationem ullam delectus asperiores vero dolorem! Sunt rem earum,
						maiores ducimus aspernatur quam ipsum eveniet quia repellat labore illum.
					</p>
				</div>
				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul>
						<li className="text-sm text-gray-500">HOME</li>
						<li className="text-sm text-gray-500">ABOUT US</li>
						<li className="text-sm text-gray-500">DELIVERY</li>
						<li className="text-sm text-gray-500">PRIVACY POLICY</li>
					</ul>
				</div>
				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul>
						<li className="text-sm text-gray-500">+12 123-321-213</li>
						<li className="text-sm text-gray-500">FOREVER@GMAIL.COM</li>
					</ul>
				</div>
			</div>

			<div className="text-center my-5">
				<hr className="text-gray-400 my-4" />
				<p className="text-sm text-black">{`Copyright ${new Date().getFullYear()} © FOREVER.COM - ALL RIGHT RESERVED.  `}</p>
			</div>
		</footer>
	);
};

export default Footer;
