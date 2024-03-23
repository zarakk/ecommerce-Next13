import MainProduct from "./MainProduct";
import Link from "next/link";
import UserNavbar from "./UserNavbar";
import ThirstySection from "./ThirstySection";
import Reviews from "./Reviews";
import CollectionSection from "./CollectionSection";

interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}
[];

interface Props {
  products: Product[];
}

export default function LandingPage({ products }: Props) {
  return (
    <>
      <div className=" w-full">
        <div className="strip bg-[#0c183c] h-10 text-white text-center flex justify-center items-center">
          <p>
            Free same day delivery for orders above <strong>$200</strong>
          </p>
        </div>
        <div
          className="relative bg-center bg-contain h-screen"
          style={{
            backgroundImage: "url('/Homepage_Banner.webp')",
            backgroundSize: "cover",
          }}
        >
          <UserNavbar />

          <div className="absolute "></div>
          <div className="absolute z-10 inset-0 flex items-center justify-end pr-14">
            <div className="text-left w-1/3">
              <h2 className="text-7xl uppercase font-extrabold text-[#0c183c]">
                Hail the legends
              </h2>
              <p className="pt-2">
                Explore our new UK collection, featuring some historic breweries
                that are older than your great-great-great-grandfather
              </p>
              <Link
                href="/products"
                className="inline-block mt-3 px-5 py-3 border border-transparent text-base font-medium rounded-full text-white 
                bg-[#0c183c] hover:bg-white hover:text-[#0c183c] transition duration-500 ease-in-out"
              >
                Taste the legend
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-8xl w-full py-12 sm:px-6 lg:px-6">
          <div className="flex ">
            <h1 className="text-4xl uppercase text-left w-full font-extrabold text-gray-900">
              This weeks best sellers
            </h1>
            <div className="arrows-section flex w-full justify-end items-end font-bold uppercase">
              <div className="cursor-pointer hover:text-[#0c183c] p-2">
                See all
              </div>
              <div className="flex p-2 gap-2">
                <div className="arrow-left bg-[#9ea3b1] text-white cursor-pointer hover:bg-[#0c183c] rounded-full hover:text-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16.001"
                    viewBox="0 0 16 16.001"
                  >
                    <g transform="translate(1 1)">
                      <path
                        d="M11.275,14.5a7.011,7.011,0,0,0-7.021-7,7.01,7.01,0,0,0,7.021-7"
                        transform="translate(-4.254 -0.5)"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <line
                        x2="13.999"
                        transform="translate(0.001 7.002)"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></line>
                    </g>
                  </svg>
                </div>
                <div className="arrow-right bg-[#0c183c] text-white cursor-pointer rounded-full hover:bg-[#0c183c] hover:text-white p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16.001"
                    viewBox="0 0 16 16.001"
                  >
                    <g transform="translate(13380.5 17924.5)">
                      <path
                        d="M4.254,14.5a7.011,7.011,0,0,1,7.021-7A7.01,7.01,0,0,1,4.254.5"
                        transform="translate(-13376.775 -17924)"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <line
                        x1="13.999"
                        transform="translate(-13379.5 -17916.498)"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></line>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6  grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product: Product) => (
              <MainProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
        <CollectionSection products={products} />
        <ThirstySection />
        <Reviews />
      </div>
    </>
  );
}
