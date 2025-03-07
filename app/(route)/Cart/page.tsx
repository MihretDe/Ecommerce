import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cart from "@/app/components/Cart";

const Page = () => {
  return (
    <div>
      <div className="border border-solid bg-black w-full h-12 flex justify-around items-center px-4 text-center">
        <p className="text-sm text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! {" "}
          <span className="font-semibold">ShopNow</span>
        </p>
        <p className="text-sm text-white">English</p>
      </div>
      <Navbar isLoggedIn={true} />
      <div className="my-8 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-4 border border-solid py-5 mb-3 shadow-md px-7 text-center">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>
        <div>
          <Cart item={{ product: "LCDMonitor", quantity: 2, price: 100, subtotal: 100 }} />
          <Cart item={{ product: "LCDMonitor", quantity: 2, price: 100, subtotal: 100 }} />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 my-4">
          <button className="border border-solid w-full md:w-56 h-14 flex items-center justify-center rounded-md text-base font-medium">
            Return To Shop
          </button>
          <button className="border border-solid w-full md:w-56 h-14 flex items-center justify-center rounded-md text-base font-medium">
            Update Cart
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <input
              className="w-full md:w-[300px] h-14 border border-solid px-3 text-gray-600 rounded-md"
              placeholder="Coupon Code"
            />
            <button className="w-full md:w-[211px] h-14 border border-solid bg-red-500 flex items-center justify-center text-white rounded-md">
              Apply Coupon
            </button>
          </div>
          <div className="border border-solid w-full md:w-[470px] p-4 rounded-md">
            <p className="text-[20px] font-medium mb-2">Cart Total</p>
            <div className="flex justify-between mb-2">
              <p className="text-base">Subtotal:</p>
              <p className="text-base">$1750</p>
            </div>
            <hr className="mb-2" />
            <div className="flex justify-between mb-2">
              <p className="text-base">Shipping:</p>
              <p className="text-base">Free</p>
            </div>
            <hr className="mb-2" />
            <div className="flex justify-between mb-2">
              <p className="text-base">Total:</p>
              <p className="text-base">$1750</p>
            </div>
            <button className="w-full md:w-[260px] h-14 border border-solid bg-red-500 flex items-center justify-center text-white rounded-md">
              <a href="./Checkout" className="w-full h-full flex items-center justify-center">Proceed to Checkout</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
