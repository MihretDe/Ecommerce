import React from "react";

const Top = () => {
  return (
    <div className="flex flex-wrap gap-6 px-6 md:px-12 lg:px-24">
      {/* Categories Section */}
      <div className="w-full md:w-1/4 lg:w-1/5">
        <p className="text-base mb-4">Women&apos;s Fashion</p>
        <p className="text-base mb-4">Men&apos;s Fashion</p>
        <p className="text-base mb-4">Electronics</p>
        <p className="text-base mb-4">Home & Lifestyle</p>
        <p className="text-base mb-4">Medicine</p>
        <p className="text-base mb-4">Sports & Outdoor</p>
        <p className="text-base mb-4">Baby&apos;s & Toys</p>
        <p className="text-base mb-4">Groceries & Pets</p>
        <p className="text-base mb-4">Health & Beauty</p>
      </div>

      <div className="w-full md:w-2/4 lg:w-3/5 bg-black text-white p-6 md:p-10 flex flex-col md:flex-row items-center justify-between rounded-lg">
       
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img src="assets/appleW.svg" alt="Apple" className="w-6 h-6 md:w-8 md:h-8" />
            <p className="text-base">iPhone 14 Series</p>
          </div>
          <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">Up to 10% off Voucher</p>
          <p className="text-base font-medium cursor-pointer underline">Shop Now</p>
        </div>

        <img src="assets/iphone.png" alt="iPhone" className="w-40 md:w-52 lg:w-64 mt-6 md:mt-0" />
      </div>
    </div>
  );
};

export default Top;
