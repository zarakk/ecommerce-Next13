"use client";

import { useState } from "react";
import Navbar from "../(components)/Navbar";

type Order = {
  id: string;
  date: string;
  customer: string;
  total: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
};

const orders: Order[] = [
  {
    id: "1",
    date: "2023-08-01",
    customer: "John Doe",
    total: 99.99,
    status: "pending",
  },
  {
    id: "2",
    date: "2023-08-02",
    customer: "Jane Smith",
    total: 49.99,
    status: "shipped",
  },
];

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (status: Order["status"]) => {
    if (selectedOrder) {
      // Update the order status in the database or API
      setSelectedOrder(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 ml-56">
        <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-3 font-bold uppercase text-sm text-gray-700 border-b border-gray-200">
                Order ID
              </th>
              <th className="py-2 px-3 font-bold uppercase text-sm text-gray-700 border-b border-gray-200">
                Date
              </th>
              <th className="py-2 px-3 font-bold uppercase text-sm text-gray-700 border-b border-gray-200">
                Customer
              </th>
              <th className="py-2 px-3 font-bold uppercase text-sm text-gray-700 border-b border-gray-200">
                Total
              </th>
              <th className="py-2 px-3 font-bold uppercase text-sm text-gray-700 border-b border-gray-200">
                Status
              </th>
              <th className="py-2 px-3 font-bold uppercase text-sm text-gray-700 border-b border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-3 border-b border-gray-200">
                  {order.id}
                </td>
                <td className="py-2 px-3 border-b border-gray-200">
                  {order.date}
                </td>
                <td className="py-2 px-3 border-b border-gray-200">
                  {order.customer}
                </td>
                <td className="py-2 px-3 border-b border-gray-200">
                  {order.total}
                </td>
                <td className="py-2 px-3 border-b border-gray-200">
                  {order.status}
                </td>
                <td className="py-2 px-3 border-b border-gray-200">
                  <button
                    onClick={() => handleViewOrder(order)}
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedOrder && (
          <div className="fixed inset-x-[0] bottom-[0] bg-white p-[16px] shadow-lg rounded-t-lg">
            <div className="flex justify-between items-center mb-[8px]">
              <h2 className="text-lg font-medium">Order Details</h2>
              <button onClick={() => setSelectedOrder(null)}>×</button>
            </div>

            {/* Order details */}

            <div className="flex justify-end mt-[16px] space-x-[8px]">
              {selectedOrder.status === "pending" && (
                <>
                  <button
                    onClick={() => handleUpdateStatus("shipped")}
                    className="px-[8px] py-[4px] bg-indigo[600] text-white rounded-md hover:bg-indigo[700]"
                  >
                    Mark as Shipped
                  </button>
                  <button
                    onClick={() => handleUpdateStatus("cancelled")}
                    className="px-[8px] py-[4px] bg-red[600] text-white rounded-md hover:bg-red[700]"
                  >
                    Cancel Order
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
