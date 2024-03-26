export default function Footer() {
  return (
    <footer className="bg-[#0c183c] text-white absolute bottom-0 w-full p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-md font-bold">
          © {new Date().getFullYear()} Cap Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
