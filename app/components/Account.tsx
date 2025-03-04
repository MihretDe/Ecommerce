import React from "react";

const Account = () => {
  return (
    <div className="flex gap-24 my-12 ">
      <div>
        <div className="mb-4">
          <p className="text-base font-medium mb-2">Manage My Account</p>
          <ul>
            <li className="text-base text-[#7f7f7f] px-7 mb-1">My Profile</li>
            <li className="text-base text-[#7f7f7f] px-7 mb-1">Address Book</li>
            <li className="text-base text-[#7f7f7f] px-7 mb-1">
              My Payment Options
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-base font-medium mb-2">My Orders</p>
          <ul>
            <li className="text-base text-[#7f7f7f] px-7 mb-1">My Returns</li>
            <li className="text-base text-[#7f7f7f] px-7 mb-1">
              My Cancellations
            </li>
          </ul>
        </div>
        <p className="text-base font-medium">My WishList</p>
      </div>
      <div className="w-[870px] border border-solid shadow-sm p-12">
        <form>
          <p className="text-[20px] font-medium text-[#db4444] mb-2">Edit Your Profile</p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <label>First Name</label>
              <input
                className="w-[330px] border border-solid h-[50px] px-3 bg-[#f5f5f5] rounded-md"
                placeholder="Md"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name</label>
              <input
                placeholder="Rimel"
                className="w-[330px] border border-solid h-[50px] px-3 bg-[#f5f5f5] rounded-md"
              ></input>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                className="w-[330px] border border-solid h-[50px] px-3 bg-[#f5f5f5] rounded-md"
                placeholder="rimel1111@gmail.com"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>Address</label>
              <input
                placeholder="Kingston, 5236, United State"
                className="w-[330px] border border-solid h-[50px] px-3 bg-[#f5f5f5] rounded-md"
              ></input>
            </div>
          </div>
          <p className="text-base">Password Changes</p>
          <input
            className="w-[710px] h-12 border border-solid mb-3 rounded-md px-3"
            placeholder="Current Password "
          ></input>
          <input
            className="w-[710px]  h-12 border border-solid mb-3 rounded-md px-3"
            placeholder="New Password"
          ></input>
          <input
            className="w-[710px] h-12 border border-solid mb-3 rounded-md px-3"
            placeholder="Confirm New Password"
          ></input>
          <div className="flex justify-end items-center gap-4">
            <p>Cancel</p>
            <div className="w-[214px] h-14 border border-solid bg-red-500 flex items-center justify-center mb-2 rounded-md">
              <p className="text-base text-white">Save Changes</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
