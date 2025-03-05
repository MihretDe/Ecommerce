import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Account from "./components/Account";
import About from "./(route)/About/page";
import Loginpage from "./(route)/login/page";
export default function Home() {
  return (
    <div>
      {/* <div className="border border-solid bg-black w-full h-12 flex justify-around pl-22 ">
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
          <About />
        </div>

        <Footer />
      </div> */}
      <Loginpage />
    </div>
  );
}
