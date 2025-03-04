import React from "react";

const Top = () => {
  return (
    <div className="flex w-full mx-24 ">
      
      <div className="min-w-56">
        <p className="text-base mb-4">Woman's Fashion</p>
        <p className="text-base mb-4">Men's Fashion</p>
        <p className="text-base mb-4">Electronics</p>
        <p className="text-base mb-4">Home & Lifestyle</p>
        <p className="text-base mb-4">Medicine</p>
        <p className="text-base mb-4">sports & Outdoor</p>
        <p className="text-base mb-4">Baby's & Toys</p>
        <p className="text-base mb-4">Groceries & Pets</p>
        <p className="text-base mb-4">Health & Beauty</p>
      </div>
      <div className="border border-solid bg-black w-full flex items-center px-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <img src="assets/appleW.svg"></img>
            <p className="text-base text-white">iphone 14 series</p>
          </div>
          <p className="text-5xl font-semibold text-white">Up to 10% off Voucher</p>
          <div>
            <p className="text-base font-medium text-white">Shop Now</p>
          </div>
        </div>
        <img src="assets/iphone.png"></img>
      </div>
    </div>
  );
};

export default Top;
