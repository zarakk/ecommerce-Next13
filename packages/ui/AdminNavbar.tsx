"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminNavbar() {
  const pathname = usePathname();
  const [storeName, setStoreName] = useState("EccomApp");
  const handleLogout = () => {
    //handle logout
    fetch("/auth/logout", { method: "POST" });
  };

  return (
    <nav className="h-full flex flex-col flex-start text-white px-4">
      <h1 className="text-2xl font-bold text-white  p-2 mb-6">{storeName}</h1>
      <ul className="space-y-6 ">
        <li>
          <Link
            href="/admin/dashboard"
            className={`p-2 rounded-lg px-10 ${
              pathname === "/admin/dashboard" ? "bg-blue-600" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/dashboard/products"
            className={`p-2 rounded-lg px-10 ${
              pathname === "/admin/dashboard/products" ? "bg-blue-600" : ""
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/admin/dashboard/orders"
            className={`p-2 rounded-lg px-10 ${
              pathname === "/admin/dashboard/orders" ? "bg-blue-600" : ""
            }`}
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            href="/admin/dashboard/settings"
            className={`p-2 rounded-lg px-10 ${
              pathname === "/admin/dashboard/settings" ? "bg-blue-600" : ""
            }`}
          >
            Settings
          </Link>
        </li>
        <li>
          <button
            className="p-2 rounded-lg px-10 hover:text-gray-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
