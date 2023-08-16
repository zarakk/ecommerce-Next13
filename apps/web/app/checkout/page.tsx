// Checkout.tsx
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

function Checkout() {
  const [cart, setCart] = useState<Product[]>([]);
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  function handleCheckout() {
    // Handle checkout process here
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <h3 className="text-lg font-medium mb-2">Shipping Address</h3>
      <textarea
        value={shippingAddress}
        onChange={(event) => setShippingAddress(event.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      />
      <h3 className="text-lg font-medium mb-2">Billing Address</h3>
      <textarea
        value={billingAddress}
        onChange={(event) => setBillingAddress(event.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      />
      <h3 className="text-lg font-medium mb-2">Payment Method</h3>
      <select
        value={paymentMethod}
        onChange={(event) => setPaymentMethod(event.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      >
        <option value="">Select a payment method</option>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      <h3 className="text-lg font-medium mb-2">Order Summary</h3>
      <ul className="border border-gray-300 rounded-md divide-y divide-gray-300 mb-4">
        {cart.map((product) => (
          <li key={product.id} className="p-4">
            <h4 className="text-base font-medium">{product.name}</h4>
            <p className="text-gray-600">${product.price}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        className="w-full bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
