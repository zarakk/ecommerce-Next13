"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../(components)/Navbar";
// import { Product } from "../types";

const ProductsPage = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch products from API and update state
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container ml-auto pt-2">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <Link
          href="/admin/products/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          New Product
        </Link>
        <ul className="mt-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 my-2">
              <img className="w-24 h-24">{product.title}</img>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-gray-700">${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
