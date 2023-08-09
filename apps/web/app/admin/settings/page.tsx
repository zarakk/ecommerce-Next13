"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function SettingsPage() {
  const [taxRate, setTaxRate] = useState(0.1);
  const [shippingCost, setShippingCost] = useState(5);
  const [storeName, setStoreName] = useState("");
  const handleSave = () => {
    // Save the settings to the database or API
  };

  return (
    <>
      <Navbar />
      <div className="p-4 ml-56">
        <h1 className="text-2xl font-bold mb-4">Admin Settings</h1>
        <div className="mb-4">
          <label
            htmlFor="storeName"
            className="block text-sm font-medium text-gray-700"
          >
            Store Name
          </label>
          <input
            type="text"
            id="storeName"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="taxRate"
            className="block text-sm font-medium text-gray-700"
          >
            Tax Rate
          </label>
          <input
            type="number"
            id="taxRate"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="shippingCost"
            className="block text-sm font-medium text-gray-700"
          >
            Shipping Cost
          </label>
          <input
            type="number"
            id="shippingCost"
            value={shippingCost}
            onChange={(e) => setShippingCost(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Save
        </button>
      </div>
    </>
  );
}
