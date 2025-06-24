import { useState, type ReactNode } from "react"
import { ShopContext } from "./ShopContext";
import { type ShopContextType } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";

type ShopContextProviderType = {
    children: ReactNode;
}

export const ShopContextProvider = ({children}: ShopContextProviderType) => {
    const currency = "BHD";
    const deliveryFees = 2;
    const [username, setUsername] = useState("SALEH_ABDULLA");

    const [search, setSearch] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(true);
    
    const values:ShopContextType = {username, setUsername, products, currency, deliveryFees, search, setSearch, showSearch, setShowSearch};

    return (
        <ShopContext value={values}>
            {children}
        </ShopContext>
    )
}
