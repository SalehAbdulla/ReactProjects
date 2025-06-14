import { Link } from "react-router-dom";
import { UseAppContext } from "../context/UseAppContext";

type ProductCardType = {
	id: string;
	name: string;
	image: string[];
	price: number;
};

const ProductCard = ({ id, name, image, price }: ProductCardType) => {
	const { currency } = UseAppContext();

	return (
		<Link to={`/product/${id}`}>
			<div className="flex flex-col gap-2 mt-5">
				<div className="overflow-hidden">
					<img
						src={image[0]}
						alt={`Product Image Id ${id}`}
						className="transition hover:scale-110 ease-in-out rounded-xl"
					/>
				</div>
				<div className="text-left">
					<p className="text-sm text-gray-700">{name}</p>
					<p className="text-sm font-medium mt-2">
						{currency} {price}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
