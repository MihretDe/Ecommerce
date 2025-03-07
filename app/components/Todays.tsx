import React from "react";
import ItemsCard from "./ItemsCard";

const Todays = () => {
  return (
    <div className="mx-0 md:mx-12 lg:ml-24">
      {/* Section Title */}
      <div className="flex items-center">
        <div className="border border-solid w-5 h-10 bg-red-600 rounded-sm"></div>
        <p className="font-semibold text-base text-red-600 ml-2">
          Today&apos;s
        </p>
      </div>

      {/* Flash Sales Countdown */}
      <div className="flex flex-col gap-12 my-9 flex-wrap md:justify-start md:flex-row ">
        <p className="text-4xl font-semibold">Flash Sales</p>
        <div className="flex gap-1">
          <div className="text-center">
            <h1 className="text-xs font-semibold">Days</h1>
            <p id="days" className="text-3xl font-bold mt-2">
              0
            </p>
          </div>
          <div className="text-3xl font-bold mt-2 flex items-end justify-center">
            :
          </div>
          <div className="text-center">
            <h1 className="text-xs font-semibold">Hours</h1>
            <p id="hours" className="text-3xl font-bold mt-2">
              0
            </p>
          </div>
          <div className="text-3xl font-bold mt-2 flex items-end justify-center">
            :
          </div>
          <div className="text-center">
            <h1 className="text-xs font-semibold">Minutes</h1>
            <p id="minutes" className="text-3xl font-bold mt-2">
              0
            </p>
          </div>
          <div className="text-3xl font-bold mt-2 flex items-end justify-center">
            :
          </div>
          <div className="text-center">
            <h1 className="text-xs font-semibold text-red-500">Seconds</h1>
            <p id="seconds" className="text-3xl font-bold mt-2">
              0
            </p>
          </div>
        </div>
      </div>

      {/* Items Card - Scrollable Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
        <ItemsCard
          items={{
            discount: -40,
            title: "HAVIT HV-G92 Gamepad",
            curr_price: 120,
            prev_price: 160,
            ratings: 4,
            image: "/assets/playstation.jpg",
          }}
        />
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <p className="border border-solid bg-red-500 w-60 h-14 rounded-md flex items-center justify-center text-white text-base cursor-pointer hover:bg-red-600 font-medium">
          View all products
        </p>
      </div>
    </div>
  );
};

export default Todays;
