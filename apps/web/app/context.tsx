"use client";

import { createContext, useState } from "react";

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
};

interface CartItem {
  product: Product;
  quantity: number;
}

type Cart = CartItem[];

interface StoreContextValue {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}

export const StoreContext = createContext({});

export default function StoreContextProvider({ children }) {
  const [cart, setCart] = useState<Cart>([]);

  return (
    <StoreContext.Provider value={{ cart, setCart }}>
      {children}
    </StoreContext.Provider>
  );
}
