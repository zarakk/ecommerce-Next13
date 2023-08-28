"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "ui/AdminNavbar";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const [products, setProducts] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router: any = useRouter();
  useEffect(() => {
    // Fetch products from API and update state
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    // Open the modal and ask the user to confirm the deletion
    if (window.confirm("Are you sure you want to delete this product?")) {
      // If the user confirms, send the DELETE request
      fetch(`/api/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Update the products state to remove the deleted product
          setProducts((products) =>
            products.filter((product) => product.id !== id)
          );
        });
    }
  };

  return (
    <>
      <div className="container ml-auto pt-2 pl-4 bg-white">
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
              <img src={product.image} className="w-24 h-24" />
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-gray-700">${product.price}</p>
              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
