import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutForm from "../../components/CheckoutForm";
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
        <CheckoutForm/>
      </div>
      <Footer />
    </div>
  );
};

export default page;
