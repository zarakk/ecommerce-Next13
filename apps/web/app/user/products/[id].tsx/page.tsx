// pages/products/[id].tsx
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Use the id to fetch data about the specific product
    // For example:
    // fetch(`/api/products/${id}`)
    //   .then(response => response.json())
    //   .then(data => setProduct(data))
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button
        onClick={() => {}}
        className="mt-4 bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
