"use client";
import React, { useState } from "react";
import Link from "next/link";

const SearchComponent = ({ products, isOpen, setIsOpen }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product: any) => {
    return product?.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div
      className={`fixed top-28 right-0 h-screen overflow-auto transition-width duration-500 ease-in-out ${
        isOpen ? "w-1/4 bg-white" : "w-0"
      }`}
      style={{ zIndex: 999 }}
    >
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-4 border border-b-4  text-black w-full"
          />
          {filteredProducts.map((product: any) => (
            <div
              key={product.id}
              className="p-2 border-b border-gray-200 text-black flex gap-4"
            >
              <img className="bg-contain h-24" src={product.image} alt="" />
              <div className="flex flex-col">
                {product.title}
                <strong>${product.price}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;

// import React, { useState } from "react";

// const SearchComponent = ({ products }: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProducts = products.filter((product: any) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div
//       className={`fixed top-0 left-0 h-screen overflow-hidden transition-width duration-500 ease-in-out ${
//         isOpen ? "w-full bg-white" : "w-0"
//       }`}
//     >
//       <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//         {isOpen ? (
//           "X"
//         ) : (
//           <div className="p-1 rounded-full text-white cursor-pointer hover:text-white">
//             <span className="sr-only">Search</span>
//             <svg
//               fill="none"
//               className="h-6 w-6"
//               stroke="currentColor"
//               stroke-width="1.5"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//               aria-hidden="true"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//               ></path>
//             </svg>
//           </div>
//         )}
//       </button>
//       {isOpen && (
//         <div>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="p-2 border border-gray-300"
//           />
//           {filteredProducts.map((product: any) => (
//             <div key={product.id} className="p-2 border-b border-gray-200">
//               {product.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchComponent;
