import MainProduct from "./MainProduct";
import Link from "next/link";
interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

interface Props {
  products: Product[];
}

export default function LandingPage({ products }: Props) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="relative bg-center bg-contain  h-96"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white">
              Top off your style with our caps
            </h2>
            <Link
              href="/products"
              className="inline-block mt-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          Welcome to our online store
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product: Product) => (
            <MainProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="p-4 justify-center border">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 p-6">
            About Us
          </h2>
          <div className="flex mt-6">
            <div className="text-3xl w-full  p-4 bg-white">
              We are a cap selling business that specializes in providing
              high-quality, stylish caps to customers all over the world. Our
              caps are made from the finest materials and are designed to be
              both fashionable and functional. We pride ourselves on our
              excellent customer service and strive to provide the best shopping
              experience possible. Thank you for choosing us!{" "}
            </div>
            <div className="w-full">
              <img src={"/about-us.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
