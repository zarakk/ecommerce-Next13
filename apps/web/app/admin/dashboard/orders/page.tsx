"use client";

import { useState, useEffect } from "react";
import Navbar from "ui/AdminNavbar";

type Order = {
  id: string;
  date: string;
  customer: string;
  total: number;
  status: "pending" | "processing" | "fulfilled" | "cancelled";
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetch("/api/order", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) console.log(data.message);
        else {
          setOrders(data);
        }
      });
  }, []);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
  };
  console.log(orders);
  const handleUpdateStatus = (status: Order["status"]) => {
    if (selectedOrder) {
      // Update the order status in the database or API
      fetch(`/api/orders/${selectedOrder.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }).then(() => {
        // Update the orders state with the new status
        setOrders((orders) =>
          orders.map((order) =>
            order.id === selectedOrder.id ? { ...order, status } : order
          )
        );
        setSelectedOrder(null);
      });
    }
  };

  return (
    <div className="container ml-auto pt-2 pl-4 bg-white h-screen">
      <h1 className="text-3xl font-bold">Orders</h1>
      <table className="table-auto border-collapse w-full mt-4">
        <thead>
          <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
            <th className="px-4 py-2 bg-gray-200">ID</th>
            <th className="px-4 py-2 bg-gray-200">Date</th>
            <th className="px-4 py-2 bg-gray-200">Customer</th>
            <th className="px-4 py-2 bg-gray-200">Total</th>
            <th className="px-4 py-2 bg-gray-200">Status</th>
            <th className="px-4 py-2 bg-gray-200">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-gray-700">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="hover:bg-gray-100 border-b border-gray-200 py-10"
            >
              <td className="px-4 py-4">{order.id}</td>
              <td className="px-4 py-4">order.date</td>
              <td className="px-4 py-4">order.customer</td>
              <td className="px-4 py-4">{order.total}</td>
              <td className="px-4 py-4">order.status</td>
              <td className="px-4 py-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleViewOrder(order)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="fixed z-10 inset-x-auto inset-y-auto flex items-center justify-center">
          {/* Overlay */}
          <div
            className="min-h-screen w-full absolute flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedOrder(null)}
          ></div>

          {/* Modal */}
          <div className="bg-white rounded shadow-lg w-full md:w-auto max-w-xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-xl font-bold">Order Details</p>
              <button
                className="text-black close-modal"
                onClick={() => setSelectedOrder(null)}
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="mb-6">
              {/* Order ID */}
              <p className="text-sm text-gray-600 mb-1">ID</p>
              <p>{selectedOrder.id}</p>

              {/* Order Date */}
              <p className="text-sm text-gray-600 mb-1 mt-3">Date</p>
              <p>selectedOrder.date</p>

              {/* Customer Name */}
              <p className="text-sm text-gray-600 mb-1 mt-3">Customer</p>
              <p>selectedOrder.customer</p>

              {/* Order Total */}
              <p className="text-sm text-gray-600 mb-1 mt-3">Total</p>
              <p>{selectedOrder.total}</p>

              {/* Order Status */}
              <p className="text-sm text-gray-600 mb-1 mt-3">Status</p>
              <div className="flex items-center">
                <p>selectedOrder.status</p>
                <button
                  className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
                  onClick={() =>
                    handleUpdateStatus(
                      selectedOrder.status === "processing"
                        ? "fulfilled"
                        : "processing"
                    )
                  }
                >
                  {selectedOrder.status === "processing"
                    ? "Mark as Fulfilled"
                    : "Mark as Processing"}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleUpdateStatus("cancelled")}
              >
                Cancel Order
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedOrder(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
