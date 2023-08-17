"use client";
import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

type ProductDetailProps = {
  product: Product;
};

function ProductDetail({ product }: ProductDetailProps) {
  // Render the product details using the data passed as props
  return <div>{/* ... */}</div>;
}

export default ProductDetail;
