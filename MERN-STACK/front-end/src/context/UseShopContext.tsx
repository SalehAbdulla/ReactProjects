import { useContext } from "react";
import { ShopContext } from "./shopContext";

export const UseShopContext = () => {
	const context = useContext(ShopContext);
	if (!context) {
		throw new Error("Use context must be used by Shop Context Provider");
	}
    return context;
};
