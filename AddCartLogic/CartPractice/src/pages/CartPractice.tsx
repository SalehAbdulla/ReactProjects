import { useState } from "react";

type CartItemType = {
    [itemId: string]: {
        [size: string]: number;
    };
};



const CartPractice = () => {

    const [cartItems, setCartItems] = useState<CartItemType>({});
    const [selectedSize, setSelectedSize] = useState<string>("");

    const addToCart = (itemId: string, size: string) => {

        if (!size) {
            alert("Please select a size.");
            return;
        }

        const cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size]++;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    };

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

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">🛒 Cart Practice</h1>

            <div className="mb-3">
                <label>Select Size: </label>
                {["S", "M", "L"].map((size) => (
                    <button
                        key={size}
                        className={`mx-1 px-3 py-1 border ${selectedSize === size ? "bg-blue-500 text-white" : ""}`}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>

            <div className="mb-3">
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded"
                    onClick={() => addToCart("item1", selectedSize)}
                >
                    Add Product (item1)
                </button>
            </div>

            <p className="mt-4 font-semibold">🧮 Total Items in Cart: {getCartCount()}</p>

            <pre className="mt-4 p-3 bg-gray-100 rounded">
                {JSON.stringify(cartItems, null, 2)}
            </pre>
        </div>
    );
};

export default CartPractice;
