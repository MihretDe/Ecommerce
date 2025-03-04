import React from "react";

const CheckoutForm = () => {
  return (
    <div>
      <p className="text-4xl font-medium">Billing Details</p>
      <div className="flex justify-between">
        <form className="flex flex-col w-[500px]">
          <div className="flex flex-col mb-7">
            <label className="text-[#999999] text-base">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-solid rounded-md  bg-[#f5f5f5] h-12"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label className="text-[#999999] text-base">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-solid rounded-md  bg-[#f5f5f5] h-12"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label className="text-[#999999] text-base">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-solid rounded-md  bg-[#f5f5f5] h-12"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label className="text-[#999999] text-base">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              className="border border-solid rounded-md  bg-[#f5f5f5] h-12"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label className="text-[#999999] text-base">
              Town/City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-solid rounded-md  bg-[#f5f5f5] h-12"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label className="text-[#999999] text-base">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-solid rounded-md  bg-[#f5f5f5] h-12"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label className="text-[#999999] text-base">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="border border-solid rounded-md bg-[#f5f5f5] h-12"
            />
          </div>
          <label className=" text-base flex items-center">
            <input type="checkbox" className="mr-2 w-6 h-6" />
            Save this information for faster check-out next time
          </label>
        </form>
        <div className="w-[527px] mt-6">
          <div className="flex mb-7">
            <p>LCD Monitor</p>
            <p>$650</p>
          </div>
          <div className="flex mb-7">
            <p>H1 Gamepad</p>
            <p>$1100</p>
          </div>
          <div className="flex justify-between mb-7">
            <p className="text-base">Subtotal:</p>
            <p className="text-base">$1750</p>
          </div>
          <hr className="mb-2"></hr>
          <div className="flex justify-between mb-7">
            <p className="text-base">Shipping:</p>
            <p className="text-base">Free</p>
          </div>
          <hr className="mb-2"></hr>
          <div className="flex justify-between mb-7">
            <p className="text-base">Total:</p>
            <p className="text-base">$1750</p>
          </div>
          <div className="flex justify-between mb-7">
            <label className="text-base flex items-center gap-3">
              <input type="radio" className="hidden peer" />
              <span className="w-4 h-4 rounded-full border border-black peer-checked:bg-black"></span>
              Bank
            </label>
            <div className="flex items-center gap-3"></div>
          </div>
          <label className="flex gap-3 text-base items-center mb-7">
            <input type="radio" className="hidden peer" />
            <span className="w-4 h-4 rounded-full border border-black peer-checked:bg-black"></span>
            Cash on delivery
          </label>
          <div className="flex justify-between mb-7">
            <input
              className="w-[300px] h-12 border border-solid rounded-md px-2"
              placeholder="Coupon Code"
            ></input>
            <div className="w-[211px] h-12 border border-solid bg-red-500 flex items-center justify-center mb-2 rounded-md">
              <p className="text-base text-white">Apply Coupon</p>
            </div>
          </div>
          <div className="w-[190px] h-12 border border-solid bg-red-500 flex items-center justify-center mb-2 rounded-md">
            <p className="text-base text-white">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
