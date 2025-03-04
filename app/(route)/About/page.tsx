import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ServiceFeature from "@/app/components/ServiceFeature";
import Image from "next/image";

export default function About() {
  return (
    <>
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
        <div className="mx-32">
          <div className=" py-12">
            <div className="flex items-center justify-between">
              {/* Our Story Section */}
              <div className="text-center mb-12 w-[50%]">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-gray-600 mt-4 text-left">
                  Launched in 2018, Exclusive is South Asia’s premier online
                  shopping marketplace with an active presence in Bangladesh.
                  Supported by a wide range of tailored marketing, data, and
                  service solutions, Exclusive has 10.5k sellers and 300 brands
                  and serves 3 million customers across the region.
                </p>
                <p className="text-gray-600 mt-4 text-left">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assortment in
                  categories ranging from consumer.
                </p>
              </div>
              {/* Image Section */}
              <div className="mb-12 w-[50%]">
                <img
                  src="assets/Side Image.png"
                  alt="Shopping"
                  className="rounded-lg shadow-md w-full "
                />
              </div>
            </div>
            {/* Statistics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              <div className="p-6 border rounded-lg text-center">
                <p className="text-xl font-bold">10.5k</p>
                <p className="text-gray-600">Sellers active on our site</p>
              </div>
              <div className="p-6 border rounded-lg text-center bg-red-500 text-white">
                <p className="text-xl font-bold">33k</p>
                <p>Monthly Product Sale</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <p className="text-xl font-bold">45.5k</p>
                <p className="text-gray-600">Customer active on our site</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <p className="text-xl font-bold">25k</p>
                <p className="text-gray-600">Annual gross sale in our site</p>
              </div>
            </div>
            {/* Team Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-20">
              <div>
                <img
                  src="assets/person1.jpg"
                  alt="Tom Cruise"
                  className="rounded-lg shadow-md w-full"
                />
                <h3 className="text-xl font-bold mt-4">Tom Cruise</h3>
                <p className="text-gray-600">Founder & Chairman</p>
              </div>
              <div>
                <img
                  src="assets/person1.jpg"
                  alt="Emma Watson"
                  className="rounded-lg shadow-md w-full"
                />
                <h3 className="text-xl font-bold mt-4">Emma Watson</h3>
                <p className="text-gray-600">Managing Director</p>
              </div>
              <div>
                <img
                  src="assets/person1.jpg"
                  alt="Will Smith"
                  className="rounded-lg shadow-md w-full"
                />
                <h3 className="text-xl font-bold mt-4">Will Smith</h3>
                <p className="text-gray-600">Product Designer</p>
              </div>
            </div>
            <ServiceFeature />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
