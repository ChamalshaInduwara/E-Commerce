import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart,setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : []
    });

    // To persist data to localStorage
    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // To add items to cart
    const addItem = (item) => {
        setCart((prev)=>{
          const existing = prev.find((p)=> p.id === item.id);
          if(existing) {
            return prev.map((p)=>
              p.id === item.id ? {...p, qty: p.qty + 1} : p);
          }
          return [...prev, {...item, qty: 1}];
        });
    };

    // To increase value of item in cart
    const increament =(id) => {
        setCart((prev) => 
            prev.map((p) =>(p.id === id ? {...p, qty: p.qty + 1} : p)));
    };

    // To decrease the value if 0 then remove from cart
   const decreament =(id) => {
    setCart(
        (prev) =>
            prev.map((p) => (p.id === id ? {...p,qty: p.qty - 1} : p))
        .filter((p) => p.qty > 0) // Remove the item if qty = 0
    );
   };  

   // To remove item immediately
   const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
   };

   // To clear cart
   const clearCart = () => setCart([]);

   // Helper function

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);