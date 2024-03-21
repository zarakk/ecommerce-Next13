"use client";

export default function ThirstySection() {
  return (
    <div className="p-4 justify-center border bg-[#fcb128]">
      <h2 className="text-[#0c183c] text-7xl uppercase font-extrabold text-center text-gray-900 p-6">
        Thirsty for more?
      </h2>
      <div className="flex mt-6">
        <div className="text-3xl  p-4">
          {/* small card */}
          <div
            className="uppercase text-white font-bold flex h-80 rounded-md cursor-pointer transition-all duration-500 relative"
            style={{
              backgroundImage: "url('/Small-Collection-Grid.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0 bg-transparent hover:bg-gray-800 h-80 transition-all duration-500 "
              style={{ opacity: 0.5 }}
            ></div>
            <div className="p-4 h-20 z-10">
              <h3 className="text-5xl uppercase">Endless Supply of juice</h3>
              <p className="text-base uppercase">Start Drinking</p>
            </div>
          </div>
          {/* small card */}
          <div
            className="uppercase text-white font-bold flex h-80 rounded-md cursor-pointer transition-all duration-500 relative"
            style={{
              backgroundImage: "url('/Small-Collection-Grid-2.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0 bg-transparent hover:bg-gray-800 h-80 transition-all duration-500 "
              style={{ opacity: 0.5 }}
            ></div>
            <div className="p-4 h-20 z-10">
              <h3 className="text-5xl uppercase">New to Craft Juice?</h3>
              <p className="text-base uppercase">Start here</p>
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          {/* large card */}
          <div
            className="uppercase text-white font-bold flex w-full h-full rounded-md cursor-pointer transition-all duration-500 relative"
            style={{
              backgroundImage: "url('/Large-Collection.webp')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute inset-0 bg-transparent hover:bg-gray-800 transition-all duration-500  rounded-md"
              style={{ opacity: 0.5 }}
            ></div>
            <div className="p-4 z-10 h-20 hover:bg-transparent">
              <h3 className="text-5xl z-20">Gifts for all occasions</h3>
              <p className="text-base">Juice is love</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
