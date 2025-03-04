import Navbar from "@/app/components/Navbar";
import Top from "@/app/components/Top";
import Todays from "@/app/components/Todays";
import Categories from "@/app/components/Categories";
import BestSell from "@/app/components/BestSell";
import OurProducts from "@/app/components/OurProducts";
import Featured from "@/app/components/Featured";
import ServiceFeature from "@/app/components/ServiceFeature";
import Footer from "@/app/components/Footer";
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
        <Top />
        <Todays></Todays>
        <Categories />
        <BestSell />
        <OurProducts />
        <Featured />
        <ServiceFeature />
        <Footer />
      </div>
    </div>
  );
}
