"use client";
import { useState, useEffect } from "react";

const EditProductPage = ({
  product,
  setIsModalOpen,
  products,
  setProducts,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(product);

  useEffect(() => {
    // Reset the form values with the product data
    setFormData(product);
  }, [product]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    // try {
    // Send the PUT request to update the product
    // const res = await fetch(`/api/products/${product.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const result = await res.json();
    // if (res.ok) {
    // Close the modal
    setProducts(
      products.map((p: any) => (p.id === formData.id ? formData : p))
    );

    setIsModalOpen(false);
    // } else {
    // Display the error message
    // setError(result.message);
    // }
    // } catch (err: any) {
    // Display the error message
    // setError(err.message);
    // } finally {
    setLoading(false);
  };

  return (
    <div className="container ml-auto pt-2 pl-4 bg-white">
      <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step={0.01}
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        {error && <p className="text-red-500 mb-4">Error: {error}</p>}
        <button
          type="submit"
          disabled={loading}
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
            loading && "cursor-wait opacity-50"
          }`}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
