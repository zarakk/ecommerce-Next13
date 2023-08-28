import AdminNavbar from "ui/AdminNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex h-full bg-gray-800">
        <AdminNavbar />
        {children}
      </div>
    </>
  );
}
