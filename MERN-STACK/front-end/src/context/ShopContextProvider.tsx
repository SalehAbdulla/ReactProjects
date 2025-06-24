import { useState, type ReactNode } from "react"
import { ShopContext, type CartItemType } from "./ShopContext";
import { type ShopContextType } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";

type ShopContextProviderType = {
    children: ReactNode;
}



export const ShopContextProvider = ({ children }: ShopContextProviderType) => {
    const currency = "BHD";
    const deliveryFees = 2;
    const [username, setUsername] = useState("SALEH_ABDULLA");

    const [search, setSearch] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(true);
    const [cartItems, setCartItems] = useState<CartItemType>({});

    const addToCart = async (itemId: string, size: string) => {
        const cartData = structuredClone(cartItems)
        // if there is any property with this ID, then
        if (cartData[itemId]) {
            // then let's see if provided size exists
            if (cartData[itemId][size]) {
                // only then increase the cart by 1
                cartData[itemId][size] += 1
            } 
                // if the product exists, but the size does not
                // Means its not available
            else {
                cartData[itemId][size] = 1;
            }

        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

    }


    const values: ShopContextType = { username, setUsername, products, currency, deliveryFees, search, setSearch, showSearch, setShowSearch, addToCart, cartItems };

    return (
        <ShopContext value={values}>
            {children}
        </ShopContext>
    )
}
