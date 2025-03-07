import React from "react"; 
import Image from "next/image";

interface Items {
  discount?: number;
  title: string;
  curr_price: number;
  prev_price: number;
  ratings: number;
  image: string;
}

const ItemsCard: React.FC<{ items: Items }> = ({ items }) => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-100 p-2 sm:p-4 rounded-lg shadow-md">
      <div className="relative">
        {items.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            {items.discount}%
          </div>
        )}
        <Image
          src={items.image}
          alt={items.title}
          width={224}
          height={176}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
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

      <div className="mt-3">
        <p className="text-sm sm:text-base font-medium">{items.title}</p>
        <p className="text-sm sm:text-base font-medium text-red-500">
          ${items.curr_price}{" "}
          <span className="line-through text-gray-500 text-xs sm:text-sm">
            ${items.prev_price}
          </span>
        </p>
        <div className="flex items-center space-x-1 mt-1">
          <span className="text-yellow-500 flex">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
          <span className="text-xs sm:text-sm text-gray-600">(99)</span>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
