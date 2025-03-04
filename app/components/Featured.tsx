import React from "react";

const Featured = () => {
  return (
    <div className="mx-24">
      <div className="flex items-center">
        <div className="border border-solid w-5 h-10 bg-red-600 rounded-sm"></div>
        <p className="font-semibold text-base text-red-600">Featured</p>
      </div>
      <div className="flex justify-between ">
        <p className="text-4xl font-semibold">New Arrival</p>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-5">
          <div className="relative row-span-2 col-span-2 border border-solid bg-black rounded-md overflow-hidden">
            <img
              src="assets/speaker.jpeg"
              alt="PlayStation 5"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black to-transparent">
              <p className="text-2xl font-semibold text-white">PlayStation 5</p>
              <p className="text-[14px] font-normal text-white">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="text-base font-medium text-white">Shop Now</p>
            </div>
          </div>
          <div className="col-span-2 border border-solid bg-black rounded-md">
            <img src="assets/speaker.jpeg"></img>
            <p className="text-2xl font-semibold text-white">PlayStation 5</p>
            <p className="text-[14px] font-normal text-white">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-base font-medium text-white">Shop Now</p>
          </div>
          <div className="border border-solid bg-black rounded-md">
            <img src="assets/speaker.jpeg"></img>
            <p className="text-2xl font-semibold text-white">PlayStation 5</p>
            <p className="text-[14px] font-normal text-white">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-base font-medium text-white">Shop Now</p>
          </div>
          <div className="border border-solid bg-black rounded-md">
            <img src="assets/speaker.jpeg"></img>
            <p className="text-2xl font-semibold text-white">PlayStation 5</p>
            <p className="text-[14px] font-normal text-white">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-base font-medium text-white">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
