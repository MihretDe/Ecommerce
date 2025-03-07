"use client";
import React from "react";
import Image from "next/image";

interface WishlistItem {
  discount?: number;
  image: string;
  type: string;
  title?: string;
  curr_price?: number;
  prev_price?: number;
  ratings?: number;
}

const WishlistComp: React.FC<{ items: WishlistItem }> = ({ items }) => {
  return (
    <div className="mb-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="w-full bg-gray-100 rounded-lg shadow-md p-3">
        {/* Discount and Icon */}
        <div className="flex justify-between items-center mb-2">
          {items.discount ? (
            <div className="bg-red-500 w-12 h-6 rounded-md flex items-center justify-center">
              <p className="text-xs text-white">{items.discount}%</p>
            </div>
          ) : (
            <div></div>
          )}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            {items.type === "Just For You" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3.57143H2.33333L3.66667 19H14.3333L15.6667 3.57143H1M9 7.42857V15.1429M12.3333 7.42857L11.6667 15.1429M5.66667 7.42857L6.33333 15.1429M6.33333 3.57143L7 1H11L11.6667 3.57143"
                  stroke="black"
                  strokeWidth="1.56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center">
          <Image
            src={items.image}
            alt="Item Image"
            width={200}
            height={150}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="bg-black text-white flex justify-center items-center w-full h-10 mt-3 rounded-md">
          <button
            className="flex items-center gap-2 text-sm sm:text-base"
            onClick={() => {
              alert("Added to cart");
              window.location.href = "/Cart";
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      {items.type === "Just For You" && (
        <div className="p-3 mt-3">
          <p className="text-sm sm:text-base font-medium">{items.title}</p>
          <p className="text-sm sm:text-base font-medium text-red-500">
            ${items.curr_price}{" "}
            <span className="line-through text-gray-500">
              ${items.prev_price}
            </span>
          </p>
          <p className="flex items-center text-yellow-500 text-xs sm:text-sm">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span className="ml-2 text-gray-600">(99)</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WishlistComp;
