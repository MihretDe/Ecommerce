"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div>
      <div className="border border-solid bg-black w-full h-12 flex justify-around pl-22 ">
        <p className="text-sm text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold">ShopNow</span>
        </p>
        <p className="text-sm text-white">English </p>
      </div>
      <div>
        <Navbar isLoggedIn={false}></Navbar>
        <hr className="my-6"></hr>
        <div className="flex  mx-0 gap-40 mb-16">
          <img src="assets/signUp.png" className="mx-0 h-[781px]"></img>
            <form className="flex flex-col justify-center " onSubmit={handleSubmit}>
            <p className="text-4xl font-medium mb-4">Create an account</p>
            <p className="text-base font-normal mb-10">
              Enter your details below
            </p>
            <input
              type="text"
              placeholder="Name"
              className="mb-4 border-b border-solid p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <input
              type="email"
              placeholder="Email"
              className="mb-4 border-b border-solid p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="mb-4 border-b border-solid p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            ></input>
            <button className="border border-solid bg-red-500 mb-4 text-base font-medium text-white py-3 rounded-md  ">
              Create Account
            </button>
            <div className="border border-solid mb-4 text-base font-medium py-3 rounded-md">
              <p className="text-base flex gap-2 items-center justify-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_866_3275)">
                    <path
                      d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_866_3275">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Sign up with Google
              </p>
            </div>
            <p className="text-base text-[#4d4d4d] text-center">
              Already have an account?{"    "}
                <a href="/login" className="font-medium text-blue-500">Log in</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
