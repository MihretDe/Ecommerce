import React from "react";
import ItemsCard from "./ItemsCard";
const BestSell = () => {
  return (
    <div className="ml-4 md:ml-24">
      <div className="flex items-center">
        <div className="border border-solid w-5 h-10 bg-red-600 rounded-sm"></div>
        <p className="font-semibold text-base text-red-600">
          Today&apos;s Sell
        </p>
      </div>
      <div className="flex justify-between my-9 ">
        <p className="text-4xl font-semibold">Best Selling Products</p>
        <a
          href="/all-products"
          className="border border-solid w-40 h-14 bg-red-500 flex items-center justify-center text-base font-medium text-white rounded"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
      </div>
      <div className="border border-solid w-full h-auto bg-black flex flex-col md:flex-row px-6 md:px-12 items-center justify-between my-9">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-semibold text-green-400">
            Categories
          </p>
          <p className="text-3xl md:text-5xl font-semibold text-white">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-4 md:gap-9 justify-center md:justify-start">
            {[
              { value: "23", label: "Hours" },
              { value: "05", label: "Days" },
              { value: "59", label: "Minutes" },
              { value: "33", label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-solid w-12 h-12 md:w-16 md:h-16 bg-white flex flex-col rounded-full items-center justify-center"
              >
                <p className="text-sm md:text-base font-semibold">
                  {item.value}
                </p>
                <p className="text-[10px] md:text-[11px]">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="w-36 md:w-44 h-12 md:h-14 border border-solid bg-green-400 font-medium text-sm md:text-base text-white flex justify-center items-center  md:mx-0">
            Buy Now
          </div>
        </div>
        <div className="w-full md:w-[60%] mt-6 md:mt-0">
          <img
            src="assets/speaker.jpeg"
            alt="speaker"
            className="w-full h-auto object-cover bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSell;
