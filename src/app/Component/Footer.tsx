import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 md:px-16">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="text-center sm:text-center md:text-left">
          <h2 className="text-[18px] font-bold text-[#000000]">
            Subscribe to our newsletter
          </h2>
          <p className="text-[16px] text-[#000000] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-4">
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#000000] text-[#000000] rounded-md focus:outline-none text-sm"
            />
            <Button
              type="submit"
              className="text-sm border border-[#000000] bg-white text-[#000000] rounded-md w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-[14px] text-[#000000] mt-4 text-center">
            By subscribing, you agree to our{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-wrap small:flex-col small:items-center md:flex-row md:justify-between gap-8 py-9">
        {/* Logo Section */}
        <div className="flex flex-col items-center xs:items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={130}
            height={41}
            className="mb-4"
          />
        </div>

        {/* Courses Section */}
        <div className="text-center small:text-center md:text-left">
          <h4 className="text-lg font-medium text-[#000000]">Courses</h4>
          <ul className="mt-4 space-y-2 text-[#000000] text-sm">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="text-center small:text-center md:text-left">
          <h4 className="text-lg font-medium text-[#000000]">Resources</h4>
          <ul className="mt-4 space-y-2 text-[#000000] text-sm">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="text-center small:text-center md:text-left">
          <h4 className="text-lg font-medium text-[#000000]">About Us</h4>
          <ul className="mt-4 space-y-2 text-[#000000] text-sm">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:items-center md:flex-row md:justify-between text-gray-800 text-sm">
        <p className="text-center md:text-left">2023 Ddsgnr. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0 small:justify-center small:items-center">
          <div className="hover:underline">Privacy Policy</div>
          <div className="hover:underline">Terms of Service</div>
          <div className="hover:underline">Cookies Settings</div>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0 small:justify-center small:items-center">
          <FaFacebook size={20} aria-label="Facebook" />
          <FaInstagram size={20} aria-label="Instagram" />
          <FaTwitter size={20} aria-label="Twitter" />
          <FaLinkedin size={20} aria-label="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
