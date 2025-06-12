import { UseShopContext } from "../context/UseShopContext";

const LatestCollection = () => {
	const { products } = UseShopContext();
    console.log(products);
	return <div>

    </div>;
};

export default LatestCollection;
