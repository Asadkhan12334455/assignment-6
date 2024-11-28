"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="hidden md:block bg-white">
      <header className="w-full bg-gray-100 px-8 py-4 shadow-md">
        {/* Contact Infornation */}
        <div className="flex justify-between items-center text-sm text-gray-700">
          <p>
            Phone Number: 956 742 455 678 
            <span className="mx-4 border-l border-gray-800 h-4 inline-block"></span>
            Email: info@ddsgnr.com
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <FaFacebookF className="text-black cursor-pointer" />
            <FaInstagram className="text-black cursor-pointer" />
            <FaTwitter className=  "text-black  cursor-pointer" />
            <FaLinkedin className= "text-black cursor-pointer" />
          </div>
        </div>
        <hr className="mt-2 border-t border-black border-1" />
      </header>
    </div>
  );
};

export default Header;
