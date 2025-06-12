import { useState, type ReactNode } from "react"
import { ShopContext } from "./shopContext";
import { type ShopContextType } from "./shopContext";
import { products } from "../assets/frontend_assets/assets";

type ShopContextProviderType = {
    children: ReactNode;
}

export const ShopContextProvider = ({children}: ShopContextProviderType) => {
    const currancy = "BHD";
    const deliveryFees = 2;
    const [username, setUsername] = useState("SALEH_ABDULLA");
    const values:ShopContextType = {username, setUsername, products, currancy, deliveryFees};

    return (
        <ShopContext value={values}>
            {children}
        </ShopContext>
    )
}

