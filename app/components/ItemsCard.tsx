import React from "react";
interface Items {
  discount?: number;
  title: string;
  curr_price: number;
  prev_price: number;
  ratings: number;
  image: string;
}
import Image from "next/image";

const ItemsCard: React.FC<{ items: Items }> = ({ items }) => {
  return (
    <div>
      <div className="w-72 h-64 bg-gray-100 p-4">
        <div className="flex justify-between mb-2">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-start justify-between space-x-4 ">
          <Image
            src={items.image}
            alt={items.title}
            width={224} // Equivalent to max-w-56 (56 * 4 = 224px)
            height={176} // Equivalent to h-44 (44 * 4 = 176px)
            className="object-cover"
          />
          <div className="border border-solid w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-base font-medium">{items.title}</p>
      <p className="text-base font-medium text-red-500">
        ${items.curr_price}{" "}
        <span className="line-through text-gray-500">${items.prev_price}</span>
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
  );
};

export default ItemsCard;
