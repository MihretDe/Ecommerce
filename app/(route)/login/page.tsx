'use client';
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
      <div>
        <Navbar isLoggedIn={false}></Navbar>
        <hr className="my-6"></hr>
        <div className="flex  mx-0 gap-40 mb-16">
          <img src="assets/signUp.png" className="mx-0 h-[781px]"></img>
          <form className="flex flex-col justify-center ">
            <p className="text-4xl font-medium mb-4">Log in to Exclusive</p>
            <p className="text-base font-normal mb-10">
              Enter your details below
            </p>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="mb-4 border-b border-solid p-2"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="mb-4 border-b border-solid p-2"
            ></input>
            <div className="flex justify-between items-center">
                <a
                href="/Home"
                className="border border-solid bg-red-500 mb-4 text-base font-medium text-white py-2 px-7 rounded-md"
                >
                Log in
                </a>
              <p className="text-red-500 text-base">Forget Password?</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
