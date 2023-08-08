export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-full flex flex-col items-center justify-center bg-gray-800 text-white ">
      <ul className="space-y-6">
        <li>
          <a href="/dashboard" className="p-2 bg-blue-600 rounded-lg px-10">
            <a className="hover:text-gray-300">Dashboard</a>
          </a>
        </li>
        <li>
          <a href="/products" className="p-2">
            <a className="hover:text-gray-300">Products</a>
          </a>
        </li>
        <li>
          <a href="/products" className="p-2">
            <a className="hover:text-gray-300">Orders</a>
          </a>
        </li>
        <li>
          <a href="/products" className="p-2">
            <a className="hover:text-gray-300">Settings</a>
          </a>
        </li>
        <li>
          <a href="/products" className="p-2">
            <button className="hover:text-gray-300">Logout</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
