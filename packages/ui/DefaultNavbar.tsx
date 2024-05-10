"use client";
import Link from "next/link";
import { useState } from "react";

export default function DefaultNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  return (
    <div>
      <nav className="bg-[#fcb128] z-20 p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <span className="text-xl font-bold text-white cursor-pointer">
                    Cap Store
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <div
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className="z-40 py-4"
              >
                <Link href="/">
                  <span className="text-xl font-bold text-white cursor-pointer hover:text-[#0c183c] ">
                    Juice
                  </span>
                </Link>
                {showDropdown && (
                  <div className="absolute bg-[#FFEECC] min-w-full mt-4 flex justify-center left-0 flex text-[#0c183c] py-2 rounded-md animate-fade-in-down">
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold uppercase">
                        Style
                      </span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            Lager
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Golden Ale
                          </span>
                        </Link>
                        <Link href="/juice2">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Wheat Ale
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold uppercase">
                        Country
                      </span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            America
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Australia
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Belgium
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold uppercase">
                        Flavour
                      </span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            Light & Refreshing
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Subtle & Balance
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Bold & Hoppy
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Repeat the above div for other nav items like Gifts, Merch, Not Juice */}
              <div
                onMouseEnter={() => setShowDropdown2(true)}
                onMouseLeave={() => setShowDropdown2(false)}
                className="z-40 py-4"
              >
                <Link href="/">
                  <span className="text-xl font-bold text-white cursor-pointer hover:text-[#0c183c]">
                    Not Juice
                  </span>
                </Link>
                {showDropdown2 && (
                  <div className="absolute bg-[#FFEECC] min-w-full  mt-4 flex justify-center left-0 flex text-[#0c183c] py-2 rounded-md animate-fade-in-down">
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold ">Cider</span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            All Ciders
                          </span>
                        </Link>

                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Sweet Cider
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold">Spirit</span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            All Spirits
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Cocktail
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold ">Soda</span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            All Sodas
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Ginger
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Repeat the above div for other nav items like Gifts, Merch, Not Juice */}
              <div
                onMouseEnter={() => setShowDropdown3(true)}
                onMouseLeave={() => setShowDropdown3(false)}
                className="z-40 py-4"
              >
                <Link href="/">
                  <span className="text-xl font-bold text-white cursor-pointer hover:text-[#0c183c]">
                    Gifts
                  </span>
                </Link>
                {showDropdown3 && (
                  <div className="absolute bg-[#FFEECC] min-w-full mt-4 flex justify-center left-0 flex text-[#0c183c] py-2 rounded-md animate-fade-in-down">
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold ">
                        Present
                      </span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            Juice Gift
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Digital Gift Card
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            All Gifts
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold ">
                        Occassion
                      </span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            Birthday
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Congratulations
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Thank you
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col p-8">
                      <span className="block px-4 py-2 font-bold ">
                        Customise
                      </span>
                      <div className="text-sm">
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200 ">
                            Build your own gift
                          </span>
                        </Link>
                        <Link href="/">
                          <span className="block px-4 py-2 hover:bg-gray-200">
                            Corporate gift
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <Link
                href="/search"
                className="p-1 rounded-full text-white cursor-pointer hover:text-white"
              >
                <span className="sr-only">Search</span>
                <svg
                  fill="none"
                  className="h-6 w-6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/cart"
                className="ml-4 p-1 rounded-full text-white hover:text-white z-40"
              >
                <span className="sr-only">View cart</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
