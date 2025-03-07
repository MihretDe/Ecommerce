import Navbar from "../../components/Navbar";
import WishlistComp from "@/app/components/WishlistComp";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      {/* Header Banner */}
      <div className="border border-solid bg-black w-full h-12 flex justify-between px-4 md:px-22 items-center">
        <p className="text-xs sm:text-sm md:text-base text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold">Shop Now</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base text-white">English</p>
      </div>

      <div>
        <Navbar isLoggedIn={true} />
        <hr className="my-6" />

        <div className="my-8 sm:my-16 px-4 md:px-32">
          {/* Wishlist Title and Action */}
          <div className="flex flex-col sm:flex-row justify-between mb-5">
            <p className="text-lg font-semibold">Wishlist (4)</p>
            <p className="border border-solid flex items-center justify-center w-full sm:w-56 h-14 rounded-md text-base font-medium">
              Move All to Bag
            </p>
          </div>

          {/* Wishlist Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            {[...Array(5)].map((_, index) => (
              <WishlistComp
                key={index}
                items={{
                  type: "wishlist",
                  image: "/assets/playstation.jpg",
                }}
              />
            ))}
          </div>

          {/* "Just For You" Section */}
          <div className="mt-14 mb-4 flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className="flex items-center gap-3">
              <div className="border border-solid w-5 h-10 bg-red-600 rounded-md"></div>
              <p className="font-semibold text-lg">Just For You</p>
            </div>
            <div className="border border-solid flex items-center justify-center w-full sm:w-36 h-14 rounded-md text-base font-medium mt-3 sm:mt-0">
              See All
            </div>
          </div>

          {/* Just For You Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            {[...Array(5)].map((_, index) => (
              <WishlistComp
                key={index}
                items={{
                  title: "HAVIT HV-G92 Gamepad",
                  curr_price: 120,
                  prev_price: 160,
                  ratings: 4,
                  image: "/assets/playstation.jpg",
                  type: "Just For You",
                }}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
