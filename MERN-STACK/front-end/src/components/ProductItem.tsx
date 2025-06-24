import { UseShopContext } from "../context/UseShopContext";
import { Link } from "react-router-dom";

type ProductItemType = {
	id: string;
	image: string[];
	name: string;
	price: number;
};

const ProductItem = ({ id, image, name, price }: ProductItemType) => {
	
    const {currency} = UseShopContext();

    return <Link onClick={()=> window.scroll({top: 0, behavior: "smooth"})} to={`/product/${id}`} className="text-gray-700 cursor-pointer">
		<div className="overflow-hidden">
			<img src={image[0]} alt={`Product Image with Id ${id}`} className="hover:scale-110 transition ease-in-out"/>
		</div>
		<div className="text-left flex flex-col justify-between">
			<p className="pt-3 pb-1 text-sm">{name}</p>
			<p className="text-sm font-medium">{currency} {price}</p>
		</div>
	</Link>;
};

export default ProductItem;
