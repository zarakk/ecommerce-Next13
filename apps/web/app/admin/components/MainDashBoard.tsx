export default function MainDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a href="/admin/products">
          <a className="border border-gray-300 rounded-md p-4 hover:bg-gray-100">
            <h2 className="text-xl font-medium mb-2">Products</h2>
            <p>Manage your products</p>
          </a>
        </a>
        <a href="/admin/orders">
          <a className="border border-gray-300 rounded-md p-4 hover:bg-gray-100">
            <h2 className="text-xl font-medium mb-2">Orders</h2>
            <p>View and manage orders</p>
          </a>
        </a>
        <a href="/admin/users">
          <a className="border border-gray-300 rounded-md p-4 hover:bg-gray-100">
            <h2 className="text-xl font-medium mb-2">Users</h2>
            <p>Manage user accounts</p>
          </a>
        </a>
      </div>
    </div>
  );
}
