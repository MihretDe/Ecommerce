import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cart from "@/app/components/Cart";
const page = () => {
  return (
    <div>
      <div className="border border-solid bg-black w-full h-12 flex justify-around pl-22 ">
        <p className="text-sm text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold">ShopNow</span>
        </p>
        <p className="text-sm text-white">English </p>
      </div>
      <Navbar isLoggedIn={true} />
      <div className="mx-32">
        <div className="grid grid-cols-4 border border-solid py-5 mb-3 shadow-md px-7">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>
        <div>
          <Cart
            item={{
              product: "LCDMonitor",
              quantity: 2,
              price: 100,
              subtotal: 100,
            }}
          />
          <Cart
            item={{
              product: "LCDMonitor",
              quantity: 2,
              price: 100,
              subtotal: 100,
            }}
          />
        </div>
        <div className="flex justify-between">
          <div className="border border-solid w-56 h-14 flex items-center justify-center rounded-md">
            <p className="text-base font-medium">Return To Shop</p>
          </div>
          <div className="border border-solid w-56 h-14 flex items-center justify-center rounded-md">
            <p className="text-base font-medium"> Update Cart</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-[300px] h-14 border border-solid flex items-center ">
              <p className="text-base text-gray-300 px-3">Coupon Code</p>
            </div>
            <div className="w-[211px] h-14 border border-solid bg-red-500 flex items-center justify-center">
              <p className="text-base text-white">Apply Coupon</p>
            </div>
          </div>
          <div className="border border-solid w-[470px] p-4 rounded-md">
            <p className="text-[20px] font-medium mb-2">Cart Total</p>
            <div className="flex justify-between mb-2">
              <p className="text-base">Subtotal:</p>
              <p className="text-base">$1750</p>
            </div>
            <hr className="mb-2"></hr>
            <div className="flex justify-between mb-2">
              <p className="text-base">Shipping:</p>
              <p className="text-base">Free</p>
            </div>
            <hr className="mb-2"></hr>
            <div className="flex justify-between mb-2">
              <p className="text-base">Total:</p>
              <p className="text-base">$1750</p>
            </div>
            <div className="w-[260px] h-14 border border-solid bg-red-500 flex items-center justify-center mb-2">
              <p className="text-base text-white">Process to checkout</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
