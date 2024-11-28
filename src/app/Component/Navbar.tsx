"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-500">
        <Image
          src="/Logo.png"
          alt="logo"
          width={130}
          height={41}
          className="pt-[10px] pb-[10px]"
        />

        <GiHamburgerMenu size={24} className="text-black md:hidden" />

        <div className="hidden md:flex justify-center bg-white  ">
          <ul className="flex items-center gap-[32px] py-1">
            <li>
              <a
                href="#"
                className="hover:text-gray-700 border-b border-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Achievement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Testimonial
              </a>
            </li>
            <div className="flex gap-4">
              <Button className="h-[40px] w-[80px] bg-white text-black border border-solid border-black text-[16px] rounded-[5px]">
                Login
              </Button>
              <Button className="h-[40px] w-[80px] bg-black text-white text-[16px] rounded-[5px]">
                Sign Up
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
