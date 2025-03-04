import React from "react";
import ItemsCard from "./ItemsCard";
const BestSell = () => {
  return (
    <div className="mx-24">
      <div className="flex items-center">
        <div className="border border-solid w-5 h-10 bg-red-600 rounded-sm"></div>
        <p className="font-semibold text-base text-red-600">Today's Sell</p>
      </div>
      <div className="flex justify-between ">
        <p className="text-4xl font-semibold">Best Selling Products</p>
        <div className="border border-solid w-40 h-14 bg-red-500 flex items-center justify-center text-base font-medium text-white  rounded">
          View All
        </div>
      </div>
      <div className="flex overflow-x-scroll gap-6">
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "assets/playstation.jpg",
          }}
        />
      </div>
      <div className=" border border-solid w-full h-[500px] bg-black flex  px-12 items-center justify-between">
        <div className=" flex flex-col gap-6">
            <p className="text-base font-semibold text-green-400">Categories</p>
            <p className="text-5xl font-semibold text-white">Enhance Your Music Experience</p>
            <div className="flex gap-9">
                <div className="border border-solid w-16 h-16 bg-white flex flex-col rounded-full items-center justify-center">
                    <p className="text-base font-semibold">23</p>
                    <p className="text-[11px] ">Hours</p>
                </div>
                <div className="border border-solid w-16 h-16 bg-white flex flex-col rounded-full items-center justify-center">
                    <p className="text-base font-semibold">05</p>
                    <p className="text-[11px] ">days</p>
                </div>
                <div className="border border-solid w-16 h-16 bg-white flex flex-col rounded-full items-center justify-center">
                    <p className="text-base font-semibold">59</p>
                    <p className="text-[11px] ">Minutes</p>
                </div>
                <div className="border border-solid w-16 h-16 bg-white flex flex-col rounded-full items-center justify-center">
                    <p className="text-base font-semibold">33</p>
                    <p className="text-[11px] ">Seconds</p>
                </div>
            </div>
            <div className="w-44 h-14 border border-solid bg-green-400 font-medium text-base text-white flex justify-center items-center ">
                 Buy Now
            </div>
        </div>
        <div className="w-[60%]">
            <img src="assets/speaker.jpeg" alt="speaker" className=" object-cover bg-black" />
        </div>
      </div>
    </div>
  );
};

export default BestSell;
