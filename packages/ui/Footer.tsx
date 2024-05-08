export default function Footer() {
  return (
    <footer className="bg-[#0c183c] text-white relative mt-4  w-full p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
        <div className="flex gap-8">
          <div className="flex flex-col ">
            <h3 className="text-xs text-gray-400 uppercase p-2 pb-0">shop</h3>
            <ul>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  Gifts
                </a>
              </li>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  Juices
                </a>
              </li>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  Merch
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs text-gray-400 uppercase p-2 pb-0">learn</h3>
            <ul>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs text-gray-400 uppercase p-2 pb-0">
              Partner
            </h3>
            <ul>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  Events
                </a>
              </li>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  Corporate
                </a>
              </li>
              <li className="p-2">
                <a href="#" className="hover:text-gray-300">
                  Sales
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="/footer-img.webp" alt="Center Image" />
        </div>
        <div>
          <h3 className="font-bold uppercase text-3xl text-center">
            Subscribe or no Juice for you
          </h3>
          <form className="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 text-black w-full mt-2"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-md font-bold mt-4">
        © {new Date().getFullYear()} Cap Store. All rights reserved.
      </p>
    </footer>
  );
}
