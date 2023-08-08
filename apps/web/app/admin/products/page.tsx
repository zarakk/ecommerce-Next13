"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// import { Product } from "../types";

const ProductsPage = () => {
  const [products, setProducts] = useState<any>([
    {
      id: 1,
      title: "Product 1",
      description: "This is the description for product 1.",
      price: 9.99,
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is the description for product 2.",
      price: 19.99,
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is the description for product 3.",
      price: 29.99,
    },
  ]);

  //   useEffect(() => {
  //     // Fetch products from API and update state
  //     fetch("/api/products")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);

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
