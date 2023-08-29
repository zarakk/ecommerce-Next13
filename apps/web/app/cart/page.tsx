// Cart.tsx
"use client";
import { useState, useContext } from "react";
import { StoreContext } from "../context";
import { useRouter } from "next/navigation";
import UserNavbar from "ui/UserNavbar";

type Product = {
  id: string;
  name: string;
  price: number;
};

function Cart() {
  // const [cart, setCart] = useState<Product[]>([]);
  const { cart, setCart } = useContext(StoreContext);
  const router = useRouter();
  function removeFromCart(item: any) {
    setCart(
      cart.filter((cartItem: any) => cartItem.product.id !== item.product.id)
    );
  }

  console.log(cart);
  function checkout() {
    // Handle checkout process here
    router.push("/checkout");
  }

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <UserNavbar />
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          "No Items Added to Cart"
        ) : (
          <>
            <ul className="space-y-4">
              {cart.flatMap((item: any) => (
                <li
                  key={item.product.id}
                  className="border border-gray-300 rounded-md p-4"
                >
                  <h3 className="text-lg font-medium mb-2">
                    Item: {item.product.title}
                  </h3>
                  <p className="text-gray-600">Price: ${item.product.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>

                  <button
                    onClick={() => removeFromCart(item)}
                    className="mt-2 bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            {/* Display the total price */}
            <h3 className="text-lg font-medium p-2">
              Total price: ${totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={checkout}
              className="w-full bg-blue-600 text-white rounded-md px-3 py-2 mt-4 hover:bg-blue-700"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
