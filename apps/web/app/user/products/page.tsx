// Products.tsx
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  function addToCart(product: Product) {
    // Handle adding product to cart here
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-md"
            />
            <h3 className="text-lg font-medium mt-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
