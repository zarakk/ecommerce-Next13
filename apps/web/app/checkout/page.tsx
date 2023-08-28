// Checkout.tsx
"use client";
import { useState, useContext } from "react";
import { StoreContext } from "../context";
import { useRouter } from "next/navigation";

type Product = {
  id: string;
  name: string;
  price: number;
};

function Checkout() {
  const { cart, setCart } = useContext(StoreContext);
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(false);
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const router = useRouter();
  function handleCheckout() {
    // Handle checkout process here

    const orderDetails = {
      cart,
      shippingAddress,
      billingAddress: isBillingSameAsShipping
        ? shippingAddress
        : billingAddress,
      paymentMethod,
      bankAccountNumber,
      totalPrice,
    };

    fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    });
    setTimeout(() => {
      router.push("/checkout/checkout-success");
    }, 1000);
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
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={isBillingSameAsShipping}
          onChange={(event) => setIsBillingSameAsShipping(event.target.checked)}
          className="mr-2"
        />
        <label>Billing address same as shipping address</label>
      </div>
      {!isBillingSameAsShipping && (
        <>
          <h3 className="text-lg font-medium mb-2">Billing Address</h3>
          <textarea
            value={billingAddress}
            onChange={(event) => setBillingAddress(event.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
          />
        </>
      )}
      <h3 className="text-lg font-medium mb-2">Payment Method</h3>
      <select
        value={paymentMethod}
        onChange={(event) => setPaymentMethod(event.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      >
        <option value="">Select a payment method</option>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="cash-on-delivery">Cash on Delivery</option>
        <option value="bank">Bank</option>
      </select>
      {paymentMethod && (
        <>
          <h3 className="text-lg font-medium mb-2">Account Number</h3>
          <input
            type="text"
            value={bankAccountNumber}
            onChange={(event) => setBankAccountNumber(event.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
          />
        </>
      )}
      <h3 className="text-lg font-medium mb-2">Order Summary</h3>
      <ul className="border border-gray-300 rounded-md divide-y divide-gray-300 mb-4">
        {cart.map((item: any) => (
          <li key={item.product.id} className="p-4">
            <h4 className="text-base font-medium">{item.product.title}</h4>
            <p className="text-gray-600">${item.product.price}</p>
            <h3 className="text-lg font-medium p-2">
              Total price: ${totalPrice.toFixed(2)}
            </h3>
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
