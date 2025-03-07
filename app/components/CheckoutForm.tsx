import React from "react";

const CheckoutForm = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <p className="text-3xl sm:text-4xl font-medium mb-6">Billing Details</p>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <form className="flex flex-col w-full sm:w-[500px]">
          {[
            "First Name",
            "Company Name",
            "Street Address",
            "Apartment, floor, etc. (optional)",
            "Town/City",
            "Phone Number",
            "Email Address",
          ].map((label, index) => (
            <div className="flex flex-col mb-4" key={index}>
              <label className="text-gray-600 text-base">
                {label} {index !== 3 && <span className="text-red-500">*</span>}
              </label>
              <input
                type={label.includes("Email") ? "email" : "text"}
                className="border border-gray-300 rounded-md bg-gray-100 h-12 px-3"
              />
            </div>
          ))}
          <label className="text-base flex items-center mt-4">
            <input type="checkbox" className="mr-2 w-5 h-5" />
            Save this information for faster checkout next time
          </label>
        </form>

        <div className="w-full lg:w-[527px] mt-6">
          {[{ name: "LCD Monitor", price: "$650" }, { name: "H1 Gamepad", price: "$1100" }].map((item, index) => (
            <div className="flex justify-between mb-4" key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}

          <div className="border-t pt-4">
            {[{ label: "Subtotal:", value: "$1750" }, { label: "Shipping:", value: "Free" }, { label: "Total:", value: "$1750" }].map((item, index) => (
              <div className="flex justify-between mb-4" key={index}>
                <p className="text-base font-medium">{item.label}</p>
                <p className="text-base">{item.value}</p>
              </div>
            ))}
          </div>

          {["Bank", "Cash on delivery"].map((method, index) => (
            <label className="flex gap-3 text-base items-center mb-4" key={index}>
              <input type="radio" name="payment" className="hidden peer" />
              <span className="w-4 h-4 rounded-full border border-black peer-checked:bg-black"></span>
              {method}
            </label>
          ))}

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
            <input
              className="w-full sm:w-[300px] h-12 border border-gray-300 rounded-md px-3"
              placeholder="Coupon Code"
            />
            <button className="w-full sm:w-[211px] h-12 bg-red-500 text-white rounded-md">
              Apply Coupon
            </button>
          </div>

          <button className="w-full sm:w-[190px] h-12 bg-red-500 text-white rounded-md mt-4">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
