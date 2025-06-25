import { useEffect, useState, type ReactNode } from "react"
import { ShopContext, type CartItemType } from "./ShopContext";
import { type ShopContextType } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

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

        if (!size) {
            toast.error("Select Product Size");
            return;
        }

        const cartData = structuredClone(cartItems)
        // Exists or not
        if (cartData[itemId]) {
            // if exist, is it same size ?
            if (cartData[itemId][size]) {
                // same size, increase quantity
                cartData[itemId][size]++;
            } else {
                // differnct size add new item
                cartData[itemId][size] = 1;
            }
        } else {
            // add new item in the cart
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            const sizes = cartItems[itemId];
            for (const size in sizes) {
                totalCount += sizes[size];
            }
        }
        return totalCount;
    };


    const values: ShopContextType = { username, setUsername, products, currency, deliveryFees, search, setSearch, showSearch, setShowSearch, addToCart, cartItems, getCartCount };

    return (
        <ShopContext value={values}>
            {children}
        </ShopContext>
    )
}
