"use client";
import { usePathname, useRouter } from "next/navigation";

function PostCheckout() {
  const router = useRouter();
  const pathname = usePathname();

  //   const { orderId } =

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
      <p className="mb-4">
        Your order has been placed successfully and is being processed. Your
        order number is <strong>{pathname}</strong>.
      </p>
      <p className="mb-4">
        You will receive an email confirmation with your order details shortly.
      </p>
      <button
        onClick={() => router.push("/")}
        className="w-full bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-700"
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default PostCheckout;
