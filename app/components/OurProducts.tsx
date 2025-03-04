import React from 'react'
import ItemsCard from './ItemsCard'
const OurProducts = () => {
  return (
    <div className='mx-24'>
      <div className="flex items-center">
        <div className="border border-solid w-5 h-10 bg-red-600 rounded-sm"></div>
        <p className="font-semibold text-base text-red-600">Our Products</p>
      </div>
      <div className="flex justify-between ">
        <p className="text-4xl font-semibold">Explore Our Products</p>
        <div className="flex gap-3">
          <div className="border border-solid w-12 h-12 rounded-full flex items-center justify-center">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L1 8L8 15M1 8H17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="border border-solid w-12 h-12 rounded-full flex items-center justify-center">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8H18M18 8L11 1M18 8L11 15"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4'>
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
      <p className="border border-solid bg-red-500 w-60 h-14 rounded-md flex items-center justify-center text-white text-base cursor-pointer hover:bg-red-600 font-medium">
        View all products
      </p>
    </div>
  )
}

export default OurProducts
