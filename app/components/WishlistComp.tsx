import React from "react";
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
    <div className="mb-4">
      <div className="w-72 h-64 bg-gray-100">
        <div className="flex justify-between mb-2 p-2">
          {items.discount ? (
            <div className="border border-solid bg-red-500 w-14 h-7 rounded-md flex items-center justify-center">
              <p className="text-xs text-white font-normal">
                {items.discount}%
              </p>
            </div>
          ) : (
            <div></div>
          )}
          <div className="border border-solid w-8 h-8 bg-white rounded-full flex items-center justify-center">
            {items.type === "Just For You" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.56"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="flex items-start justify-between space-x-4 ">
          <img src={items.image} className="max-w-56 h-44 object-cover" />
        </div>
        <div className="border border-solid bg-black text-white flex justify-center gap-2 w-full h-10 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.25 3.75H5.25L7.5 16.5H19.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Add To Cart</p>
        </div>
      </div>
      {items.type === "Just For You" && (
        <div className="p-2 mt-3">
          <p className="text-base font-medium">{items.title}</p>
          <p className="text-base font-medium text-red-500">
            ${items.curr_price}{" "}
            <span className="line-through text-gray-500">
              ${items.prev_price}
            </span>
          </p>
          <p>
            <span className="flex items-center">
              <span className="text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="ml-2 text-gray-600">(99)</span>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WishlistComp;
