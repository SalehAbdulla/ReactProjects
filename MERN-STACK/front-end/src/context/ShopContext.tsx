import { createContext } from "react";

export type ProductType = {
	_id: string;
	name: string;
	description: string;
	price: number;
	image: string[];
	category: string;
	subCategory: string;
	sizes: string[];
	date: number;
	bestseller: boolean;
};

export type CartItemType = {
	[itemId: string]: {[size: string]: number;};
};


export type ShopContextType = {
	username: string;
	setUsername: (username: string) => void;
	products: ProductType[];
	currency: string;
	deliveryFees: number;

	search: string;
	setSearch: (search: string) => void;

	showSearch: boolean;
	setShowSearch: (showSearch: boolean) => void;

	addToCart: (itemId: number, size: string) => Promise<void>;
	cartItems: CartItemType;
};

export const ShopContext = createContext<ShopContextType | undefined>(undefined);