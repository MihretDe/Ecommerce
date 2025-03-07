import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const ContactPage = () => {
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
    <div className="flex flex-col md:flex-row justify-center gap-10 p-6 md:p-16 bg-gray-100 ">
      {/* Contact Info Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-1/3">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-red-500 text-2xl">📞</span>
          <h3 className="text-lg font-semibold">Call To Us</h3>
        </div>
        <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
        <p className="text-gray-600 font-semibold">Phone: +8801611112222</p>
        <hr className="my-4" />
        <div className="mb-6 flex items-center gap-3">
          <span className="text-red-500 text-2xl">✉️</span>
          <h3 className="text-lg font-semibold">Write To Us</h3>
        </div>
        <p className="text-gray-600">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-gray-600 font-semibold">Email: customer@exclusive.com</p>
        <p className="text-gray-600 font-semibold">Email: support@exclusive.com</p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-2/3">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border p-3 w-full rounded-md text-gray-600"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border p-3 w-full rounded-md text-gray-600"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="border p-3 w-full rounded-md text-gray-600"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="border p-3 w-full h-32 rounded-md text-gray-600"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white py-3 px-6 rounded-md w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactPage;
