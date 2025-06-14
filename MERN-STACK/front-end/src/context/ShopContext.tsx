import { createContext } from "react";

export type ProductType = {
	_id: string;
	name: string;
	description:string; 
	price: number;
	image: string[];
	category: string;
	subCategory: string;
	sizes: string[];
	date: number;
	bestseller: boolean;
};

export type ShopContextType = {
	username: string;
	setUsername: (username: string) => void;
    products: ProductType[];
    currency: string;
    deliveryFees: number;
};

export const ShopContext = createContext<ShopContextType | undefined>(undefined);