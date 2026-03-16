import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart,setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : []
    })


    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);