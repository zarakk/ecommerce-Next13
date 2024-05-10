"use client";

import MainProduct from "./MainProduct";

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

export default function CollectionSection({ products }: Props) {
  return (
    <div className="p-4">
      <div className="collection-section-header flex justify-between items-center ">
        <h3 className="text-[#0c183c] font-bold text-4xl uppercase mb-4 font-extrabold">
          Begin your adventure...
        </h3>
        <div className="uppercase text-[#0c183c]">see all collections</div>
      </div>
      <div className="collection-section-body flex gap-4">
        <div
          className="uppercase text-white font-bold flex rounded-md cursor-pointer transition-all duration-500 relative"
          style={{
            backgroundImage: "url('/Small-Collection-Grid.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 bg-transparent hover:bg-gray-800 transition-all duration-500 "
            style={{ opacity: 0.5 }}
          ></div>
          <div className="p-4 h-20 z-10">
            <h3 className="text-5xl uppercase p-2">Your party starter kit</h3>
            <p className="text-base uppercase px-4">See all</p>
          </div>
        </div>
        <div
          className="overflow-auto w-1/2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            // @ts-ignore
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <div className="mt-6 flex gap-4 w-1/2">
            {products.map((product: Product) => (
              <MainProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
