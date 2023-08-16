"use client";
import { useState } from "react";

interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}
interface Props {
  product: Product;
}

export default function MainProduct({ product }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">{product.title}</h2>
      <p className="mt-1 text-lg text-gray-600">{product.price}</p>
      <p className="mt-2 text-sm text-gray-500">{product.description}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add to Cart
      </button>
    </div>
  );
}
