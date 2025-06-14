import { createContext } from "react";

export type Products = {
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
}

export type AppContextType = {
    username: string;
    setUserName: (username: string) => void;
    currency: string;
    delivery_fee: number;
    products: Products[];
}

export const AppContext = createContext<AppContextType | undefined>(undefined);