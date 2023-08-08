export default function Navbar() {
  return (
    <div>
      <h1 className="text-2xl z-10 font-bold text-white fixed top-0 left-0 bg-gray-800 p-2">
        EccomApp
      </h1>
      <nav className="fixed top-0 left-0 h-full flex flex-col items-center justify-center bg-gray-800 text-white px-4">
        <ul className="space-y-6">
          <li>
            <a href="/dashboard" className="p-2 bg-blue-600 rounded-lg px-10">
              <a className="hover:text-gray-300">Dashboard</a>
            </a>
          </li>
          <li>
            <a href="/products" className="p-2 rounded-lg px-10">
              <a className="hover:text-gray-300">Products</a>
            </a>
          </li>
          <li>
            <a href="/products" className="p-2 rounded-lg px-10">
              <a className="hover:text-gray-300">Orders</a>
            </a>
          </li>
          <li>
            <a href="/products" className="p-2 rounded-lg px-10">
              <a className="hover:text-gray-300">Settings</a>
            </a>
          </li>
          <li>
            <a href="/products" className="p-2 rounded-lg px-10">
              <button className="hover:text-gray-300">Logout</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
