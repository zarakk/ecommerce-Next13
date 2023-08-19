import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [storeName, setStoreName] = useState("EccomApp");
  const handleLogout = () => {
    //handle logout
    fetch("/auth/logout", { method: "POST" });
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 h-full flex flex-col flex-start bg-gray-800 text-white px-4 ">
        <h1 className="text-2xl z-10 font-bold text-white bg-gray-800 p-2 mb-6">
          {storeName}
        </h1>
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
              href="/admin/products"
              className={`p-2 rounded-lg px-10 ${
                pathname === "/admin/products" ? "bg-blue-600" : ""
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/admin/orders"
              className={`p-2 rounded-lg px-10 ${
                pathname === "/admin/orders" ? "bg-blue-600" : ""
              }`}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/admin/settings"
              className={`p-2 rounded-lg px-10 ${
                pathname === "/admin/settings" ? "bg-blue-600" : ""
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
    </div>
  );
}
