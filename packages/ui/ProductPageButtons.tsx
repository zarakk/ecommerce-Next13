"use client";
import React, { Context, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { StoreContext } from "../../apps/web/app/context";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

type Cart = CartItem[];

type Props = {
  product: Product | null;
};

const ProductPageButtons = ({ product }: Props) => {
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
    <div className="">
      <div className="mt-6 flex justify-between flex-col gap-4">
        <div className="">
          <h3 className="font-bold uppercase">Tasting notes</h3>
          <div className="flex gap-4 capitalize">
            <div>
              <img src="/sweet-img.PNG" alt="" />
              <p>sweet</p>
            </div>
            <div>
              <img src="/citrusy-img.PNG" alt="" />
              <p>citrusy</p>
            </div>
            <div>
              <img src="/tropical-img.PNG" alt="" />
              <p>tropical</p>
            </div>
            <div>
              <img src="/passionfruit-img.PNG" alt="" />
              <p>passionfruit</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={onAddToCart}
            className="bg-[#fcb128] uppercase font-bold text-black rounded-full px-6 py-4 hover:bg-[#0c183c] hover:text-white transition duration-500 ease-in-out mr-4"
          >
            {isAddedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
          <button
            onClick={onBuyNow}
            className="bg-[#0c183c] uppercase font-bold text-white rounded-full px-6 py-4 hover:bg-white border-current border hover:text-black transition duration-500 ease-in-out mr-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageButtons;
