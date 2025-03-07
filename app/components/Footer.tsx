import React from "react";
import QRCode from "react-qr-code";

const Footer = () => {
  const qrValue = "https://example.com";

  return (
    <div className="border border-radius bg-black w-full py-12 px-8 md:px-12 lg:px-20">
      <div className="flex flex-wrap justify-between gap-8">
        {/* Subscribe Section */}
        <div className="w-full sm:w-[48%] lg:w-auto">
          <p className="text-2xl font-bold text-white mb-3">Exclusive</p>
          <p className="text-lg font-medium text-white mb-3">Subscribe</p>
          <p className="text-base text-white mb-3">Get 10% off your first order</p>
          <div className="border border-solid rounded-md p-2 flex justify-between items-center bg-white">
            <input
              placeholder="Enter Your Email"
              className="text-gray-600 bg-transparent outline-none flex-1 px-2"
            />
            <button className="text-white bg-black p-2 rounded-md">Send</button>
          </div>
        </div>

        {/* Support Section */}
        <div className="w-full sm:w-[48%] lg:w-auto">
          <p className="text-2xl font-bold text-white mb-3">Support</p>
          <p className="text-base text-white mb-2">111 Bijoy Sarani, Dhaka, Bangladesh</p>
          <p className="text-base text-white mb-2">exclusive@gmail.com</p>
          <p className="text-base text-white">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="w-full sm:w-[48%] lg:w-auto">
          <p className="text-2xl font-bold text-white mb-3">Account</p>
          <ul className="text-base text-white space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="w-full sm:w-[48%] lg:w-auto">
          <p className="text-2xl font-bold text-white mb-3">Quick Links</p>
          <ul className="text-base text-white space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download Section */}
        <div className="w-full lg:w-auto">
          <p className="text-2xl font-bold text-white mb-3">Download App</p>
          <p className="text-sm text-white mb-3">Save $3 with App New User Only</p>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 w-24 h-24">
              <QRCode value={qrValue} size={80} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="border rounded-md flex items-center gap-2 p-2 bg-gray-900 text-white">
                <img src="assets/google_play.png" className="w-8 h-8" alt="Google Play" />
                <div>
                  <p className="text-xs">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </div>
              <div className="border rounded-md flex items-center gap-2 p-2 bg-gray-900 text-white">
                <img src="assets/app_store.png" className="w-8 h-8" alt="App Store" />
                <div>
                  <p className="text-xs">Download on</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
        <span className="text-white text-xl">🔵</span>
        <span className="text-white text-xl">🔴</span>
        <span className="text-white text-xl">🟡</span>
      </div>
    </div>
  );
};

export default Footer;
