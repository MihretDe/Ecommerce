import React from "react";

const Featured = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <div className="w-5 h-10 bg-red-600 rounded-sm"></div>
        <p className="font-semibold text-base text-red-600">Featured</p>
      </div>
      
      {/* Title */}
      <div className="my-6 md:my-9">
        <p className="text-2xl md:text-4xl font-semibold">New Arrival</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Large Featured Item */}
        <div className="relative sm:col-span-2 row-span-2 border bg-black rounded-md overflow-hidden">
          <img src="assets/speaker.jpeg" alt="PlayStation 5" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black to-transparent">
            <p className="text-lg md:text-2xl font-semibold text-white">PlayStation 5</p>
            <p className="text-sm md:text-base text-white">Black and White version of the PS5 coming out on sale.</p>
            <p className="text-base font-medium text-white">Shop Now</p>
          </div>
        </div>

        {/* Smaller Cards */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="border bg-black rounded-md p-4 flex flex-col items-center">
            <img src="assets/speaker.jpeg" alt="Product" className="w-full h-40 object-cover rounded-md" />
            <p className="text-lg md:text-2xl font-semibold text-white mt-3">PlayStation 5</p>
            <p className="text-sm md:text-base text-white text-center">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-base font-medium text-white mt-2">Shop Now</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
