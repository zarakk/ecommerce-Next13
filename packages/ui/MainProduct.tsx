"use client";
import { useState } from "react";
import Link from "next/link";
import ProductButtons from "./ProductButtons";
interface ProductType {
  title: string;
  price: number;
  image: string;
  id: number;
  description: string;
}
interface Props {
  product: ProductType;
}

export default function MainProduct({ product }: Props) {
  const [cart, setCart] = useState<ProductType[]>([]);

  const handleAddToCart = (product: ProductType) => {
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

      <ProductButtons product={product} />
    </div>
  );
}
