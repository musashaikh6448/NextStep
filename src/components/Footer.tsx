import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

import darkLogo from "../images/darkLogo-removebg-preview.png";
import lightLogo from "../images/lightLogo-removebg-preview.png";

const Footer: React.FC = () => {
    const { theme } = useStore();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Left Section: Logo/Brand */}
          <div className="mb-4 md:mb-0 flex items-center space-x-2">
             {/* Logo Section */}
             <Link to="/" className="flex items-center gap-2">
            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="CareerPath Logo"
              className="h-16 w-auto"
            />
          </Link>
            {/* <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Next Step</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Your Path to Success</p>
            </div> */}
          </div>

          {/* Center Section: Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              About
            </Link>
           
            <Link to="/contact-us" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              Contact
            </Link>

            <Link to="/privacy-policy" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              Privacy
            </Link>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              {/* Twitter */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              {/* LinkedIn */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5 5 0 0110 0v.286c0 .656-.126 1.283-.356 1.857M14 5h1m0 0a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Next Step. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
