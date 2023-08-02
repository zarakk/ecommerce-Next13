// Cart.tsx
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  function removeFromCart(product: Product) {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  function checkout() {
    // Handle checkout process here
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="space-y-4">
        {cart.map((product) => (
          <li
            key={product.id}
            className="border border-gray-300 rounded-md p-4"
          >
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => removeFromCart(product)}
              className="mt-2 bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={checkout}
        className="w-full bg-blue-600 text-white rounded-md px-3 py-2 mt-4 hover:bg-blue-700"
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
