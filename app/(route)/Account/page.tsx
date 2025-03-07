import React from "react";
import Account from "@/app/components/Account";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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
        <Navbar isLoggedIn={true}></Navbar>
        <Account />
        <Footer />
      </div>
    </div>
  );
};

export default page;
