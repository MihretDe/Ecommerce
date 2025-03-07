import React from "react"; 
import Category from "./Category";

const Categories = () => {
  return (
    <div className="px-4 md:px-24">
      <div className="flex items-center">
        <div className="border border-solid w-5 h-10 bg-red-600 rounded-sm"></div>
        <p className="font-semibold text-base text-red-600 ml-2">Categories</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left my-9">
        <p className="text-2xl md:text-4xl font-semibold">Browse By Category</p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <div className="border border-solid w-12 h-12 rounded-full flex items-center justify-center">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L1 8L8 15M1 8H17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="border border-solid w-12 h-12 rounded-full flex items-center justify-center">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-16 justify-center">
        <Category image="/assets/phone.png" title="Phones" />
        <Category image="/assets/phone.png" title="Phones" />
        <Category image="/assets/phone.png" title="Phones" />
        <Category image="/assets/phone.png" title="Phones" />
        <Category image="/assets/phone.png" title="Phones" />
        <Category image="/assets/phone.png" title="Phones" />
      </div>
    </div>
  );
};

export default Categories;
