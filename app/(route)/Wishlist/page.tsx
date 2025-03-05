import Navbar from "../../components/Navbar";
import WishlistComp from "@/app/components/WishlistComp";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div>
      <div className="border border-solid bg-black w-full h-12 flex justify-around pl-22 ">
        <p className="text-sm text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold">ShopNow</span>
        </p>
        <p className="text-sm text-white">English </p>
      </div>
      <div className="">
        <Navbar isLoggedIn={true}></Navbar>
        <hr className="my-6"></hr>
        <div className="my-16 mx-32">
          <div className="flex justify-between mb-5">
            <p>WishList (4)</p>
            <p className="border border-solid flex items-center justify-center w-56 h-14 rounded-md text-base font-medium ">
              {" "}
              Move All to Bag
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <WishlistComp
              items={{
                discount: -40,
                type: "wishlist",
                image: "assets/playstation.jpg",
              }}
            />
            <WishlistComp
              items={{
                type: "wishlist",
                image: "assets/playstation.jpg",
              }}
            />
            <WishlistComp
              items={{
                type: "wishlist",
                image: "assets/playstation.jpg",
              }}
            />
            <WishlistComp
              items={{
                type: "wishlist",
                image: "assets/playstation.jpg",
              }}
            />
            <WishlistComp
              items={{
                type: "wishlist",
                image: "assets/playstation.jpg",
              }}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="border border-solid w-5 h-10 bg-red-600 rounded-md"></div>
              <p className="font-semibold text-base">Just For You</p>
            </div>
            <div className="border border-solid flex items-center justify-center w-36 h-14 rounded-md text-base font-medium ">
              {" "}
              See All
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <WishlistComp
              items={{
                discount: -40,
                title: "HAVIT HV-G92 Gamepad",
                curr_price: 120,
                prev_price: 160,
                ratings: 4,
                image: "assets/playstation.jpg",
                type: "Just For You",
              }}
            />
            <WishlistComp
              items={{
                title: "HAVIT HV-G92 Gamepad",
                curr_price: 120,
                prev_price: 160,
                ratings: 4,
                image: "assets/playstation.jpg",
                type: "Just For You",
              }}
            />
            <WishlistComp
              items={{
                title: "HAVIT HV-G92 Gamepad",
                curr_price: 120,
                prev_price: 160,
                ratings: 4,
                image: "assets/playstation.jpg",
                type: "Just For You",
              }}
            />
            <WishlistComp
              items={{
                title: "HAVIT HV-G92 Gamepad",
                curr_price: 120,
                prev_price: 160,
                ratings: 4,
                image: "assets/playstation.jpg",
                type: "Just For You",

              }}
            />
            <WishlistComp
              items={{
                title: "HAVIT HV-G92 Gamepad",
                curr_price: 120,
                prev_price: 160,
                ratings: 4,
                image: "assets/playstation.jpg",
                type: "Just For You",
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
