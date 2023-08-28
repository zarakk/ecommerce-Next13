"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "ui/AdminNavbar";

const NewProductPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    setIsLoading(true);
    // event.preventDefault();
    // Create a FormData object
    const formData = new FormData();
    // Append form data
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    // Append image file
    if (image) {
      formData.append("image", image);
    }
    // Submit new product to API
    await fetch("/api/products", {
      method: "POST",
      body: formData,
    });
    // Redirect to products page
    // router.push("/admin/products");
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="container ml-auto">
        <h1 className="text-3xl font-bold mb-4">New Product</h1>
        <div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default NewProductPage;
