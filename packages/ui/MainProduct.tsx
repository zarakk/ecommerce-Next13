"use client";
import { useState } from "react";
import Link from "next/link";
interface Product {
  title: string;
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
      <Link href={`/products/${product.id}`} className="w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          {product.title}
        </h2>
        <p className="mt-1 text-lg text-gray-600">{product.price}</p>
      </Link>

      <button
        onClick={() => handleAddToCart(product)}
        className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add to Cart
      </button>
    </div>
  );
}
