"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 md:px-10 lg:px-32 py-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Exclusive</p>

        {/* Wishlist, Account & Hamburger Menu for Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Wishlist Icon */}
          <a href="./Wishlist">
            <Image
              src="/assets/heart.svg"
              alt="Wishlist"
              width={24}
              height={24}
            />
          </a>

          {/* Account Icon (Only if logged in) */}
          {isLoggedIn && (
            <button onClick={() => setShowDropdown(!showDropdown)}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="16" fill="#DB4444" />
                <path
                  d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Hamburger Menu Button */}
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="/assets/menu.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a className="text-base" href="./Home">
            Home
          </a>
          <a className="text-base" href="./Contact">
            Contact
          </a>
          <a className="text-base" href="./About">
            About
          </a>
          <a className="text-base" href="./signUp">
            Sign Up
          </a>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex border border-solid rounded-md bg-gray-200 px-2 items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-sm bg-gray-200 outline-none px-2 py-1"
            />
            <Image
              src="/assets/search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </div>
          <a href="./Wishlist">
            <Image
              src="/assets/heart.svg"
              alt="Wishlist"
              width={24}
              height={24}
            />
          </a>
          <a href="./Cart">
            <Image
              src="/assets/cart1.svg"
              alt="Wishlist"
              width={24}
              height={24}
            />
          </a>
          {/* Account Icon (Only if logged in) */}
          {isLoggedIn && (
            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#DB4444" />
                  <path
                    d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Mobile Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-50">
                    <a href="./Account" className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                    Manage My Account
                    </a>
                  <p className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                    My Order
                  </p>
                  <p className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                    My Cancellations
                  </p>
                  <p className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                    Logout
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          <a className="text-base" href="./Home">
            Home
          </a>
          <a className="text-base" href="./Contact">
            Contact
          </a>
          <a className="text-base" href="./About">
            About
          </a>
          <a className="text-base" href="./signUp">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
