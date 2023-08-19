"use client";

import { createContext, useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

type Cart = CartItem[];

interface StoreContextValue {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}

export const StoreContext = createContext<StoreContextValue | undefined>(
  undefined
);

export default function StoreContextProvider({ children }) {
  const [cart, setCart] = useState<Cart>([]);

  return (
    <StoreContext.Provider value={{ cart, setCart }}>
      {children}
    </StoreContext.Provider>
  );
}
