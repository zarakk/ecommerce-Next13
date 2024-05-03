// Cart.tsx
"use client";
import { useState, useContext } from "react";
import { StoreContext } from "../context";
import { useRouter } from "next/navigation";
import UserNavbar from "ui/UserNavbar";
import DefaultNavbar from "ui/DefaultNavbar";
import OthersBoughtSection from "ui/OthersBoughtSection";
import { getProducts } from "../page";
import Footer from "ui/Footer";
import CollectionSection from "ui/CollectionSection";
import Reviews from "ui/Reviews";

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
      {/* navbar */}
      <DefaultNavbar />
      <div className="cart-page-content flex">
        <div className="p-8 w-full">
          <h2 className="text-5xl font-bold mb-4 p-2">My Cart</h2>
          {cart.length === 0 ? (
            "No Items Added to Cart"
          ) : (
            <div className="flex flex-col">
              <ul className="space-y-4 w-full flex-1 ">
                {cart.flatMap((item: any) => (
                  <li
                    key={item.product.id}
                    className="border border-gray-300 rounded-md p-4 flex w-full h-46 justify-start items-start gap-4"
                  >
                    <img
                      src={`${item.product.image}`}
                      className="w-60 h-36 object-cover rounded-md"
                    />
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-lg font-medium mb-2">
                        {item.product.title}
                      </h3>
                      <div className="text-gray-600 flex gap-2 items-center">
                        <div className="flex gap-4 rounded-full border p-2 hover:border-black">
                          <div className="decrease cursor-pointer">-</div>
                          {item.quantity}
                          <div className="increase cursor-pointer">+</div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item)}
                          className=" text-gray-800 hover:text-black"
                        >
                          X
                        </button>
                      </div>
                      <p className="text-black font-bold">
                        ${item.product.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-gift-options flex gap-6 mt-4">
                <div
                  className="gift-card-option-1 bg-[#e6e7eb] cursor-pointer hover:bg-[#fcb128]
               transition duration-500 text-black p-4 pl-8 pr-8 rounded-full text-lg font-bold uppercase"
                >
                  <p>Add Gift Cart</p>
                </div>
                <div
                  className="gift-card-option-2 bg-[#e6e7eb] cursor-pointer hover:bg-[#fcb128]
               transition duration-500 text-black p-4 rounded-full text-lg font-bold uppercase"
                >
                  <p>Add ice and cooler box</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4  w-1/2 flex flex-col justify-center ">
          {/* delivery method component */}
          <div className="cart-delivery-options flex gap-6 flex-col mb-10">
            <div>
              <p className="delivery-header uppercase font-bold mt-4">
                Select delivery method
              </p>
            </div>

            <div className="flex gap-4">
              <div className="timeslot-option cursor-pointer hover:bg-gray-200">
                <img src="/delivery.png" alt="" className="w-40" />
              </div>
              <div className="warehouse-option cursor-pointer hover:bg-gray-200 ">
                <img src="/warehouse.png" alt="" className="w-40" />
              </div>
              <div className="priority-option cursor-pointer hover:bg-gray-200">
                <img src="/priority.png" alt="" className="w-40" />
              </div>
            </div>
          </div>
          {/* special instructions component */}
          <div className="cart-delivery-options flex gap-6 flex-col mb-10">
            <div>
              <p className="delivery-header uppercase font-bold mt-4">
                Any special instructions?
              </p>
            </div>

            <div className="flex gap-4">
              <textarea className="p-2 border" rows={4} cols={60}></textarea>
            </div>
          </div>
          {/* Display the total price */}
          <h3 className="text-lg font-medium p-2">
            Total price: ${totalPrice.toFixed(2)}
          </h3>
          <button
            onClick={checkout}
            className="w-full bg-[#fcb128] text-[#0c183c] p-4 hover:bg-[#0c183c]
             hover:text-white rounded-full transition duration-500 font-bold text-2xl"
          >
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
