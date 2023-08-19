"use client";
import React, { Context, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { StoreContext } from "../../apps/web/app/context";

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

type Props = {
  product: Product | null;
};

const ProductButtons = ({ product }: Props) => {
  const router = useRouter();

  // const [cart, setCart] = useState<Cart>([]);
  const { cart, setCart } = useContext<any>(StoreContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCart = (product: Product) => {
    // Check if the product is already in the cart
    const existingCartItem = cart.find(
      (item: any) => item.product.id === product.id
    );

    if (existingCartItem) {
      // If the product is already in the cart, increase the quantity
      setCart(
        cart.map((item: any) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const onAddToCart = () => {
    // Add item to cart
    if (product) {
      addToCart(product);
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 3000);
    }
  };

  const onBuyNow = () => {
    // Proceed to checkout
    if (product) {
      addToCart(product);
      router.push("/checkout");
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 mr-4"
      >
        {isAddedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
      <button
        onClick={onBuyNow}
        className="bg-yellow-400 text-white rounded-md px-4 py-2 hover:bg-yellow-500"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductButtons;
