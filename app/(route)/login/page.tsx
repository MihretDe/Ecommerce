"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const Loginpage = () => {
  return (
    <div>
      <div className="border border-solid bg-black w-full h-12 flex justify-center items-center gap-4">
        <p className="text-sm text-white text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold">ShopNow</span>
        </p>
        <p className="text-sm text-white">English</p>
      </div>

      <div>
        <Navbar isLoggedIn={false}></Navbar>
        <hr className="my-6"></hr>
        <div className="flex flex-col md:flex-row  mx-0 gap-40 mb-16 mx-3">
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

export default Loginpage;
