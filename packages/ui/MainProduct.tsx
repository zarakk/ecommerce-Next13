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
    <div className="flex flex-col rounded-lg border cursor-pointer ">
      <Link href={`/products/${product.id}`} className="w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </Link>
      {/* @ts-ignore */}
      <ProductButtons product={product} />
    </div>
  );
}
